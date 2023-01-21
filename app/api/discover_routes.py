from flask import Blueprint, jsonify, session, request
from app.models import User, db, Image, DesiredPartnerAttribute, UserAnswer, UserLike
from flask_login import current_user, login_user, logout_user, login_required
from ..utils import many_to_dict

discover_routes = Blueprint('discover', __name__)

@discover_routes.route('')
@login_required
def main_page():
    # prefs = DesiredPartnerAttribute.query.get(current_user.id)s
    users = User.query.filter(User.id != current_user.id).all()
    liked = UserLike.query.filter(UserLike.liked_by_id == current_user.id).all() # this does the same as User.query except it filters out the already liked person
    print('asdfatqa3w4gyaDGFAWERFW2A', users)

    users_set = set(users)
    liked_set = set(liked)
    print( liked_set, 'SETTTTTTTTTTTTT')

    unliked = users_set.difference(liked_set)
    print('something here', unliked)
    #loop through users and check if it has desired, if not, filter (account of all/null)
    # unliked =
    # for peep in liked:
        # if
    # for user in users:
    #     pass

    return {'users': [user.to_dict() for user in unliked]}



@discover_routes.route('/<int:id>')
@login_required
def user_page(id):
    user = User.query.get(id)
    images = Image.query.filter(Image.user_id==id)
    answered = UserAnswer.query.filter(UserAnswer.user_id == id)
    #need answers
    dictuser = user.to_dict()
    dictuser['images'] = []
    dictuser['answers'] = []
    for img in images:
        dictuser.images.append(img.to_dict())

    for ans in answered:
        dictuser.answers.append(ans.to_dict())

    return dictuser



    #get all answers
    #preferences


    # image = images[0].to_dict()


    # return ({'users': [user.to_dict() for user in users]}, image)
    # users = User.query.all()
    # return {'users': many_to_dict(users)}
    #this is not done
