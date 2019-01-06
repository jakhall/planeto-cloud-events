from google.appengine.ext import ndb
from flask_login import UserMixin


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

def updateUser(id, username, firstname, lastname, email):
    user = getUserById(id)
    if user:
       user.name = username
       user.firstname = firstname
       user.lastname = lastname
       user.email = email
       user.put()
       return user
    else: return None

def deleteUser(id):
  user = getUserById(id)
  if user and user.id == id:
    user.key.delete()


class User(ndb.Model, UserMixin):
      id = ndb.IntegerProperty()
      username = ndb.StringProperty()
      firstname = ndb.StringProperty()
      lastname = ndb.StringProperty()
      email = ndb.StringProperty()
      password = ndb.StringProperty()
