from flask import Flask, render_template, redirect, request, session, flash
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-0\._-]+\.[a-zA-Z]*$')
app = Flask(__name__)
app.secret_key = "SuchSecretMuchWow"

required_fields = ['email','first_name', 'last_name', 'password1' , 'password2']

errors = []
# "email"
# First Name:<input type="text" name="first_name"><br>
# Last Name:<input type="text" name="last_name"><br>
# Password:<input type="password" name="password1"><br>
# Confirm Password:<input type="password" name="password2"
def check_email(email):
    if len(request.form['email']) < 1:
        errors.append("Email cannot be blank!")
        return
    elif not EMAIL_REGEX.match(request.form['email']):
        errors.append("Invalid Email Address!")
        return
    if not EMAIL_REGEX.match(email):
        errors.append("Not a valid email!")
        return

def check_for_valid_fields(form):
    for required_field in required_fields:
        if len(form[required_field]) < 1:
            errors.append("{} field not filled in!".format(required_field))
            return

def check_passwords(a,b):
    uppers = [l for l in a if l.isupper()]
    digit = [char for char in a if char.isdigit()]
    if len(a) > 8 or len(b) > 8:
        errors.append("password is too long! (char limit is 8 characters)")
    if a != b:
        errors.append("Passwords do not match!")
    if not uppers:
        errors.append("Password invalid: requires at least 1 uppercase value")
    if not digit:
        errors.append("Password invalid: requires at least 1 number")

@app.route('/', methods=['GET'])
def index():
    return render_template("index.html")

@app.route('/process', methods=['POST'])
def submit():
    check_for_valid_fields(request.form)
    check_email(request.form['email'])
    check_passwords(request.form['password1'],request.form['password2'])
    if errors:
        [flash(error.pop()) for error in range(0,len(errors))]
    else:
        flash("Success!")
    return redirect('/')

app.run(debug=True)
