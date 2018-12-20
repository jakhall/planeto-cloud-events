from flask import *
from google.appengine.ext import ndb
from datetime import datetime
import model as m
import json

# app creation:

app = Flask(__name__)

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
               'start': formatStr(event.start),
               'end': formatStr(event.end)}
  return eventDict


def formatStr(dt):
  return dt.strftime('%d-%m-%y %H:%M:%S')


# Request Handlers:

# Users:

@app.route('/api/user/register', methods=['POST'])
def handleRegister():
  response = make_response("error",500)
  user = json.loads(request.data)
  if m.getUserByName(user['username']):
    response = make_response("username already exists", 500)
    return response
  createdUser = m.createUser(user['username'],
               user['firstname'],
               user['lastname'],
               user['email'],
               user['password'])
  response = make_response(createdUser.key.id(), 200)
  return response

@app.route('/api/user/login', methods=['POST'])
def handleLogin():
  user = json.loads(request.data)
  username = user['username']
  userInDB = m.getUserByName(username)
  if userInDB:
    if userInDB.password == user['password']:
      return make_response(str(userInDB.key.id()), 200)
    return make_response("password not right",500)
  return make_response("username not exists",500)


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

@app.route('/api/user/<int:id>/events', methods=['POST'])
def handleCreateEvent(id):
  response = make_response("Failed", 500)
  if request.method == 'POST':
    m.createEvent(id, request.form['name'],
                  request.form['description'],
                  request.form['start'],
                  request.form['end'])
    response = make_response("Success", 200)
  return response


@app.route('/api/user/<int:id>/events', methods=['GET'])
def handleGetUserEvents(id):
  eventList = m.getUserEvents(id)
  events = [eventAsDict(event) for event in eventList]
  return jsonify(events)


@app.route('/api/events')
def handleGetAllEvents():
  eventList = m.getAllEvents()
  events = [eventAsDict(event) for event in eventList]
  return jsonify(events)


@app.route('/api/event/<int:id>')
def handleGetEvent(id):
  event = jsonify(eventAsDict(m.getEventById(id)))
  return make_response(event, 200)





@app.route('/api/test/createUser')
def testCreateUser():
  user = m.createUser('tewang', 'te', 'wang', 'tewang@foxmail.com',"123456")
  return jsonify(userAsDict(user))

@app.route('/api/test/getUser')
def testGetUser():
  user = m.getUserByName('tewang')
  return jsonify(userAsDict(user))
