from flask import Flask, render_template, request, session, Markup, redirect
from random import randrange
from datetime import datetime
app = Flask(__name__)
app.secret_key = 'mushySoup1'

def fetch_money(smallest,largest):
    return randrange(smallest,largest)

def build_activity(building,money):
    date = datetime.now().strftime("%Y/%m/%d %I:%M %p")
    response = "<p"
    if money > 0:
        response += " class='gained_money'>Earned {} golds from the {}! ({})</p>".format(money,building,date)
    elif money < 0:
        response += " class='lost_money'>Entered a {} and lost {} golds...Yikes.. ({})</p>".format(building,money,date)
    else:
        response += ">Entered a {} and broke even! Be careful, you may not be so lucky next time... ({})</p>".format(building,date)
    return response


def get_money(building):
    if building == "farm":
        money = fetch_money(10,21)
    elif building == "cave":
        money = fetch_money(5,11)
    elif building == "house":
        money = fetch_money(2,6)
    elif building == "casino":
        money = fetch_money(-50,51)
    session["my_gold"] += money
    return money

@app.route('/')
def index():
    if "my_gold" not in session:
        session["my_gold"] = 0
    return render_template('index.html')

@app.route('/process_money', methods=['POST'])
def process_money():
    if "log" not in session:
        session["log"] = []
    building = request.form['building']
    money = get_money(building)
    session["log"].append(build_activity(building,money))
    session["display_log"] = Markup("\n".join(session["log"]))
    return redirect('/')


app.run(debug=True)
