
from flask import *
from google.appengine.ext import ndb
import model


app = Flask(__name__)


def userAsDict(user):
    userDict = {'userID': user.key.id(),
                'username': user.username,
                'firstname': user.firstname,
                'lastname': user.lastname,
                'email': user.email}
    return userDict


@app.route('/')
def index():
    user = model.getUserByName("admin1")
    return str(user.key)

@app.route('/profile')
def handleProfile():
    return 'This is the profile page'

@app.route('/calendar')
def handleCalendar():
    return 'This is the calendar page'

@app.route('/register', methods=['POST', 'GET'])
def handleRegister():
    response = "Failed";
    if request.method == 'POST':
        model.createUser(request.form['username'],
                         request.form['firstname'],
                         request.form['lastname'],
                         request.form['email'])
        response = "Success";
    return response


@app.route('/profile/<int:id>')
def handleGetUser(id):
    user = jsonify(userAsDict(model.getUserById(id)))
    return make_response(user, 200)


if __name__ == '__main__':
    app.run(debug=True)
