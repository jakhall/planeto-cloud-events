# Planeto App

Cloud group project - Event management system.

Live Version: https://planeto-app.appspot.com/


## API Endpoints

Access from /api/.*

### User functions:

Name: createUser

URL: /register

Method: POST

Description: creates and posts new user to datastore.


Name: getAllUsers

URL: /users

Method: GET

Description: responds with all users from the datastore.


Name: getUserInfo

URL: /user/<id>

Method: GET

Description: responds with the selected user information.

### Event functions:

Name: createUser

URL: /user/<id>/events

Method: POST

Description: creates and posts new event to datastore.


Name: getAllEvents

URL: /events

Method: GET

Description: responds with all events from the datastore.


Name: getEventInfo

URL: /event/<id>

Method: GET

Description: responds with the selected event information.


Name: getUserEvents

URL: /user/<id>/events

Method: GET

Description: responds with all events associated with the selected user.


## Tasks for MVP

### Completed

-Cloudbuild linked to repo

-datastore entities created

-initialize backend (flask)

-initialize frontend (angular)

-user/event create functions

-user/event read functions

### Todo

-user/event update functions

-user/event delete functions

-authentication (Auth0? Firebase? Users API?)

-handling of session state

-calendar view

-visuals (theme needs to be discussed)

(Please add to this list anything I've missed. Remember we're working towards the MVP so focus on basic functionality)

## Local Testing

As was mentioned, you can test on your own GAE account by cloning this into a source repository. Otherwise follow these steps:

1.Clone the repo to a local directory. (e.g. C:\\git\\planeto)

2.Download and install google cloud sdk. https://cloud.google.com/sdk/

3.Run "testbuild.bat" to obtain lib dependencies. (Make sure pip is installed)

4.Test the app - "cd AppData/Local/Google/Cloud SDK/google-cloud-sdk/bin", "dev_appserver.py C:\\git\\planeto"

5.Access from browser at localhost:8000 and 8080.

Commit to the master branch anytime, just test it first as you will have no access to build error messages.

Any problems just let me know - Jak.
