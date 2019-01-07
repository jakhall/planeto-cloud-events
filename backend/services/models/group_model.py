from google.appengine.ext import ndb
from flask_login import UserMixin


# Function purpose: get a Group item by its Id in group database
def getGroupById(id):
    key = ndb.Key(Group, id)
    return key.get()


# Function purpose: get a Group item by its name in group database
def getGroupByName(groupName):
    return Group.query(Group.groupName == groupName).fetch()


# Function purpose: get a GroupEvent item by its Id in groupEvent database
def getGroupEventById(id):
    key = ndb.Key(GroupEvent, id)
    return key.get()


# Function purpose: get a GroupUser item by its Id in groupUser database
def getGroupUserById(id):
    key = ndb.Key(GroupUser, id)
    return key.get()


# Function purpose: search all Event items matched the input groupId in groupEvent database
def getAllGroupEvents(id):
    return GroupEvent.query(GroupEvent.groupID == id).fetch()


# Function purpose: search all user items matched the input groupId in groupUser database
def getAllGroupUsers(id):
    return GroupUser.query(GroupUser.groupID == id).fetch()


# Function purpose: search all group items matched the input userId in groupUser database
def getAllUserGroups(id):
    return GroupUser.query(GroupUser.userID == id).fetch()


# Function purpose: get all group items in group database
def getAllGroups():
    return Group.query().fetch()


# Function purpose: get other Group items by userId in groupUser database
def getOtherGroups(userID):
    joinedGroups = getAllUserGroups(userID)
    groupIDs = [groupUser.groupID for groupUser in joinedGroups]
    allGroups = getAllGroups()

    otherGroups = []
    for group in allGroups:
        if group.key.id() not in groupIDs:
            otherGroups.append(group)
    return otherGroups


# Function purpose: create a new group item via its description and name in group database
def createGroup(userID, username, name, description):
    group = Group(userID=userID, creatorName = username, groupName=name, description=description)
    group.put()
    return group


# Function purpose: delete a group item via its Id in group database
def deleteGroup(id):
    group = getGroupById(id)
    if user and user.id == id:
        user.key.delete()


# Function purpose: update description and name in a group item via group database
def updateGroup(groupID, name, desc):
    group = getGroupById(groupID)
    if group:
        group.name = name
        group.description = desc
        group.put()
        return group
    else:
        return None


# Function purpose: Search users in a group item via groupUser database
def getGroupUser(groupID, userID):
    return GroupUser.query(GroupUser.userID == userID, GroupUser.groupID == groupID).fetch()


# Function purpose: Search events in a group item via groupEvent database
def getGroupEvent(groupID, eventID):
    return GroupEvent.query(GroupEvent.eventID == eventID, GroupEvent.groupID == groupID).fetch()


# Function purpose: Add a new user in groupUser database
def addUser(groupID, userID, role):
    groupUser = GroupUser(groupID=groupID, userID=userID, role=role)
    groupUser.put()
    return groupUser


# Function purpose: Add a new event in groupEvent database
def addEvent(groupID, eventID):
    groupEvent = GroupEvent(groupID=groupID, eventID=eventID)
    groupEvent.put()
    return groupEvent


# Function purpose: Delete an existed event in groupEvent database
def removeEvent(groupID, eventID):
    groupEvent = getGroupEvent(groupID, eventID)[0]
    if groupEvent:
        groupEvent.key.delete()


# Function purpose: Delete an existed user in groupUser database
def removeUser(groupID, userID):
    groupUser = getGroupUser(groupID, userID)[0]
    if groupUser:
        groupUser.key.delete()


# Utilities:
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
    groupID = ndb.IntegerProperty()
    eventID = ndb.IntegerProperty()
