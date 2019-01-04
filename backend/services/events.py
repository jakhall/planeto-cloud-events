from flask import *
from flask_login import login_required
from google.appengine.ext import ndb
from datetime import datetime
from . import routes
import model as m
import json


def eventAsDict(event):
  eventDict = {'eventID': event.key.id(),
               'userID': event.userID,
               'name': event.name,
               'description': event.description,
               'start': event.start,
               'end': event.end}
  return eventDict


def formatStr(dt):
  return datetime.strftime('%d-%m-%y %H:%M:%S')


@routes.route('/api/event/<int:userID>', methods=['POST'])
def handleCreateEvent(userID):
  event = json.loads(request.data)
  response = make_response("Failed", 500)
  if request.method == 'POST':
    event = m.createEvent(id=userID,
                          name=event['name'],
                          desc=event['description'],
                          start=event['start'],
                          end=event['end'])
    response = make_response(getEntityID(event), 200)
  return response


@routes.route('/api/event/<int:eventID>', methods=['PUT'])
def handleUpdateEvent(eventID):
  event = json.loads(request.data)
  response = make_response("eventNotExists", 500)
  if request.method == 'PUT':
    event = m.updateEvent(eventID=eventID,
                          name=event['name'],
                          desc=event['description'],
                          start=event['start'],
                          end=event['end'])
    if event:
      response = make_response(getEntityID(event), 200)
  return response


@routes.route('/api/event/<int:userID>/<int:eventID>', methods=['DELETE'])
def handleDeleteEvent(userID, eventID):
  m.deleteEvent(eventID=eventID, userID=userID)
  return make_response(str(eventID), 200)

@routes.route('/api/user/<int:userID>/events')
def handleGetUserEvents(userID):
    eventList = m.getUserEvents(userID);
    events = [eventAsDict(event) for event in eventList]
    return jsonify(events)


@routes.route('/api/event/<string:type>/<int:userID>/', methods=['GET'])
def handleGetEvents(type, userID):
  eventList = []
  if type == 'userEvents':
    eventList = m.getUserEvents(userID)
  elif type == 'joinedEvents':
    eventList = m.getJoinedEvent(userID)
  elif type == 'otherEvents':
    eventList = m.getOtherEvents(userID)
  print eventList
  events = [eventAsDict(event) for event in eventList]
  if events:
    return make_response(json.dumps(events), 200)
  return make_response(json.dumps([]), 200)


@routes.route('/api/event/<int:eventID>', methods=['GET'])
def handleGetEventInfo(eventID):
  numOfppl = m.getNumOfJoined(eventID=eventID)
  date = m.getMostDate(eventID=eventID)
  info = {'num': numOfppl, 'date': date}
  return make_response(jsonify(info), 200)
