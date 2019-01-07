from flask import *
from flask_login import LoginManager, login_required, login_user, logout_user, current_user
from google.appengine.ext import ndb
from . import routes
from models import user_model as m
import json


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


@routes.route('/api/session/user', methods=['GET'])
def handleGetCurrentUser():
    """
    Display the Current User detailed data in web page
    Searching an user by its ID via function of user_model.getUserById
    """
    response = jsonify()
    response.headers.add('Access-Control-Allow-Headers',
                         "Origin, X-Requested-With, Content-Type, Accept, x-auth")
    response = jsonify(userAsDict(m.getUserById(session['userId'])))
    return response


@routes.route('/api/session/user/<int:id>', methods=['POST'])
def handleSetCurrentUser(id):
    """
    Display the Current User ID in web page
    Setting an user as Current User in session
    """
    session['userId'] = id
    return jsonify(str(session['userId']))


@routes.route('/api/user/login', methods=['POST'])
def handleLogin():
    """
    Return a response 200 if successful login
    Return a response 500 if failed
    Searching an User by its ID via function of user_model.getUserByName
    Then Checking the login password if matched
    """
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
    """
    Display the logout result in web page
    Removing an user if login in session
    """
    response = jsonify()
    response.headers.add('Access-Control-Allow-Headers',
                         "Origin, X-Requested-With, Content-Type, Accept, x-auth")
    for key in session.keys():
        session.pop(key)
    response = jsonify("Logout Successful")
    return response


@routes.route('/api/session', methods=['GET'])
def handleIsLoggedIn():
    """
    Return a response 200 if successful matched
    Display the match result in web page
    Checking an user if login in session
    """
    if 'userId' in session.keys():
        return make_response(jsonify("Exists"), 200)
    return make_response(jsonify("Does not exist"), 200)
