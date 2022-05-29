from turtle import title
from flask import Flask, redirect, url_for, request, render_template, flash
from actual import *

app= Flask(__name__)
app.config['SECRET_KEY'] = 'a88a26f4a54e74b3054b40f709f5781aadbed9558c941576'

results = [{'Job_Title': 'Software Engineer'}]

@app.route("/")
def home():
    return render_template('index.html')

@app.route("/zh")
def zh():
    return render_template('index-zh.html')

@app.route("/en")
def en():
    return render_template('index.html')


@app.route("/jobs", methods=["GET", "POST"])
def jobs():
    if request.method == "POST":
        results = request.form['nm']
        return redirect(url_for("results", res=results))
    else:
        return render_template('actual.html')
@app.route("/results/<res>")
def results(res):
    if request.method == "POST":
        results = request.form['jobsT']
        return redirect(url_for("results", results=res))
if __name__ == "__main__":
    app.run(debug=True)