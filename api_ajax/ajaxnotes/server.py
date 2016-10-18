from flask import Flask, request, redirect, render_template, session, flash
import sys

sys.path.append('../')
from sqlconnector.mysqlconnection import MySQLConnector

app = Flask(__name__)

mysql = MySQLConnector(app,'api_ajax')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/notes')
def get_notes():
    query = """SELECT id,
                      concat(monthname(updated_at), ' ', day(updated_at), ', ', year(updated_at)) as date,
                      title,
                      description
                      FROM notes
                      ORDER BY updated_at DESC"""
    data = mysql.query_db(query)
    return render_template('notes.html', data=data)

@app.route('/notes/del/note<id>')
def del_note(id):
    print id
    query = """DELETE FROM notes
               WHERE id = :id"""
    data = {"id":id}
    mysql.query_db(query,data)
    return redirect('/notes')

@app.route('/notes/update/note<id>', methods=["POST"])
def edit_note(id):
    query = """UPDATE notes SET title = :new_title, description = :new_description, updated_at = NOW()
               WHERE id = :id"""
    print id, request.form['title'], request.form['description']
    data = {"new_title": request.form['title'],
            "new_description": request.form['description'],
            "id":id}
    mysql.query_db(query,data)
    return redirect('/notes')

@app.route('/notes/add', methods=["POST"])
def add_note():
    query = """INSERT INTO notes (title, description, created_at, updated_at)
               VALUES (:title, :content, NOW(), NOW())"""
    data = {"title": request.form['new_title'],
            "content": request.form['new_description']}
    mysql.query_db(query,data)
    return redirect('/notes')

app.run(debug=True)
