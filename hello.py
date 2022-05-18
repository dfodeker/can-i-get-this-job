from flask import Flask, redirect, url_for, request, render_template
from actual import *

app= Flask(__name__)

@app.route("/")
def home():
    return render_template('index.html')

@app.route("/jobs")
def jobs():
    return render_template('actual.html')

if __name__ == "__main__":
    app.run(debug=True)