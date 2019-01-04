from flask import *
from flask_login import login_required, login_user, logout_user, current_user
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


@routes.route('/api/user/login', methods=['POST'])
def handleLogin():
    user = json.loads(request.data)
    username = user['username']
    userInDB = m.getUserByName(username)
    response = make_response(jsonify(message='Username of password incorrect'), 500)
    if userInDB:
        if userInDB[0].password == user['password']:
          login_user(userInDB[0])
          response = make_response(jsonify(userAsDict(current_user)), 200)
    return response

@routes.route('/api/user/logout', methods=['GET'])
def handleLogout():
    logout_user()
    return make_response(jsonify(message='Logout Successful'), 200)

@routes.route('/api/session/user', methods=['GET'])
@login_required
def handleGetCurrentUser():
    return make_response(jsonify(userAsDict(current_user)), 200)
