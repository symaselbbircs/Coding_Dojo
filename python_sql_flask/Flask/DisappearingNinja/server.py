from flask import Flask, render_template, request, redirect
app = Flask(__name__)

ninja_turtles_list = {'red':"raphael.jpg", 'blue':"leonardo.jpg", 'purple':"donatello.jpg", 'orange':"Michelangelo.jpeg"}
april = 'april.jpg'
all_turtles = "tmnt.png"

@app.route('/')
def default():
    return render_template("noninjas.html")

@app.route('/ninjas/', defaults={'color': ''})
@app.route('/ninjas/<color>')
def show_user_profile(color):
    if len(color) < 1:
        image=all_turtles
    else:
        if color in ninja_turtles_list.keys():
            image = ninja_turtles_list[color]
        else:
            image = april

    return render_template("index.html", turtle=image)
app.run(debug=True)
