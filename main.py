
from flask import *
from google.appengine.ext import ndb
from datetime import datetime
import model as m



#app creation:

app = Flask(__name__)

if __name__ == '__main__':
    app.run(debug=True)


#Utilities:

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


#Request Handlers:

#Users:

@app.route('/api/register', methods=['POST', 'GET'])
def handleRegister():
    response = make_response("Failed", 500)
    if request.method == 'POST':
        m.createUser(request.form['username'],
                         request.form['firstname'],
                         request.form['lastname'],
                         request.form['email'])
        response = make_response("Success", 200)
    return response

@app.route('/api/users')
def handleAllUsers():
    userList = m.getAllUsers()
    users = [userAsDict(user) for user in userList]
    return jsonify(users)

@app.route('/api/user/<int:id>')
def handleGetUser(id):
    user = jsonify(userAsDict(m.getUserById(id)))
    return make_response(user, 200)

#Events:

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


@app.route('/login',methods=['POST'])
def handleLogin():
  pass


@app.route('/api/test/createUser')
def testCreateUser():
  user = m.createUser('tewang','te','wang','tewang@foxmail.com')
  return jsonify(userAsDict(user))


