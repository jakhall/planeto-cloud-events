Working example:
http://bookshelf-226611.appspot.com

Your can create or edit or delete an event.

You can create and edit your own user profile.

If you are the creator of the event, you can edit or delete the event.

If you are not the creator of the event, you can view the event.

You don't need to login with password or register, you login with google account.

And when you first time to login with Google account, you automatically register and create your user profile in database.

When you login with Google account, you can create event.

If you not login, you just can view event

...
...
...
...


The commands to test locally:

git clone -b yuefu https://github.com/jakhall/planeto-cloud-events.git

cd planeto-cloud-events

pip install -r requirements.txt

python main.py

In your web browser, enter this address: http://localhost:8080
