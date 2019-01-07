from google.appengine.ext import ndb
from flask_login import UserMixin


# Function purpose: Create a new event item in database
def createEvent(id, name, desc, start, end):
  event = Event(userID=id, name=name, description=desc, start=start, end=end)
  event.put()
  return event


# Function purpose: Transform the string such as 2019-01-01 00:00:00 into datatime form
def formatDT(string):
  return datetime.strptime(string, '%d-%m-%y %H:%M:%S')


# Function purpose: Update an existed event item in database
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


# Function purpose: Delete an existed event item in database
def deleteEvent(eventID, userID):
  event = getEventById(eventID)
  if event and event.userID == userID:
    event.key.delete()


# Function purpose: Search an existed event item via its ID in database
def getEventById(id):
  key = ndb.Key(Event, id)
  return key.get()


# Function purpose: Search an existed user item via its ID in database
def getUserEvents(userId):
  return Event.query(Event.userID == userId).fetch()


# Function purpose: Get all existed events in database
def getAllEvents():
  return Event.query()


# Utilities:
class Event(ndb.Model):
  userID = ndb.IntegerProperty()
  name = ndb.StringProperty()
  description = ndb.StringProperty()
  start = ndb.StringProperty()
  end = ndb.StringProperty()
