
from flask import Flask
from google.appengine.ext import ndb
import model


app = Flask(__name__)

@app.route('/')
def index():
    query = model.getUser("admin1")
    return query.fetch()[0].username

@app.route('/profile')
def profile():
    return 'This is the profile page'

@app.route('/calendar')
def calendar():
    return 'This is the calendar page'

if __name__ == '__main__':
    app.run(debug=True)
