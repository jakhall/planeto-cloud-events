from google.appengine.ext import ndb
from flask_login import UserMixin


# Function purpose: Search an existed user item via its Name field in database
def getUserByName(name):
    return User.query(User.username == name).fetch()


# Function purpose: Search an existed user item via its ID in database
def getUserById(id):
    key = ndb.Key(User, id)
    return key.get()


# Function purpose: Get all existed Users in database
def getAllUsers():
    return User.query()


# Function purpose: Create a new User item in database
def createUser(u, fn, ln, e, pw):
    user = User(username=u, firstname=fn, lastname=ln, email=e, password=pw)
    user.put()
    return user


# Function purpose: Update an existed User item in database
def updateUser(id, username, firstname, lastname, email):
    user = getUserById(id)
    if user:
        user.name = username
        user.firstname = firstname
        user.lastname = lastname
        user.email = email
        user.put()
        return user
    else:
        return None


# Function purpose: Delete an existed User item in database
def deleteUser(id):
    user = getUserById(id)
    if user and user.id == id:
        user.key.delete()


# Utilities:
class User(ndb.Model, UserMixin):
    id = ndb.IntegerProperty()
    username = ndb.StringProperty()
    firstname = ndb.StringProperty()
    lastname = ndb.StringProperty()
    email = ndb.StringProperty()
    password = ndb.StringProperty()
