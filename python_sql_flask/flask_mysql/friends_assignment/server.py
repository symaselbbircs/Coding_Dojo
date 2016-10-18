from flask import Flask, request, redirect, render_template, session, flash
import sys
sys.path.append('../')
from sqlconnector.mysqlconnection import MySQLConnector
app = Flask(__name__)

app.secret_key = "ThisIsSuperSecret"
mysql = MySQLConnector(app,'friends') #using the db from friends assignment as this has many users in the db

def check_names(data):
    if "first_name" not in data and "last_name" not in data:
        return "First and/or Last Name not entered!"
    if len(data['first_name']) < 2 or len(data['last_name']) < 2:
        return "First and/or Last Name is 1 character or less!"
    return False

@app.route('/')
def index():
    query = "SELECT * FROM users ORDER BY updated_at DESC"
    friends = mysql.query_db(query)
    return render_template('index.html', all_friends = friends)

@app.route('/friends', methods=['POST'])
def create():
    name_check = check_names(request.form)
    if name_check:
        flash({'alert':"Could Not add Friend!" + name_check})
        return redirect('/')
    query = """INSERT INTO users (first_name,last_name,created_at,updated_at)
               VALUES (:first_name,:last_name,NOW(),NOW())"""
    data = {"first_name":request.form['first_name'],
            "last_name":request.form['last_name']}
    mysql.query_db(query,data)
    flash({'success':"Friend {} {} Added!".format(data['first_name'],data['last_name'])})
    return redirect('/')

@app.route('/friends/<id>', methods=['POST'])
def update(id):
    query="""UPDATE users SET first_name=:first_name, last_name=:last_name, updated_at=NOW() where id = :id """
    data = {"id":id,
            "first_name":request.form['first_name'],
            "last_name":request.form['last_name']}
    mysql.query_db(query,data)
    flash({'success': "Friend {} {} Updated!".format(data['first_name'],data['last_name'])})
    return redirect('/')


@app.route('/friends/<id>/edit')
def edit(id):
    query = """SELECT id, first_name, last_name FROM users where id = :id"""
    data = {"id": id}
    friend = mysql.query_db(query,data)
    return render_template('edit.html', friend=friend[0])

@app.route('/friends/<id>/delete', methods=['POST'])
def destroy(id):
    data = {'id':id}
    query1 = """SELECT first_name, last_name from users where id = :id """
    friend = mysql.query_db(query1,data)
    query2 = """DELETE FROM users WHERE id = :id"""
    result = mysql.query_db(query2,data)
    print result
    flash({'success': "Friend {} {} Deleted!".format(friend[0]["first_name"], friend[0]["last_name"])})
    return redirect('/')



app.run(debug=True)
