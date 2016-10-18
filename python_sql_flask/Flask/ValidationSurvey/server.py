from flask import Flask, render_template, request, redirect, flash, session
app = Flask(__name__)
app.secret_key = "banagrama"

def validations_check(pdata):
    all_passed = True
    print "look at me I'm here!"
    if len(pdata['name']) < 1:
        flash("Name cannot be left blank!")
        all_passed = False
    elif len(pdata['comment']) > 120:
        flash("Comment is over 120 characters!")
        all_passed = False
    else:
        print "All validations passed"
        return all_passed

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/result', methods=['POST'])
def create_user():
    if not validations_check(request.form):
        return redirect('/')
    info = {"name": "", "location": "", "language": "", "comment": ""}
    info["name"] = request.form['name']
    info["location"] = request.form['location']
    info["language"] = request.form['language']
    info["comment"] = request.form["comment"]
    session['user_info'] = info

    return render_template('result.html')

# @app.route('/dojos')
# def dojos():
#     return render_template('dojos.html')

app.run(debug=True)
