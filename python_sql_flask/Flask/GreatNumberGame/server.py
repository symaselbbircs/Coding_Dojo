from flask import Flask, render_template, request, redirect, session, Markup
from random import randrange
app = Flask(__name__)
app.secret_key = 'BananaGrams' # you need to set a secret key for security purposes


def generate_random_number():
    if "answer" not in session:
        print "No random number found in session! Generating random number."
        session["answer"] = randrange(0,101)

def check_guess(guess):
    if guess == session["answer"]:
        session['instruction'] = "You Win!"
        session['instruction_id'] = Markup("<span id='win'>")
        session.pop('answer')
    elif session["answer"] < guess:
        session['instruction_id'] = Markup("<span id='lower'>")
        session['instruction'] = "Lower!"
    else:
        session['instruction_id'] = Markup("<span id='higher'>")
        session['instruction'] = "Higher!"

@app.route('/')
def index():
    generate_random_number()
    return render_template('index.html', number=session["answer"])

@app.route('/guess', methods=['POST'])
def guess():
    if request.form['guess'] == '':
        return redirect('/')
    check_guess(int(request.form['guess']))
    return redirect('/')

app.run(debug=True)
