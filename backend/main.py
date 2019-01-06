from flask import *
from flask_login import LoginManager, login_required, login_user, logout_user, current_user, UserMixin
from flask_cors import CORS
from services import *
from google.appengine.ext import ndb
import services.models.user_model as m


def userAsDict(user):
  userDict = {'userID': user.key.id(),
              'username': user.username,
              'firstname': user.firstname,
              'lastname': user.lastname,
              'email': user.email}
  return userDict


# app creation:

app = Flask(__name__)
app.config['SECRET_KEY'] = '43uyi573858fd322343r'
app.register_blueprint(routes)

CORS(app, supports_credentials=True)

loginManager = LoginManager()

loginManager.init_app(app)

if __name__ == '__main__':
  app.run(debug=True)

@loginManager.user_loader
def load_user(user_id):
    return m.getUserById()
