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

import model as m
from flask import Blueprint, current_app, redirect, render_template, request, \
    session, url_for

crud = Blueprint('crud', __name__)


# [START list]
@crud.route("/")
def list():
    token = request.args.get('page_token', None)
    if token:
        token = token.encode('utf-8')

    events, next_page_token = m.list(cursor=token)

    return render_template(
        "list.html",
        events=events,
        next_page_token=next_page_token)


# [END list]

# [START list_mine]
@crud.route("/mine")
def list_mine():
    token = request.args.get('page_token', None)
    print(token)
    if token:
        token = token.encode('utf-8')

    events, next_page_token = m.list_by_user(
        user_id=session['profile']['id'],
        cursor=token)

    return render_template(
        "list.html",
        events=events,
        next_page_token=next_page_token)


# [END list_mine]


@crud.route('/<id>')
def view(id):
    event = m.read(id)
    return render_template("view.html", event=event)


# [START add]
@crud.route('/add', methods=['GET', 'POST'])
def add():
    if request.method == 'POST':
        data = request.form.to_dict(flat=True)

        # If the user is logged in, associate their profile with the new event.
        if 'profile' in session:
            data['createdBy'] = session['profile']['displayName']
            data['createdById'] = session['profile']['id']

            event = m.create(data)

            return redirect(url_for('.view', id=event['id']))

    return render_template("form.html", action="Add", event={})
# [END add]


@crud.route('/<id>/edit', methods=['GET', 'POST'])
def edit(id):
    event = m.read(id)

    if request.method == 'POST':
        data = request.form.to_dict(flat=True)

        event = m.update(data, id)

        return redirect(url_for('.view', id=event['id']))

    return render_template("form.html", action="Edit", event=event)


@crud.route('/<id>/delete')
def delete(id):
    m.delete(id)
    return redirect(url_for('.list'))


@crud.route('/profile', methods=['GET', 'POST'])
def editProfile():
    user = m.getUserById(session['profile']['id'])

    if request.method == 'POST':
        data = request.form.to_dict(flat=True)

        user = m.updateUser(data, session['profile']['id'])

        return redirect('/')

    return render_template("profile.html", user=user)



