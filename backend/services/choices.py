from flask import *
from flask_login import login_required
from google.appengine.ext import ndb
from datetime import datetime
from . import routes
from models import choice_model as m
import json


def get_client():
    return datastore.Client(current_app.config['planeto-app'])


@app.route('/api/choice/<int:userID>', methods=['POST'])
def handleCreateChoice(userID):
    """
    Return a response 200 if successful created
    Creating a choice by creator's ID via function of choice_model.createChoice
    Get detailed choice data from input items in web page
    """
    choice = json.loads(request.data)
    choice = m.createChoice(eventID=choice['eventID'],
                            userID=userID,
                            dateChoice=choice['date'])
    return make_response(str(choice.key.id()), 200)


@app.route('/api/choice/<int:eventID>', methods=['PUT'])
def handleUpdateChoice(eventID):
    """
    Return a response 200 if successful updated
    Updating a choice by its ID via function of choice_model.updateChoice
    Get detailed event data from input items in web page
    """
    choice = json.loads(request.data)
    choice = m.updateChoice(eventID=eventID,
                          userID=choice['userID'],
                          dateChoice=choice['date'])
    return make_response(str(choice.key.id()), 200)


@app.route('/api/choice/<int:userID>/<int:eventID>', methods=['DELETE'])
def handleDeleteChoice(userID, eventID):
    """
    Return a response 200 if successful deleted
    Deleting a choice by its ID and creator's ID via function of choice_model.deleteChoice
    """
    m.deleteChoice(eventID=eventID, userID=userID)
    return make_response(str(eventID), 200)


@app.route('/api/test/createUser')
def testCreateUser():
    user = m.createUser('tewang', 'te', 'wang', 'tewang@foxmail.com', "123456")
    return jsonify(userAsDict(user))


@app.route('/api/test/getUser')
def testGetUser():
    user = m.getUserByName('tewang')
    return jsonify(userAsDict(user))
