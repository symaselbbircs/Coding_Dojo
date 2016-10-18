from flask import Flask, request, redirect, render_template, session, flash
import sys
import re
from flask_bcrypt import Bcrypt

sys.path.append('../')
from sqlconnector.mysqlconnection import MySQLConnector

app = Flask(__name__)
bcrypt = Bcrypt(app)

app.secret_key = "TheresAlwaysMoneyInTheBananaStand"
mysql = MySQLConnector(app,'flask_sql_assignments') #using the db from friends assignment as this has many users in the db

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-0\._-]+\.[a-zA-Z]*$')
NAME_REGEX = re.compile(r'[0-9]+')
errors = []
wall_data = {}
# wall_data={"mid":{"uid":"","date":"","content":"","comments":[{"uid":"","date":"","content":""},{"uid":"","date":"","content":""}]}}


def hasNumbers(a):
    return any(char.isdigit() for char in a)

def email_validation(email):
    if len(request.form['email']) < 1:
        errors.append("Email cannot be blank!")
        return
    elif not EMAIL_REGEX.match(request.form['email']):
        errors.append("Invalid Email Address!")
        return
    if not EMAIL_REGEX.match(email):
        errors.append("Not a valid email!")
        return

def un_validation(un):
    query = """SELECT id from users where username = :un"""
    data = {"un": un}
    result = mysql.query_db(query,data)
    if result:
        print result
        errors.append("User name {} is already taken!".format(un))

def pw_validation(a,b):
    uppers = [l for l in a if l.isupper()]
    digit = [char for char in a if char.isdigit()]
    if len(a) < 9:
        errors.append("Passwords need to be at least 8 characters!")
    if a != b:
        errors.append("Passwords do not match!")
    if not uppers:
        errors.append("Password invalid: requires at least 1 uppercase value")
    if not digit:
        errors.append("Password invalid: requires at least 1 number")

def add_user_to_db(data):
    query = """INSERT INTO users (first_name,last_name,email,username,password,created_at,updated_at)
               VALUES (:first_name,:last_name,:email,:username,:password,NOW(),NOW())"""
    data = {"first_name": data["first_name"],
            "last_name": data["last_name"],
            "password": bcrypt.generate_password_hash(data["password1"]),
            "email": data["email"],
            "username": data["username"]}
    mysql.query_db(query,data)

def check_name(name):
    if len(name) < 3:
        errors.append("Name '{}' needs to be at least 2 characters!".format(name))
    if hasNumbers(name):
        errors.append("Name '{}' contains a number!".format(name))

def get_user_info(un):
    query = """SELECT * FROM users where username=:un"""
    data = {"un":un}
    return mysql.query_db(query,data)

def load_messages():
    query="""SELECT m.id, m.user_id, CONCAT(u.first_name, ' ', u.last_name) as name, m.message, CONCAT(MONTHNAME(m.updated_at), " ", DAY(m.updated_at), ", ", YEAR(m.updated_at)) AS date from messages m
             LEFT JOIN users u
             ON u.id = m.user_id
             ORDER BY date ASC"""
    result = mysql.query_db(query)
    for row in result:
        wall_data[row['id']] = {"uid":row['user_id'],
                                "date":str(row['date']),
                                "name":row['name'],
                                "message":row['message'],
                                "comments":[]}

def load_comments():
    query="""SELECT c.message_id, CONCAT(u.first_name, ' ', u.last_name) as name, c.comment, u.id as user_id, concat(MONTHNAME(c.updated_at), " ", DAY(c.updated_at), ", ", YEAR(c.updated_at)) AS date  from comments c
             left join users u
             on u.id = c.user_id
             ORDER BY date ASC"""
    result = mysql.query_db(query)
    for row in result:
        wall_data[row['message_id']]["comments"].append({"uid":row["user_id"],"name":row["name"],"date":str(row["date"]),"comment":row["comment"]})

def refresh_wall_data():
    wall_data = {}
    load_messages()
    load_comments()

#####ALL ROUTES LIVE DOWN HERE ######

@app.route('/')
def index():
    if "name" in session:
        refresh_wall_data()
        print wall_data
        print "wall data {}".format(wall_data)
        return render_template('thewall.html',data=wall_data)
    return render_template('login.html')

@app.route('/login', methods=["POST"])
def login():
    results = get_user_info(request.form['username'])
    if results:
        if not bcrypt.check_password_hash(results[0]['password'], request.form['password']):
            flash({"alert":"Password for {} is incorrect!".format(request.form['username'])})
            return redirect('/')
        else:
            session['id'] = results[0]['id']
            session['username'] = results[0]['username']
            session['password'] = request.form['password']
            session['name'] = results[0]['first_name'] + " " + results[0]['last_name']
            # return render_template('thewall.html')
    else:
        flash({"alert":"Username {} not found! Please click 'Add New User'.".format(request.form['username'])})
    return redirect('/')

@app.route('/users/new', methods=["GET"])
def create():
    return render_template('newuser.html')

@app.route('/logout')
def logout():
    goodbye = "You've successfully logged out, {}.".format(session["username"])
    session.clear()
    flash({"success":goodbye})
    return redirect('/')

@app.route('/users/new', methods=["POST"])
def add_user():
    un_validation(request.form['username'])
    pw_validation(request.form['password1'],request.form['password2'])
    check_name(request.form['first_name'])
    check_name(request.form['last_name'])
    email_validation(request.form['email'])

    if errors:
        [flash(errors.pop()) for error in range(0,len(errors))]
        return redirect('/users/new')
    else:
        add_user_to_db(request.form)
        flash({'success':"Successfully created user for {} {}".format(request.form['first_name'],request.form['last_name'])})
        return redirect('/')

@app.route('/message', methods=["POST"])
def add_message():
    query = """INSERT INTO messages (user_id,message,created_at,updated_at)
               VALUES (:id,:message,NOW(),NOW())"""
    data = {"id":session['id'],
            "message":request.form['message']}
    mysql.query_db(query,data)
    return redirect('/')

@app.route('/comment/<mid>', methods=["POST"])
def add_comment(mid):
    query = """ INSERT INTO comments (user_id,comment,created_at,updated_at,message_id)
                VALUES (:uid,:comment,NOW(),NOW(),:mid)"""
    data = {"uid": session['id'],
            "comment": request.form["comment"],
            "mid":mid}
    mysql.query_db(query,data)
    return redirect('/')

app.run(debug=True)
