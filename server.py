from flask import Flask, jsonify , request
import requests
import urllib.request, json
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

Food_API_l=os.environ.get("Food_API")
Food_API='d7274fb99de64a45b18f9bc732fb25cb'

@app.route('/MainPage')
def get_data():
    data={'name':'anisha'}
    return jsonify(data)

@app.route("/acceptText", methods=['POST'])
def get_info():
    data = request.data
    print(data)
    print(Food_API)
    content = requests.get("https://api.spoonacular.com/recipes/findByIngredients?ingredients=" +str(data)+"&apiKey=" +Food_API )
    json_response = json.loads(content.text)
    print (json_response[1])
    #url = "https://api.spoonacular.com/recipes/random?api_key={}".format(Food_API)
    #response = urllib.request.urlopen(url)
    #data = response.read()
    #dict = json.loads(data)
    #print(dict)

    return json_response
    

if __name__=='__main__':
    app.run(debug=True)