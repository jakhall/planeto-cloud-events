from google.appengine.ext import ndb
from flask_login import UserMixin


class Group(ndb.Model):
      groupID = ndb.IntegerProperty()
      name = ndb.StringProperty()

class GroupUser(ndb.Model):
     groupUserID = ndb.IntegerProperty()
     groupID = ndb.IntegerProperty()
     userID = ndb.StringProperty()
     role = ndb.StringProperty()

class GroupEvent(ndb.Model):
     groupEventID = ndb.IntegerProperty()
     groupID =  ndb.IntegerProperty()
     eventID = ndb.IntegerProperty()
