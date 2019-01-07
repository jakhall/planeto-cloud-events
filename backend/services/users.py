from flask import *
from flask_login import login_required
from google.appengine.ext import ndb
from . import routes
from models import user_model as m
from models import event_model
import json
from fuzzywuzzy import process


def userAsDict(user):
    """
    Return a dict type user variable
    Get detailed user data from input
    """
    userDict = {'userID': user.key.id(),
              'username': user.username,
              'firstname': user.firstname,
              'lastname': user.lastname,
              'email': user.email}
    return userDict


def userEventDict(event,username,userId):
    """
    Return a dict type variable mix user data and Event data
    Get detailed user and event data from input
    """
    userEventDict = {
               'userID': userId,
               'creatorName': username,
               'eventID': event.key.id(),
               'userID': event.userID,
               'name': event.name,
               'description': event.description,
               'start': event.start,
               'end': event.end
               }
    return userEventDict


def getEntityID(entity):
    return str(entity.key.id())


@routes.route('/api/user/register', methods=['POST'])
def handleRegister():
    """
    Return a response 200 if successful created
    Return a response 500 if failed
    Creating an User after register via function of user_model.createUser
    Get detailed User data from input items in web page
    """
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
    """
    Display all user data in web page
    Getting all users via function of user_model.getAllUsers
    """
    userList = m.getAllUsers()
    users = [userAsDict(user) for user in userList]
    return jsonify(users)


@routes.route('/api/user/<int:id>')
def handleGetUserbyId(id):
    """
    Return a response 200 if successful search event
    Searching an User by its ID via function of user_model.getUserById
    """
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
        if user:
            response = make_response(user, 200)
    return response


@routes.route('/api/search/<string:username>', methods=['GET'])
def handleSearch(username):
    """
    Return a response 200 if successful search event
    Return a response 500 if failed
    Searching an User by its Name via function of user_model.getUserByName
    Searching all Events by its creator's userID via function of event_model.getUserEvents
    """
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
        events = event_model.getUserEvents(userId)

        # for each user each event create a dict
        for event in events:
            return_list.append(userEventDict(event,username,userId))

    res = json.dumps(return_list)
    response = make_response(res, 200)
    return response