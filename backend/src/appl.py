from flask import Flask, request
app = Flask(__name__)

@app.route('/')
def hello_world():
    email = request.form.get('firstName')
    return email
