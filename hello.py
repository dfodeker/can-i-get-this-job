from flask import Flask, redirect, url_for, request, render_template
from actual import *

app= Flask(__name__)

@app.route("/")
def home():
    return render_template('index.html')

@app.route("/jobs", methods=["GET", "POST"])
def jobs():
    if request.method == "POST":
        user = request.form['nm']
        return redirect(url_for("user", usr=user))
    else:
        return render_template('actual.html')
@app.route("/user/<usr>")
def user(usr):
    return f"<h1>Hello {usr}</h1>"

if __name__ == "__main__":
    app.run(debug=True)