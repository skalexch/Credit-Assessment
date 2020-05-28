# coding=utf-8

from flask_cors import CORS
from flask import Flask, jsonify, request

from .entities.entity import Session, engine, Base
from .entities.user import User, UserSchema
from .entities.loan import Loan, LoanSchema

# creating the Flask application
app = Flask(__name__)
CORS(app)

# if needed, generate database schema
Base.metadata.create_all(engine)


@app.route('/users')
def get_users():
    # fetching from the database
    session = Session()
    user_objects = session.query(User).all()

    # transforming into JSON-serializable objects
    schema = UserSchema(many=True)
    users = schema.dump(user_objects)

    # serializing as JSON
    session.close()
    return jsonify(users.data)


@app.route('/users', methods=['POST'])
def add_user():
    # mount euser object
    posted_user = UserSchema(only=('username', 'password'))\
        .load(request.get_json())

    user = User(**posted_user.data, created_by="HTTP post request")

    # persist exam
    session = Session()
    session.add(user)
    session.commit()

    # return created exam
    new_user = UserSchema().dump(user).data
    session.close()
    return jsonify(new_user), 201


@app.route('/loans')
def get_loans():
    # fetching from the database
    session = Session()
    loan_objects = session.query(Loan).all()

    # transforming into JSON-serializable objects
    schema = LoanSchema(many=True)
    loans = schema.dump(loan_objects)

    # serializing as JSON
    session.close()
    return jsonify(loans.data)


@app.route('/loans', methods=['POST'])
def add_loan():
    # mount euser object
    posted_user = LoanSchema(only=('Loan_ID', 'Loan_Status'))\
        .load(request.get_json())

    loan = Loan(**posted_user.data, created_by="HTTP post request")

    # persist exam
    session = Session()
    session.add(loan)
    session.commit()

    # return created exam
    new_loan = LoanSchema().dump(loan).data
    session.close()
    return jsonify(new_loan), 201









import flask
import pickle
import pandas as pd
# Use pickle to load in the pre-trained model.
with open('RFC.pkl', 'rb') as f:
    model = pickle.load(f)

    
@app.route('/', methods=['GET', 'POST'])
def main():
    if flask.request.method == 'GET':
        return(flask.render_template('main.html'))
    if flask.request.method == 'POST':
        L=['Solde du compte courant', 'Durée de crédit (en mois)',
       'Historique des crédits', 'Motif', 'Montant du crédit',
       "Compte d'épargne / obligations", 'Employé depuis',
       'Statut personnel et sexe', 'Autres débiteurs / garants',
       'Résidence actuelle depuis', 'Age', 'Logement',
       'Nombre de crédits existants dans cette banque', 'Emploi',
       'Nombre de personnes à charge']
        input_variables = pd.DataFrame(columns=L)
        h=[]
    
        for i in L:
           h.append(flask.request.form[i])
        input_variables.loc[-1]=h
                
        prediction = model.predict_proba(input_variables)[:,1]
        return flask.render_template('main.html',
                                     
                                            
                                     result=prediction,
                                     )
if __name__ == '__main__':
    app.run()
