from flask import *
from flask_login import LoginManager, UserMixin, login_required, login_user, logout_user, current_user
from google.appengine.ext import ndb
from datetime import datetime
import model as m
import json

# app creation:

app = Flask(__name__)
app.config['SECRET_KEY'] = '43uyi573858fd322343r'
#cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
loginManager = LoginManager()
loginManager.init_app(app)

if __name__ == '__main__':
  app.run(debug=True)


# Utilities:

def userAsDict(user):
  userDict = {'userID': user.key.id(),
              'username': user.username,
              'firstname': user.firstname,
              'lastname': user.lastname,
              'email': user.email}
  return userDict


def eventAsDict(event):
  eventDict = {'eventID': event.key.id(),
               'userID': event.userID,
               'name': event.name,
               'description': event.description,
               'start': event.start,
               'end': event.end}
  return eventDict


def formatStr(dt):
  return datetime.strftime('%d-%m-%y %H:%M:%S')


def getEntityID(entity):
  return str(entity.key.id())

@loginManager.user_loader
def load_user(userId):
    return m.getUserById(userId)

# Request Handlers:

# Users:

@app.route('/api/user/register', methods=['POST'])
def handleRegister():
  response = make_response("error", 500)
  user = json.loads(request.data)
  if m.getUserByName(user['username']):
    response = make_response("username already exists", 500)
    return response
  createdUser = m.createUser(user['username'],
                             user['firstname'],
                             user['lastname'],
                             user['email'],
                             user['password'])
  response = make_response(getEntityID(createdUser), 200)
  return response

@app.route('/api/users')
def handleAllUsers():
  userList = m.getAllUsers()
  users = [userAsDict(user) for user in userList]
  return jsonify(users)


@app.route('/api/user/<int:id>')
def handleGetUserbyId(id):
  user = jsonify(userAsDict(m.getUserById(id)))
  return make_response(user, 200)


# Events:

@app.route('/api/event/<int:userID>', methods=['POST'])
def handleCreateEvent(userID):
  event = json.loads(request.data)
  response = make_response("Failed", 500)
  if request.method == 'POST':
    event = m.createEvent(id=userID,
                          name=event['name'],
                          desc=event['description'],
                          start=event['start'],
                          end=event['end'])
    response = make_response(getEntityID(event), 200)
  return response


@app.route('/api/event/<int:eventID>', methods=['PUT'])
def handleUpdateEvent(eventID):
  event = json.loads(request.data)
  response = make_response("eventNotExists", 500)
  if request.method == 'PUT':
    event = m.updateEvent(eventID=eventID,
                          name=event['name'],
                          desc=event['description'],
                          start=event['start'],
                          end=event['end'])
    if event:
      response = make_response(getEntityID(event), 200)
  return response


@app.route('/api/event/<int:userID>/<int:eventID>', methods=['DELETE'])
def handleDeleteEvent(userID, eventID):
  m.deleteEvent(eventID=eventID, userID=userID)
  return make_response(str(eventID), 200)


@app.route('/api/event/<string:type>/<int:userID>/', methods=['GET'])
def handleGetEvents(type, userID):
  eventList = []
  if type == 'userEvents':
    eventList = m.getUserEvents(userID)
  elif type == 'joinedEvents':
    eventList = m.getJoinedEvent(userID)
  elif type == 'otherEvents':
    eventList = m.getOtherEvents(userID)
  print eventList
  events = [eventAsDict(event) for event in eventList]
  if events:
    return make_response(json.dumps(events), 200)
  return make_response(json.dumps([]), 200)


@app.route('/api/event/<int:eventID>', methods=['GET'])
def handleGetEventInfo(eventID):
  numOfppl = m.getNumOfJoined(eventID=eventID)
  date = m.getMostDate(eventID=eventID)
  info = {'num': numOfppl, 'date': date}
  return make_response(jsonify(info), 200)


# Session:

@app.route('/api/user/login', methods=['POST'])
def handleLogin():
  user = json.loads(request.data)
  username = user['username']
  userInDB = m.getUserByName(username)
  response = make_response(jsonify(message='Username of password incorrect'), 500)
  if userInDB:
    if userInDB[0].password == user['password']:
       login_user(userInDB[0])
       response = make_response(jsonify(userAsDict(current_user)), 200)
  return response

  @app.route('/api/user/logout', methods=['GET'])
  def handleLogout():
      logout_user()
      return make_response(jsonify(message='Logout Successful'), 200)

@app.route('/api/session/user', methods=['GET'])
@login_required
def handleGetCurrentUser():
    return make_response(jsonify(userAsDict(current_user)), 200)


# choice
@app.route('/api/choice/<int:userID>', methods=['POST'])
def handleCreateChoice(userID):
  choice = json.loads(request.data)
  choice = m.createChoice(eventID=choice['eventID'],
                          userID=userID,
                          dateChoice=choice['date'])
  return make_response(str(choice.key.id()), 200)


@app.route('/api/choice/<int:eventID>', methods=['PUT'])
def handleUpdateChoice(eventID):
  choice = json.loads(request.data)
  choice = m.updateChoice(eventID=eventID,
                          userID=choice['userID'],
                          dateChoice=choice['date'])
  return make_response(str(choice.key.id()), 200)


@app.route('/api/choice/<int:userID>/<int:eventID>', methods=['DELETE'])
def handleDeleteChoice(userID, eventID):
  m.deleteChoice(eventID=eventID, userID=userID)
  return make_response(str(eventID), 200)



@app.route('/api/test/createUser')
def testCreateUser():
  user = m.createUser('tewang', 'te', 'wang', 'tewang@foxmail.com', "123456")
  return jsonify(userAsDict(user))


@app.route('/api/test/getUser')
def testGetUser():
  user = m.getUserByName('tewang')
  return jsonify(userAsDict(user))
