from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import User, Image, db
from flask_login import current_user

user_routes = Blueprint('users', __name__)

@user_routes.route('/devtest', methods=['GET', 'POST'])
def dev_test():
    if request.method != 'GET':
        print(str(request), 'this is requesttttt')
        theform = str(request.data)
        theformhelp = theform.split('https://')
        theform = 'https://' + theformhelp[1].split('","')[0]
        print(type(theform))
        print(theform, 'theformmmm')
        image = {}
        image["image_url"] = theform
        image['preview'] = True
        image['user_id'] = current_user.id
        newimage = Image(image)
        db.session.add(newimage)
        db.session.commit()

        return newimage.to_dict(), 200
    else:
        return '<h1>Hi</h1>'



@user_routes.route('/')
@login_required
def users():
    """
    Query for all users and returns them in a list of user dictionaries
    """

    users = User.query.all()
    images = Image.query.all()
    image = images[0].to_dict()

    return {'users': [user.to_dict() for user in users]}
    return {'users': [user.to_dict() for user in users]}



@user_routes.route('/<int:id>')
@login_required
def user(id):
    """
    Query for a user by id and returns that user in a dictionary
    """
    user = User.query.get(id)
    images = Image.query.all(id==id)
    #need answers

    dictuser = user.to_dict()
    dictuser['images'] = []
    for img in images:
        dictuser.images.append(img.to_dict())

    return dictuser
