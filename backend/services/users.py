from flask import *
from flask_login import login_required
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

#functions:

@routes.route('/api/user/register', methods=['POST'])
def handleRegister():
  response = make_response("error", 500)
  user = json.loads(request.data)
  if m.getUserByName(user['username']):
    response = make_response("username already exists", 500)
    return response
  createdUser = m.createUser(user['username'],
                             user['firstname'],
                             user['lastname'],
                             user['email'],
                             user['password'])
  response = make_response(getEntityID(createdUser), 200)
  return response

@routes.route('/api/users')
def handleAllUsers():
  userList = m.getAllUsers()
  users = [userAsDict(user) for user in userList]
  return jsonify(users)


@routes.route('/api/user/<int:id>')
def handleGetUserbyId(id):
  user = jsonify(userAsDict(m.getUserById(id)))
  return make_response(user, 200)


@routes.route('/api/user/<int:id>', methods=['PUT'])
def handleUpdateUser(id):
    user = json.loads(request.data)
    response = make_response("User Doesn't Exist", 500)
    if request.method == 'PUT':
      user = m.updateUser( id=id,
                            username=user['username'],
                            firstname=user['firstname'],
                            lastname=user['lastname'],
                            email=user['email'],
                            password=user['password']);
      if event:
        response = make_response(user, 200)
    return response
