# Planeto App

Cloud group project - Event management system.

Live Version: https://planeto-app.appspot.com/

## Restructure Notes

- The front-end Angular and back-end Flask files have been separated into two services, for modularity purposes.
- The angular no longer needs to be compiled for deployment, it is done automatically via the cloudbuild.yaml.
- If you have code that was not committed, please clone the updated master branch and insert the code manually.


## API Endpoints

Access from /api/.*

### User functions:

Name: createUser
URL: /register
Method: POST
Description: creates and posts new user to datastore.

Name: updateUser
URL: /user/\<id>
Method: PUT
Description: updates the user, requires all user fields.

Name: getAllUsers
URL: /users
Method: GET
Description: responds with all users from the datastore.

Name: getUserInfo
URL: /user/\<id>
Method: GET
Description: responds with the selected user information.

### Event functions:

Name: createEvent
URL: /user/\<id>/events
Method: POST
Description: creates and posts new event to datastore.


Name: getAllEvents
URL: /events
Method: GET
Description: responds with all events from the datastore.


Name: getEventInfo
URL: /event/\<id>
Method: GET
Description: responds with the selected event information.


Name: getUserEvents
URL: /user/\<id>/events
Method: GET
Description: responds with all events associated with the selected user.

### Session functions:

Name: loginUser
URL: /user/login
Method: POST
Description: validates and starts a user session.

Name: logoutUser
URL: /user/logout
Method: GET
Description: logs the user out and ends user session.


Name: getSessionUser
URL: /session/user
Method: GET
Description: returns the user currently logged in.

### Group functions: 

Name: getGroupEvents
URL: /group/\<id>/events
Method: GET
Description: returns all events associated with a group 

Name: getGroupUsers
URL: /group/\<id>/users
Method: GET
Description: returns all users associated with a group 

Name: getUserGroups 
URL: /user/\<id>/groups
Method: GET
Description: returns all groups associated with a user.

Name: getGroup 
URL: /group/\<id> 
Method: GET
Description: returns a specific group entity. 

Name: createGroup
URL: /user/\<id>/group
Method: POST
Description: Creates a new group, adds the user as a creator.  

name: deleteGroup 
URL: /group/\<id> 
Method: DELETE
Description: Deletes the specified group, deletes all associated events and user links. 

name: updateGroup
URL: /group/\<id> 
Method: PUT
Description: Updates the group information with the input object. 

name: addUser 
URL: /group/\<id>/user/\<id> 
Method: POST 
Description: Adds a link between the specificied group and user - also assigns a role. 

name: removeUser 
URL: /group/\<id>/user/\<id>
Method: DELETE 
Description: Removes the link between the group and the user. 

name: addEvent 
URL: /group/\<id>/event/\<id> 
Method: POST 
Description: Adds a link between the specificied group and user - also assigns a role. 

name: removeEvent 
URL: /group/\<id>/event/\<id>
Method: DELETE 
Description: Removes the link between the group and the even, then deletes the event.  

## Tasks before the 7th

### Completed

- cloudbuild linked to repo
- datastore entities created
- initialize backend (flask)
- initialize frontend (angular)
- user/event create functions
- user/event read functions
- authentication
- restructuring
- user/event update functions
- user/event delete functions 
- calendar view (want)
- Calendar CRUD functionality (want)
- event-user relationship entity and CRUD (jak)
- modular backend services (jak)

### In Progress
- Frontend Group and User Pages (Jak) 

### Todo
- Tidying code - adding comments (everyone)
- Date validation, events over multiple days defaulting to 00:00 (Jan?)
- Profile page needs formatting and update function. (Jan?, Sarah?)
- Visuals (theme needs to be discussed) (everyone?)
- login validation and session states (Liu?, Jak?)
- Logo/graphical elements (anyone)
- Search for events/users (Liu?, Jak?)
- View and update event details page (Liu?, Jak?)
- User permissions (e.g. can user edit this profile/event) (Jan?, Sarah?)
- Shared calendar views (integrate the event-user relationship) (Want?)
- Review and add to report (everyone)


Please add to this list anything I've missed. Only 2/3 days left so please work as much as you can!

## Local Testing

As was mentioned, you can test on your own GAE account by cloning this into a source repository. Otherwise follow these steps:

1. Clone the repo to a local directory. (e.g. C:\\git\\planeto)

2. Download and install google cloud sdk. https://cloud.google.com/sdk/

3. Run 'build/testbuild.bat' to obtain lib dependencies. (Make sure pip is installed)

4. Test the app - "cd AppData/Local/Google/Cloud SDK/google-cloud-sdk/bin", "dev_appserver.py C:\\git\\planeto"

5. Access from browser at localhost:8000 and localhost:8080.

Commit to the master branch anytime, just test it first as you will have no access to build error messages.

Any problems just let me know - Jak :)
