import flask
app = flask.Flask('your_flask_env')

@app.route('/register', methods=['GET', 'POST'])
def main():
    if flask.request.method == 'POST':
        firstName = flask.request.values.get('firstName') 
        lastName = flask.request.values.get('lastName')
        CIN = flask.request.values.get('CIN')
        password = flask.request.values.get('pass')
        password = flask.request.values.get('pass') #a changer
        password = flask.request.values.get('pass')
        password = flask.request.values.get('pass')
        password = flask.request.values.get('pass')
        your_register_routine(username, password)
    else:
        # You probably don't have args at this route with GET
        # method, but if you do, you can access them like so:
        yourarg = flask.request.args.get('argname')
        your_register_template_rendering(yourarg)
