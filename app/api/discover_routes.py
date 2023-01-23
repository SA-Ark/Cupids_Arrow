from flask import Blueprint, jsonify, session, request
from app.models import User, db, Image, DesiredPartnerAttribute, UserAnswer, UserLike
from flask_login import current_user, login_user, logout_user, login_required
from ..utils import many_to_dict

discover_routes = Blueprint('discover', __name__)

@discover_routes.route('/')
@login_required
def main_page():
    # prefs = DesiredPartnerAttribute.query.get(current_user.id)s
    # users = User.query.filter(User.id != current_user.id).all()
    # print(users,'!&!&!&!&!!&!&!&!&&!&!&!&!&!&&!')
    # this does the same as User.query except it filters out the already liked person
    likedby = UserLike.query.where(UserLike.user_id == current_user.id).from_self().all()
    # liked_id = [like.user_id for  like in liked]
    likes = UserLike.query.where(UserLike.liked_by_id == current_user.id).from_self().all()
    userlikes = {}
    likesuser = {}
    for i in likes:
        you = User.query.get(i.user_id)
        likesuser[you.id] = you.to_dict()

    for j in likedby:
        id = j.liked_by_id
        if id > 0:
            me = User.query.get(id)
            userlikes[me.id]= me.to_dict()
    ans = {'userslikes':{},'userislikedby':{}}
    for p in userlikes:
        ans['userslikes'][p]=p

    for l in likesuser:
        print(l)
        ans['userislikedby'][l]=l

    print(ans)

    # for i in userlikes:
    #     me = User.query.get(i.user_id)
    #     likesuser[me.id] = me.to_dict()

    # print(len(users), liked_id, 'ARKOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO!!!')
    # print('asdfatqa3w4gyaDGFAWERFW2A', users)
    # users_set = set(users)
    # liked_set = set(liked)
    # print( liked_set, 'SETTTTTTTTTTTTT')
    # newUnliked = []

    # for user in users:
    #     if user.id not in liked_id:
    #         newUnliked.append(user)


    # unliked = users_set.difference(liked_set)
    # print('something here', unliked)
    #loop through users and check if it has desired, if not, filter (account of all/null)
    # unliked =
    # for peep in liked:
        # if
    # for user in users:
    #     pass
    # print(len(newUnliked), 'LOOK HERE!!!!!!!!!!!!!!!!')
    # pass
    return ans
    # return likesuser
    # return {'users': [user.to_dict() for user in newUnliked]}



@discover_routes.route('/<int:id>')
@login_required
def user_page(id):
    user = User.query.get(id)
    images = Image.query.filter(Image.user_id==id).first()
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

# @discover_routes.route('<int:id>/', method=['POST'])
# @login_required
# def like_user(id):
#     user = User.query.get(id)

#     newLike = UserLike(user_id=id, liked_by_id=current_user.id)
#     print(newLike)
#     if newLike:
#         db.session.add(newLike)
#         db.session.commit()
#         return {'message': True}, 200
#     return {'error': 'sorry, something went wrong'}, 402




    #get all answers
    #preferences


    # image = images[0].to_dict()


    # return ({'users': [user.to_dict() for user in users]}, image)
    # users = User.query.all()
    # return {'users': many_to_dict(users)}
    #this is not done
