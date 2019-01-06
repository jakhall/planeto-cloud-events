from flask import *
from flask_login import LoginManager, login_required, login_user, logout_user, current_user
from google.appengine.ext import ndb
from . import routes
from models import user_model as m
import json


# Utilities:

def userAsDict(user):
  userDict = {'userID': user.key.id(),
              'username': user.username,
              'firstname': user.firstname,
              'lastname': user.lastname,
              'email': user.email}
  return userDict


@routes.route('/api/session/user', methods=['GET'])
def handleGetCurrentUser():
    response = jsonify()
    response.headers.add('Access-Control-Allow-Headers',
                         "Origin, X-Requested-With, Content-Type, Accept, x-auth")
    response = jsonify(userAsDict(m.getUserById(session['userId'])))
    return response

@routes.route('/api/session/user/<int:id>', methods=['POST'])
def handleSetCurrentUser(id):
    session['userId'] = id
    return jsonify(str(session['userId']))


@routes.route('/api/user/login', methods=['POST'])
def handleLogin():
    user = json.loads(request.data)
    username = user['username']
    userInDB = m.getUserByName(username)
    response = make_response(jsonify(message='Username or password incorrect'), 500)
    if userInDB:
        if userInDB[0].password == user['password']:
          login_user(userInDB[0])
          session['userId'] = current_user.key.id()
          response = make_response(jsonify(userAsDict(m.getUserById(session['userId']))), 200)
    return response

@routes.route('/api/user/logout', methods=['GET'])
def handleLogout():
    logout_user()
    for key in session.keys():
     session.pop(key)
    return make_response(jsonify(message='Logout Successful'), 200)
