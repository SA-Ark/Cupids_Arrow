from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import User, Image, UserAnswer, UserLike, db
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






# @user_routes.route('/<int:id>')
# @login_required
# def user(id):
#     """
#     Query for a user by id and returns that user in a dictionary
#     """
#     user = User.query.get(id)
#     # images = Image.query.filter(Image.user_id==id).all()
#     # # answers = UserAnswer.query.filter(UserAnswer.user_id==id).all()
#     # # #need answers

#     # images_normalized = []
#     user = user.to_dict_plus()
#     # answers_normalized = [ans.to_dict() for ans in answers]

#     # for img in images:
#     #     images_normalized.append({"image_id":img.id, "image_url": img.image_url, "preview": img.preview})
#     # user["images"] = images_normalized
#     # user["answers"] = answers_normalized
#     print(user, "WHAT WHAT")
#     return user


@user_routes.route('images')
@login_required
def user_images(id=2):
    """
    Query for a user by id and returns its images in a dictionary
    """
    print("I WORK")
    # user = User.query.get(id)
    images = Image.query.filter(Image.user_id==id).all()
    #need answers

    # images_normalized = []
    # user = user.to_dict_plus()

    # for img in images:
    #     images_normalized.append({"image_id":img.id, "image_url": img.image_url, "preview": img.preview})
    # user["images"] = images_normalized
    images_normalized = {f"image_id: {img.id}" :img.to_dict() for img in images}

    print(images_normalized, "WHAT WHAT")
    return images_normalized


@user_routes.route('answers')
@login_required
def user_answers(id=2):
    """
    Query for a user by id and returns its images in a dictionary
    """
    print("I WORK")
    # user = User.query.get(id)
    answers = UserAnswer.query.filter(UserAnswer.user_id==id).from_self()

    answers_normalized = {f"answer.user_id: {answer.question_id}" :answer.to_dict() for answer in answers}

    print(answers_normalized, "WHAT WHAT")
    return answers_normalized


@user_routes.route('<int:id>')
@login_required
def user_light(id):
    """
    Query for a user by id and returns that user in a dictionary
    """
    user = User.query.get(id)
    images = Image.query.filter(Image.user_id==id).all()
    answers = UserAnswer.query.filter(UserAnswer.user_id==id).from_self()
    #need answers

    images_normalized = {f"image_id: {img.id}" :img.to_dict() for img in images}
    answers_normalized = {f"answer.user_id: {answer.question_id}" :answer.to_dict() for answer in answers}
    user = user.to_dict()
    # for img in images:
    #     images_normalized.append({"image_id":img.id, "image_url": img.image_url, "preview": img.preview})
    # user["images"] = images_normalized
    # user["answers"] = answers_normalized
    answer = {"user": user, "images": images_normalized, "answers": answers_normalized}
    print(answer, "COMBINED")
    return answer

# @user_routes.route('/<int:id>')
# @login_required
# def user_light(id):
#      """
#     Query for a user by id and returns that user in a dictionary
#     """

#     user = User.query.get(id)
#         images = Image.query.filter(Image.user_id==id).all()
#         answers = UserAnswer.query.filter(UserAnswer.user_id==id).from_self()
#     #need answers

#         images_normalized = {f"image_id: {img.id}" :img.to_dict() for img in images}
#     answers_normalized = {f"answer.user_id: {answer.question_id}" :answer.to_dict() for answer in answers}
#     user = user.to_dict()
#     # for img in images:
#     #     images_normalized.append({"image_id":img.id, "image_url": img.image_url, "preview": img.preview})
#     # user["images"] = images_normalized
#     # user["answers"] = answers_normalized
#     answer = {"user": user, "images": images_normalized, "answers": answers_normalized}
#     print(answer, "COMBINED")
#     return answer



@user_routes.route('likes')
@login_required
def liked_people():
    liked_people = {}
    likes = UserLike.query.filter(UserLike.liked_by_id == current_user.id).all()
    for liked in likes:
        images = Image.query.filter(Image.user_id == liked.user_id)
        preview = images[-1]
        for img in images:
            if img.preview == "1":
                preview = img



        liked_people[liked.user_id] = {"id": liked.user_id, "preview_img": preview.image_url, 'user': User.query.get(liked.user_id).to_dict()}
        # city, state, age, first name
    print(liked_people)
    return liked_people

@user_routes.route('likesme')
@login_required
def likes_me():
    people = {}
    likes_me = UserLike.query.filter(UserLike.user_id == current_user.id).all()
    for liked in likes_me:
        images = Image.query.filter(Image.user_id == liked.liked_by_id).all()
        print(len(images), images, "LEN IMAGES")
        # preview = images[0]

        preview = {"image_url": "www.google.com"}
        count = 0
        for i in range(len(images)):

            if images[i].preview == "1":
                preview = images[i]
                people[liked.liked_by_id] = {"id": liked.liked_by_id, "preview_img": preview.image_url, 'user': User.query.get(liked.user_id).to_dict()}
                count = 1
                break;
            if i == len(images) - 1 and count == 0:
                people[liked.liked_by_id] = {"id": liked.liked_by_id, "preview_img": images[i].image_url, 'user': User.query.get(liked.user_id).to_dict()}

    print(people)
    if people:
        return people
    else:

        print("You have no likes yet")
        return "You have no likes yet"

@user_routes.route('/')
@login_required
def users():
    """
    Query for all users and returns them in a list of user dictionaries
    """

    users = User.query.all()


    return {'users': [user.to_dict() for user in users]}
