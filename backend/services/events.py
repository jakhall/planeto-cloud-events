from flask import *
from flask_login import login_required
from google.appengine.ext import ndb
from datetime import datetime
from . import routes
from models import event_model as m
from models import user_model as u
import json


def eventAsDict(event,username):
    """
    Return a dict type event variable
    Get detailed event data from input
    Set creatorName field as the username variable
    """
    eventDict = {'eventID': event.key.id(),
               'userID': event.userID,
               'name': event.name,
               'creatorName': username,
               'description': event.description,
               'start': event.start,
               'end': event.end}
    return eventDict


def formatStr(dt):
    return datetime.strftime('%d-%m-%y %H:%M:%S')


@routes.route('/api/event/<int:userID>', methods=['POST'])
def handleCreateEvent(userID):
    """
    Return a response 200 if successful created
    Return a response 500 if failed
    Creating an Event by creator's ID via function of event_model.createEvent
    Get detailed event data from input items in web page
    """
    event = json.loads(request.data)
    response = make_response("Failed", 500)
    if request.method == 'POST':
        event = m.createEvent(id=userID,
                          name=event['name'],
                          desc=event['description'],
                          start=event['start'],
                          end=event['end'])
        response = make_response(str(event.key.id()), 200)
    return response


@routes.route('/api/event/<int:eventID>', methods=['PUT'])
def handleUpdateEvent(eventID):
    """
    Return a response 200 if successful updated
    Return a response 500 if failed
    Updating an Event by its ID via function of event_model.updateEvent
    Get detailed event data from input items in web page
    """
    event = json.loads(request.data)
    response = make_response("eventNotExists", 500)
    if request.method == 'PUT':
        event = m.updateEvent(eventID=eventID,
                          name=event['name'],
                          desc=event['description'],
                          start=event['start'],
                          end=event['end'])
        if event:
            response = make_response(str(event.key.id()), 200)
    return response


@routes.route('/api/event/<int:userID>/<int:eventID>', methods=['DELETE'])
def handleDeleteEvent(userID, eventID):
    """
    Return a response 200 if successful deleted
    Deleting an Event by its ID and creator's ID via function of event_model.deleteEvent
    """
    m.deleteEvent(eventID=eventID, userID=userID)
    return make_response(str(eventID), 200)


@routes.route('/api/user/<int:userID>/events')
def handleGetUserEvents(userID):
    """
    Return event list detail in web page
    Searching Events by creator's ID via function of event_model.getUserEvents
    """
    eventList = m.getUserEvents(userID);
    user = u.getUserById(userID)
    username = user.username
    events = [eventAsDict(event,username) for event in eventList]
    return jsonify(events)


@routes.route('/api/event/<string:type>/<int:userID>', methods=['GET'])
def handleGetEvents(type, userID):
    """
    Return a response 200 if successful search event
    Searching an Event by its type and creator's ID via function of event_model.getUserById
    """
    eventList = []
    if type == 'userEvents':
        eventList = m.getUserEvents(userID)
    elif type == 'joinedEvents':
        eventList = m.getJoinedEvent(userID)
    elif type == 'otherEvents':
        eventList = m.getOtherEvents(userID)
    user = m.getUserById(userID)
    username = user.username
    events = [eventAsDict(event,username) for event in eventList]
    if events:
        return make_response(json.dumps(events), 200)
    return make_response(json.dumps([]), 200)


@routes.route('/api/event/<int:eventID>', methods=['GET'])
def handleGetEventInfo(eventID):
    """
    Return a response 200 if successful search event
    Display the Number Of Joined people and Most Date in web page
    Searching an event by its ID via function of choice_model.getMostDate/getNumOfJoined
    """
    numOfppl = m.getNumOfJoined(eventID=eventID)
    date = m.getMostDate(eventID=eventID)
    info = {'num': numOfppl, 'date': date}
    return make_response(jsonify(info), 200)