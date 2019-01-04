from flask import *
from flask_login import login_required
from google.appengine.ext import ndb
from . import routes
import model as m
import json
from fuzzywuzzy import process

# Utilities:

def userAsDict(user):
  userDict = {'userID': user.key.id(),
              'username': user.username,
              'firstname': user.firstname,
              'lastname': user.lastname,
              'email': user.email}
  return userDict


def userEventDict(event,username,userId):
  userEventDict = {
               'userID': userId,
               'username': username,
               'eventID': event.key.id(),
               'userID': event.userID,
               'name': event.name,
               'description': event.description,
               'start': event.start,
               'end': event.end
               }
  return userEventDict

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


@routes.route('/api/search/<string:username>', methods=['GET'])
def handleSearch(username):
  print username
  response = make_response("Failed", 500)

  # get all username to a list
  choices = [user.username for user in m.getAllUsers()]

  # match 10 most similar username
  res_tuple_list = process.extract(username, choices, limit=10)

  return_list = []
  for match_name,score in res_tuple_list:
     user = m.getUserByName(match_name)[0]

     userId = user.key.id()
     username = match_name
     events = m.getUserEvents(userId)

     # for each user each event create a dict
     for event in events:
        return_list.append(userEventDict(event,username,userId))

  res = json.dumps(return_list)
  response = make_response(res, 200)
  return response