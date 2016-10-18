from flask import Flask, render_template, request, redirect
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/result', methods=['POST'])
def create_user():
    info = {"name": "", "location": "", "language": "", "comment": ""}

    info["name"] = request.form['name']
    info["location"] = request.form['location']
    info["language"] = request.form['language']
    info["comment"] = request.form["comment"]

    return render_template('result.html', info=info)

# @app.route('/dojos')
# def dojos():
#     return render_template('dojos.html')

app.run(debug=True)
