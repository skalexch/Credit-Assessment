from flask_cors import CORS
from flask import Flask, jsonify, request

app = Flask(__name__)
CORS(app)
@app.route('/', methods=["GET","POST"])
def main():
    if request.method=='POST':
        data=request.get_json()
        print (data)
