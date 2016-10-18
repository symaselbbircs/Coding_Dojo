from flask import Flask, request, redirect, render_template, session, flash
import re
import sys
sys.path.append('../')
from sqlconnector.mysqlconnection import MySQLConnector
app = Flask(__name__)
app.secret_key = "SuperSecretStuff"

mysql = MySQLConnector(app,'flask_sql_assignments')
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-0\._-]+\.[a-zA-Z]*$')

def email_is_valid(email):
    if EMAIL_REGEX.match(email):
        return True
    else:
        return False

def query_all_emails():
    query = """SELECT email,created_at FROM emails"""
    return mysql.query_db(query)

def add_email_to_db(email):
    query = """INSERT INTO emails (email, created_at, updated_at)
               VALUES (:email, NOW(),NOW())"""
    data = {'email':email}
    return mysql.query_db(query,data)


@app.route('/seeallemails')
def show_emails():
    results = query_all_emails()
    return render_template('success.html', all_emails=results)

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/addemail', methods=['POST'])
def add_email():
    email = request.form['email']
    if not email_is_valid(email):
        print "email {} is not valid".format(email)
        flash(' ')
        return redirect('/')
    else:
        add_email_to_db(email)
        results = query_all_emails()
    return render_template('success.html', all_emails=results, email=email)

app.run(debug=True)
