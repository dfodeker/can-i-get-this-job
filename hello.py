from flask import Flask, redirect, url_for, request, render_template, flash
from actual import *

app= Flask(__name__)
app.config['SECRET_KEY'] = 'a88a26f4a54e74b3054b40f709f5781aadbed9558c941576'

jobs = [{'Job_ID': 1, 'Job_Title': 'Software Engineer'}]

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