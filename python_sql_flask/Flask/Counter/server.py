from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'ThisIsSecret' # you need to set a secret key for security purposes

def load_current_session():
    if 'count' in session:
        session['count'] += 1
        if session['count'] == 1:
            session['time'] = 'time.'
        else:
            session['time'] = 'times.'
    else:
        session['count'] = 0
        session['time'] = 'times.'
@app.route('/')
def index():
    load_current_session()
    return render_template("index.html", counter = str(session['count']))

@app.route('/reset')
def reset_count():
    session['count'] = -1
    return redirect('/')

@app.route('/addtwo')
def add_two():
    load_current_session()
    return redirect('/')
# @app.route('/users', methods=['POST'])
# def create_user():
#     print "Got Post Info"
#
#     session['name'] = request.form['name']
#     session['email'] = request.form['email']
#     return redirect('/show')
#
# @app.route('/show')
# def show_user():
#     # return render_template('user.html', name=session['name'], email=session['email'])
#     return render_template('user.html')


app.run(debug=True)
