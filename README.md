# Planeto App

Cloud group project - Event management system.

Live Version: https://planeto-app.appspot.com/


## API Endpoints

Access from /api/.*

### User functions:

Name: createUser __
URL: /register __
Method: POST __
Description: creates and posts new user to datastore. __
__
Name: getAllUsers __
URL: /users __
Method: GET __
Description: responds with all users from the datastore. __
__
Name: getUserInfo __
URL: /user/<id> __
Method: GET __
Description: responds with the selected user information. __
__
### Event functions:

Name: createUser __
URL: /user/<id>/events __
Method: POST __
Description: creates and posts new event to datastore. __
__
Name: getAllEvents __
URL: /events __
Method: GET __
Description: responds with all events from the datastore. __
__
Name: getEventInfo __
URL: /event/<id> __
Method: GET __
Description: responds with the selected event information. __
__

Name: getUserEvents __
URL: /user/<id>/events __
Method: GET __
Description: responds with all events associated with the selected user. __


## Tasks for MVP

### Completed

-Cloudbuild linked to repo __
-datastore entities created __
-initialize backend (flask) __
-initialize frontend (angular) __
-user/event create functions __
-user/event read functions

### Todo

-user/event update functions __
-user/event delete functions __
-authentication (Auth0? Firebase? Users API?) __
-handling of session state __
-calendar view __
-visuals (theme needs to be discussed) __

(Please add to this list anything I've missed. Remember we're working towards the MVP so focus on basic functionality)

## Local Testing

As was mentioned, you can test on your own GAE account by cloning this into a source repository. Otherwise follow these steps:

1.Clone the repo to a local directory. (e.g. C:\\git\\planeto) __
2.Download and install google cloud sdk. https://cloud.google.com/sdk/ __
3.Run "testbuild.bat" to obtain lib dependencies. (Make sure pip is installed) __
4.Test the app - "cd AppData/Local/Google/Cloud SDK/google-cloud-sdk/bin", "dev_appserver.py C:\\git\\planeto" __
5.Access from browser at localhost:8000 and 8080. __

Commit to the master branch anytime, just test it first as you will have no access to build error messages. __

Any problems just let me know - Jak.
