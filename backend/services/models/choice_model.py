from google.appengine.ext import ndb
from flask_login import UserMixin


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

class Choice(ndb.Model):
  eventID = ndb.IntegerProperty()
  userID = ndb.IntegerProperty()
  dateChoice = ndb.StringProperty()
