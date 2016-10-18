from flask import Flask, render_template, request, redirect
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/users', methods=['POST'])
def create_user():
    print "Got Post Info"


    name = request.form['name']
    email = request.form['email']
    print "Name: {} Email: {}".format(name,email)
    return redirect('/')

# @app.route('/dojos')
# def dojos():
#     return render_template('dojos.html')

app.run(debug=True)
