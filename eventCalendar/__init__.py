# Copyright 2015 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import json
from flask import current_app, Flask, redirect, request, session, url_for
import httplib2
# [START include]
from oauth2client.contrib.flask_util import UserOAuth2
import model as m

oauth2 = UserOAuth2()
# [END include]

def create_app(config, debug=False, testing=False, config_overrides=None):
    app = Flask(__name__)
    app.config.from_object(config)

    oauth2.init_app(
        app,
        scopes=['email', 'profile'],
        authorize_callback =_request_user_info)
    # [END init_app]

    # [START logout]
    # Add a logout handler.
    @app.route('/logout')
    def logout():
        # Delete the user's profile and the credentials stored by oauth2.
        del session['profile']
        oauth2.storage.delete()
        return redirect('/')
    # [END logout]

    # Register the Planeto CRUD blueprint.
    from .crud import crud
    app.register_blueprint(crud, url_prefix='/events')
    # app.register_blueprint(crud, url_prefix='/profile')

    # Add a default root route.
    @app.route("/")
    def index():
        return redirect(url_for('crud.list'))

    # Add an error handler. This is useful for debugging the live application,
    # however, you should disable the output of the exception for production
    # applications.
    @app.errorhandler(500)
    def server_error(e):
        return """
        An internal error occurred: <pre>{}</pre>
        See logs for full stacktrace.
        """.format(e), 500

    return app

# [START request_user_info]
def _request_user_info(credentials):
    """
    Makes an HTTP request to the Google+ API to retrieve the user's basic
    profile information, including full name and photo, and stores it in the
    Flask session.
    """
    del session['google_oauth2_csrf_token']
    del session['google_oauth2_credentials']

    http = httplib2.Http()
    credentials.authorize(http)
    resp, content = http.request(
        'https://www.googleapis.com/plus/v1/people/me')

    if resp.status != 200:
        current_app.logger.error(
            "Error while obtaining user profile: \n%s: %s", resp, content)
        return None

    session['profile'] = json.loads(content.decode('utf-8'))

    user = m.getUserById(session['profile']['id'])
    if (not user):
        data ={}
        data['name'] = session['profile']['displayName']
        data['email'] = session['profile']['emails'][0]['value']
        data['firstname'] = session['profile']['name']['givenName']
        data['lastname'] = session['profile']['name']['familyName']
        data['choice'] = []
        user = m.createUser(data, session['profile']['id'])

# [END request_user_info]
