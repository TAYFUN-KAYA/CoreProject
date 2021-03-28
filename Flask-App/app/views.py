from flask import render_template
from app import app

@app.route('/staj')
def home():
    return "Hello World from Flask!"
