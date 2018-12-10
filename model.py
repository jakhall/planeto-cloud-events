from flask import current_app
from google.cloud import datastore


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


def getUser(id):
    ds = get_client()
    key = ds.key('User', int(id))
    results = ds.get(key)
    return from_datastore(results)


def getProject(id):
    ds = get_client()
    key = ds.key('Project', int(id))
    results = ds.get(key)
    return from_datastore(results)
