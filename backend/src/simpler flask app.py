import flask
import pickle
import pandas as pd
# Use pickle to load in the pre-trained model.
with open('C:/Users/Amine/Desktop/RFC (1).pkl', 'rb') as f:
    model = pickle.load(f)
app = flask.Flask(__name__, template_folder='templates')
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
