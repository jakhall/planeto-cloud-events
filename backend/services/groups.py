from flask import *
from flask_login import login_required
from google.appengine.ext import ndb
from . import routes
from models import group_model as m
from models import user_model as u
from models import event_model as e
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

def eventAsDict(event):
  eventDict = {'eventID': event.key.id(),
               'userID': event.userID,
               'name': event.name,
               'description': event.description,
               'start': event.start,
               'end': event.end}
  return eventDict

def groupAsDict(group):
   groupDict = {'groupID': group.key.id(),
                'userID': group.userID,
                'creatorName': group.creatorName,
                'groupName': group.groupName,
                'description': group.description}
   return groupDict


#Functions :

#Get all events associated with a group

@routes.route('/api/group/<int:groupID>/events')
def handleGetGroupEvents(groupID):
    eventIdList = m.getAllGroupEvents(groupID);
    events = []
    for id in eventIdList:
        events.append(eventAsDict(e.getEventById(id.eventID)))
    return jsonify(events)


#Get all users associated with a group

@routes.route('/api/group/<int:groupID>/users')
def handleGetGroupUsers(groupID):
    userIdList = m.getAllGroupUsers(groupID);
    users = []
    for id in userIdList:
        users.append(userAsDict(u.getUserById(id.userID)))
    return jsonify(users)

@routes.route('/api/user/<int:userID>/groups')
def handleGetUserGroups(userID):
    groupIdList = m.getAllUserGroups(userID);
    groups = []
    for id in groupIdList:
        groups.append(groupAsDict(m.getGroupById(id.groupID)))
    return jsonify(groups)

@routes.route('/api/group/<int:groupID>')
def handleGetGroup(groupID):
    return jsonify(groupAsDict(m.getGroupById(groupID)))


@routes.route('/api/user/<int:id>/group', methods=['POST'])
def handleCreateGroup(id):
  group = json.loads(request.data)
  createdGroup = m.createGroup(id, group['creatorName'],
                                group['groupName'], group['description'])
  m.addUser(createdGroup.key.id(), id, "Creator")
  groupIdList = m.getAllUserGroups(id)
  groups = []
  for x in groupIdList:
      groups.append(groupAsDict(m.getGroupById(x.groupID)))
  return make_response(jsonify(groups), 200)

@routes.route('/api/group/<int:groupID>', methods=['DELETE'])
def handleDeleteGroup(groupID):
    groupUserList = m.getAllGroupUsers(groupID)
    groupEventList = m.getAllGroupEvents(groupID)
    for groupUser in groupUserList:
        m.removeUser(groupID, groupUser.userID)
    for groupEvent in groupEventList:
        m.removeEvent(groupID, groupEvent.eventID)
        e.deleteEvent(eventID)
    m.deleteGroup(groupID=groupID)
    return make_response("Group Deleted", 200)

@routes.route('/api/group/<int:eventID>', methods=['PUT'])
def handleUpdateGroup(eventID):
  group = json.loads(request.data)
  event = m.updateGroup(groupID=groupID,
                        name=event['name'],
                        desc=event['description'])
  return make_response(getEntityID(event), 200)

@routes.route('/api/group/<int:groupID>/user/<int:userID>', methods=['POST'])
def handleAddUser(groupID, userID):
  groupUser = json.loads(request.data)
  createdGroupUser = m.addUser(groupID, userID, groupUser['role'])
  return make_response(str(createdGroupUser.key.id()), 200)

@routes.route('/api/group/<int:groupID>/event/<int:eventID>', methods=['POST'])
def handleAddEvent(groupID, eventID):
  createdGroupEvent = m.addEvent(groupID, eventID)
  return make_response(str(createdGroupEvent.key.id()), 200)

@routes.route('/api/group/<int:groupID>/user/<int:userID>', methods=['DELETE'])
def handleRemoveUser(groupID, userID):
  m.removeUser(groupID=groupID, userID=userID)
  return make_response(str(groupID), 200)

@routes.route('/api/group/<int:groupID>/event/<int:eventID>', methods=['DELETE'])
def handleRemoveEvent(groupID, eventID):
  m.removeEvent(groupID=groupID, eventID=eventID)
  return make_response(str(groupID), 200)


@routes.route('/api/group/search/<string:groupName>', methods=['GET'])
def handleSearchGroups(groupName):
  # response = make_response("Failed", 500)

  # get all groupName to a list
  groupNames = [group.groupName for group in m.getAllGroups()]

  # match 10 most similar groupName
  res_tuple_list = process.extract(groupName, groupNames, limit=10)

  return_list = []
  for match_name,score in res_tuple_list:
     group = m.getGroupByName(match_name)[0]

     return_list.append(groupAsDict(group))

  res = jsonify(return_list)
  response = make_response(res, 200)
  return response
