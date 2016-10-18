from flask import Flask, request, redirect, render_template, session, flash
import sys

sys.path.append('../')
from sqlconnector.mysqlconnection import MySQLConnector

app = Flask(__name__)

# app.secret_key = "aabbbCdefgh234"
mysql = MySQLConnector(app,'api_ajax') #using the db from friends assignment as this has many users in the db


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/posts')
def get_posts():
    query = """SELECT * from posts"""
    res = mysql.query_db(query)
    return render_template('posts.html', posts=res)

@app.route('/posts/create', methods=['POST'])
def post_data():
    query = """INSERT INTO posts (created_at,updated_at,description) VALUES (NOW(),NOW(),:description)"""
    # query = """SELECT * from posts"""
    data = {"description": request.form['description']}
    mysql.query_db(query, data)
    return redirect('/posts')

app.run(debug=True)
