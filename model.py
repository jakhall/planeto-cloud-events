from flask import current_app
from google.appengine.ext import ndb


def init_app(app):
    pass


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


def createUser(u, fn, ln, e):
    user = User(username=u, firstname=fn, lastname=ln, email=e)
    user.put()
    return user

class User(ndb.Model):
    username = ndb.StringProperty()
    firstname = ndb.StringProperty()
    lastname = ndb.StringProperty()
    email = ndb.StringProperty()
