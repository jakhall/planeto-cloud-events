from google.appengine.ext import ndb
from flask_login import UserMixin

def createEvent(id, name, desc, start, end):
  event = Event(userID=id, name=name, description=desc, start=start, end=end)
  event.put()
  return event


def formatDT(string):
  return datetime.strptime(string, '%d-%m-%y %H:%M:%S')


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


def getEventById(id):
  key = ndb.Key(Event, id)
  return key.get()


def getUserEvents(userId):
  return Event.query(Event.userID == userId).fetch()


def getAllEvents():
     return Event.query()

class Event(ndb.Model):
  userID = ndb.IntegerProperty()
  name = ndb.StringProperty()
  description = ndb.StringProperty()
  start = ndb.StringProperty()
  end = ndb.StringProperty()
