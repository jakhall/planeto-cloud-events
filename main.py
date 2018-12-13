
from flask import *
from google.appengine.ext import ndb
import model as m


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
    return "Welcome to Planeto!"

@app.route('/users')
def handleAllUsers():
    userList = m.getAllUsers()
    users = [userAsDict(user) for user in userList]
    return jsonify(users)

@app.route('/calendar')
def handleCalendar():
    return 'This is the calendar page'

@app.route('/register', methods=['POST', 'GET'])
def handleRegister():
    response = "Failed";
    if request.method == 'POST':
        m.createUser(request.form['username'],
                         request.form['firstname'],
                         request.form['lastname'],
                         request.form['email'])
        response = "Success";
    return response


@app.route('/profile/<int:id>')
def handleGetUser(id):
    user = jsonify(userAsDict(m.getUserById(id)))
    return make_response(user, 200)


if __name__ == '__main__':
    app.run(debug=True)
