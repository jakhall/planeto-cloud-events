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

def getUserByName(name):
    return User.query(User.username == name).fetch()[0]

def getUserById(id):
    key = ndb.Key(User, id)
    return key.get()

def getAllUsers():
    return User.query()

def createUser(u, fn, ln, e):
    user = User(username=u, firstname=fn, lastname=ln, email=e)
    user.put()
    return user

def getUserEvents(id):
    return Event.query(Event.userID == id).fetch()

def createEvent(id, name, desc, start, end):
    event = Event(userID=id, name=name, description=desc, start=formatDT(start), end=formatDT(end))
    event.put()
    return event

def getEventById(id):
    key = ndb.Key(Event, id)
    return key.get()

def getAllEvents():
    return Event.query()

class User(ndb.Model):
    username = ndb.StringProperty()
    firstname = ndb.StringProperty()
    lastname = ndb.StringProperty()
    email = ndb.StringProperty()

class Event(ndb.Model):
    userID = ndb.IntegerProperty()
    name = ndb.StringProperty()
    description = ndb.StringProperty()
    start = ndb.DateTimeProperty()
    end = ndb.DateTimeProperty()
