from google.appengine.ext import ndb
from flask_login import UserMixin

def getGroupById(id):
    key = ndb.Key(Group, id)
    return key.get()

def getGroupEventById(id):
    key = ndb.Key(GroupEvent, id)
    return key.get()

def getGroupUserById(id):
    key = ndb.Key(GroupUser, id)
    return key.get()

def getAllGroupEvents(id):
    return GroupEvent.query(GroupEvent.groupID == id).fetch()

def getAllGroupUsers(id):
    return GroupUser.query(GroupUser.groupID == id).fetch()

def getAllUserGroups(id):
    return GroupUser.query(GroupUser.userID == id).fetch()


def createGroup(userID, username, name, description):
  group = Group(userID=userID, creatorName = username, groupName=name, description=description)
  group.put()
  return (getAllUserGroups(userID), group)

def deleteGroup(id):
  group = getGroupById(id)
  if user and user.id == id:
    user.key.delete()

def updateGroup(groupID, name, desc):
  group = getGroupById(groupID)
  if group:
    group.name = name
    group.description = desc
    group.put()
    return group
  else: return None

def getGroupUser(groupID, userID):
    return GroupUser.query(GroupUser.userID == userID, GroupUser.groupID == groupID).fetch()

def getGroupEvent(groupID, eventID):
    return GroupEvent.query(GroupEvent.eventID == eventID, GroupEvent.groupID == groupID).fetch()

def addUser(groupID, userID, role):
  groupUser = GroupUser(groupID=groupID, userID=userID, role=role)
  groupUser.put()
  return groupUser

def addEvent(groupID, eventID):
    groupEvent = GroupEvent(groupID=groupID, eventID=eventID)
    groupEvent.put()
    return groupEvent

def removeEvent(groupID, eventID):
      groupEvent = getGroupEvent(groupID, eventID)[0]
      if groupEvent:
        groupEvent.key.delete()

def removeUser(groupID, userID):
      groupUser = getGroupUser(groupID, userID)[0]
      if groupUser:
        groupUser.key.delete()


class Group(ndb.Model):
      userID = ndb.IntegerProperty()
      creatorName = ndb.StringProperty()
      groupName = ndb.StringProperty()
      description = ndb.StringProperty()

class GroupUser(ndb.Model):
     groupID = ndb.IntegerProperty()
     userID = ndb.IntegerProperty()
     role = ndb.StringProperty()

class GroupEvent(ndb.Model):
     groupID =  ndb.IntegerProperty()
     eventID = ndb.IntegerProperty()
