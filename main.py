
from flask import Flask


app = Flask(__name__)

@app.route('/')
def index():
    return 'This is the homepage'

@app.route('/profile')
def profile():
    return 'This is the profile page'

@app.route('/calendar')
def calendar():
    return 'This is the calendar page'

if __name__ == '__main__':
    app.run(debug=True)
