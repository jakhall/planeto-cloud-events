from flask import current_app
from datetime import datetime
from google.appengine.ext import ndb


def init_app(app):
  pass


def formatDT(string):
  return datetime.strptime(string, '%d-%m-%y %H:%M:%S')


def get_client():
  return datastore.Client(current_app.config['planeto-app'])


def from_datastore(entity):
  if not entity:
    return None
  if isinstance(entity, builtin_list):
    entity = entity.pop()
  entity['id'] = entity.key.id
  return entity


# User model
def getUserByName(name):
  return User.query(User.username == name).fetch()


def getUserById(id):
  key = ndb.Key(User, id)
  return key.get()


def getAllUsers():
  return User.query()


def createUser(u, fn, ln, e, pw):
  user = User(username=u, firstname=fn, lastname=ln, email=e, password=pw)
  user.put()
  return user


# Event model
def createEvent(id, name, desc, start, end):
  event = Event(userID=id, name=name, description=desc, start=start, end=end)
  event.put()
  return event


def updateEvent(eventID, name, desc, start, end):
  event = getEventById(eventID)
  if event:
    event.name = name
    event.description = desc
    event.start = start
    event.end = end
    event.put()
    return event
  else: return None


def deleteEvent(eventID, userID):
  event = getEventById(eventID)
  if event and event.userID == userID:
    event.key.delete()
  deleteEventChoices(eventID)



def getEventById(id):
  key = ndb.Key(Event, id)
  return key.get()


def getUserEvents(userId):
  return Event.query(Event.userID == userId).fetch()


def getJoinedEvent(userID):
  joinedEvents = []
  choices = Choice.query(Choice.userID == userID).fetch()
  if choices:
    eventID_list = [choice.eventID for choice in choices]
    for eventID in eventID_list:
      joinedEvents.append(getEventById(eventID))
  return joinedEvents


def getOtherEvents(userID):
  otherEvents = []
  joinedEvents = getJoinedEvent(userID)
  allEvents = getAllEvents()

  joinedEventsIDList = [ event.key.id() for event in joinedEvents]
  for event in allEvents:
    if event.key.id() not in joinedEventsIDList:
      otherEvents.append(event)
  return otherEvents




def getAllEvents():
  return Event.query()


# Choice model
def createChoice(eventID, userID, dateChoice):
  choice = Choice(eventID=eventID, userID=userID, dateChoice=dateChoice)
  choice.put()
  return choice


def getChoice(eventID, userID):
  choice = Choice.query(ndb.AND(Choice.eventID == eventID, Choice.userID == userID)).fetch(1)
  if not choice:
    print "choice doesn't exists"
  return choice[0]


def updateChoice(eventID, userID, dateChoice):
  choice = getChoice(eventID, userID)
  if choice:
    choice.dateChoice = dateChoice
    choice.put()
  return choice


def deleteChoice(eventID, userID):
  choice = getChoice(eventID, userID)
  if choice:
    return choice.key.delete()
  return None


def deleteEventChoices(eventID):
  choices = Choice.query(Choice.eventID == eventID)
  for choice in choices:
    choice.key.delete()


def getNumOfJoined(eventID):
  num_ppl = len(Choice.query(Choice.eventID == eventID).fetch())
  return num_ppl


def getMostDate(eventID):
  choiceDict = {}
  for choice in Choice.query(Choice.eventID == eventID).fetch():
    if choice.dateChoice in choiceDict.keys():
      choiceDict[choice.dateChoice] += 1
    else:
      choiceDict[choice.dateChoice] = 1

  if choiceDict:
    date, num_of_ppl = sorted(choiceDict.iteritems(), key=lambda (k, v): (v, k), reverse=True)[0]
    return date
  else:
    return None


class User(ndb.Model):
  username = ndb.StringProperty()
  firstname = ndb.StringProperty()
  lastname = ndb.StringProperty()
  email = ndb.StringProperty()
  password = ndb.StringProperty()


class Event(ndb.Model):
  userID = ndb.IntegerProperty()
  name = ndb.StringProperty()
  description = ndb.StringProperty()
  start = ndb.StringProperty()
  end = ndb.StringProperty()


class Choice(ndb.Model):
  eventID = ndb.IntegerProperty()
  userID = ndb.IntegerProperty()
  dateChoice = ndb.StringProperty()
