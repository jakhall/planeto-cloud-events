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


def getUser(name):
    User.query(User.username == name)

class User(ndb.Model):
    username = ndb.StringProperty()
    userID = ndb.IntegerProperty()
    email = ndb.StringProperty()
