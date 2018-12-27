# The secret key is used by Flask to encrypt session cookies.
SECRET_KEY = 'secret'


# SESSION_TYPE = 'filesystem'


# Google Cloud Project ID. This can be found on the 'Overview' page at
# https://console.developers.google.com
PROJECT_ID = 'bookshelf-226611'

# OAuth2 configuration.
# This can be generated from the Google Developers Console at
# https://console.developers.google.com/project/_/apiui/credential.
# Note that you will need to add all URLs that your application uses as
# authorized redirect URIs. For example, typically you would add the following:
#
#  * http://localhost:8080/oauth2callback
#  * https://<your-app-id>.appspot.com/oauth2callback.
#
# If you receive a invalid redirect URI error review you settings to ensure
# that the current URI is allowed.
GOOGLE_OAUTH2_CLIENT_ID = '117172012079-8mmjrfh7li0n40a1lhcslst68k16i4a7.apps.googleusercontent.com'
GOOGLE_OAUTH2_CLIENT_SECRET = 'MzMzw0jSxdRF8JN8AdPLZzGK'
