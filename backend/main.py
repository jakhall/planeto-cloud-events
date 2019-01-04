from flask import *
from flask_login import LoginManager, UserMixin, login_required
from flask_cors import CORS
from services import *

# app creation:

app = Flask(__name__)
app.config['SECRET_KEY'] = '43uyi573858fd322343r'
app.register_blueprint(routes)

CORS(app)

loginManager = LoginManager()
loginManager.init_app(app)

def getEntityID(entity):
  return str(entity.key.id())

@loginManager.user_loader
def load_user(userId):
    return m.getUserById(userId)


if __name__ == '__main__':
  app.run(debug=True)
