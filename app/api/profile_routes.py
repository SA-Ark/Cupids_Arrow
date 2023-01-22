from flask import Blueprint, jsonify, session, request
from app.models import User, DesiredPartnerAttribute, UserLike, Image, db
from app.forms.images_form import ImageForm
from app.forms.userlike_form import UserLikeForm
from flask_login import current_user, login_user, logout_user, login_required
from random import randint

profile_routes = Blueprint('profile', __name__)




@profile_routes.route('/likes')
@login_required
def user_likes():
    likes = UserLike.query.filter(UserLike.user_id == current_user.id).all()
    return {'user_likes': [User.query.get(otherUser.liked_user_id) for otherUser in likes]}

@profile_routes.route('/likes/<int:id>', methods=['POST'])
@login_required
def post_likes(id):
    form = UserLikeForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        liking = UserLike()
        liking.user_id = id
        liking.liked_by_id = current_user.id
        db.session.add(liking)
        db.session.commit()

        return {'user_id': liking.user_id,
                'current_user': liking.liked_by_id}, 200

    else:
        return {'Like Form Error': form.error}


@profile_routes.route('/likes/<int:id>', methods=['DELETE'])
@login_required
def delete_likes(id):
    liked = UserLike.query.get((UserLike.liked_by_id and current_user.id))

    old_liked = liked

    if liked:
        db.session.delete(liked)
        db.session.commit

        return old_liked, 200
    else:
        return {'Error': 'liked table not found'}
    return {'Error': 'likes deleting route failed'}

# # @profile_routes.route('/<int:id>/messages')
# # @login_required
# # def user_messages(id):
# #    pass



@profile_routes.route('/settings')
@login_required
def user_settings(id):
    user_filters = DesiredPartnerAttribute.query.get(id)
    return [filt.to_dict() for filt in user_filters]

@profile_routes.route('/images')
@login_required
def user_images():
    images = Image.query.filter(Image.user_id == current_user.id).all()
    return {'images': [image.to_dict() for image in images]}
#CHANGE PREVIEW ROUTE
# @profile_routes.route('/images/<int:img_id>', methods=['PUT'])
# @login_required
# def update_preview(img_id):
#     image = Image.query.get(img_id)
#     image2 = Image.query.filter(Image.user_id == current_user.id).all()
#     print(image, '@$@$@$@$@$$@$@$@$@$$@$@$', image2)
#     if True:
#         for img in image2:
#             img.preview = False
#             db.session.commit()

#         image.preview = True
#         # image2.preview = True
#         # db.session.add(image2)
#         # image.preview = False
#         # db.session.add(image)
#         db.session.commit()
#         return image.to_dict(), 200
#     # except:
#         # return {'Submission Error': 'Put Route Error'}



# @profile_routes.route('/images')
# @login_required
# def user_images():
#     images = Image.query.filter(Image.user_id == current_user.id).all()
#     # preview_image = Image.query.filter(Image.user_id == current_user.id and Image.preview == True)
#     return {'images': [image.to_dict() for image in images]}
    # , 'preview_image': preview_image.to_dict().image_url}

@profile_routes.route('/images', methods=["POST"])
@login_required
def add_image():
    form = ImageForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    # currPreview = Image.query.filter(Image.user_id==current_user.id and Image.preview == True)
    # print("hey hey")
    if form.validate_on_submit():
        print(request.json['preview'], type(request.json['preview']))
        # i = {'user_id': current_user.id, 'image_url':  }
        new_image = Image(user_id = current_user.id, image_url = request.json['image_url'],
        preview = request.json['preview']==True
            # user_id=current_user.id,
            # image_url=form['image_url'].data,
            # preview=form['preview'].data
        )
        # new_image.user_id=current_user.id,
        # new_image.image_url=form['image_url'].data,
        # new_image.preview=form['preview'].data
        # if currPreview:
        #     currPreview.preview = False
        print(new_image, type(new_image))
        db.session.add(new_image)
        db.session.commit()
        print(new_image.preview, '@$@$@$@$@$$@$@$@$$@$@$@$$@')
        return new_image.to_dict(), 200

    return {'Submission Error': form.error}

@profile_routes.route('/images/<int:img_id>', methods=["PUT"])
@login_required
def update_image(img_id):
    print(img_id, "ID ID")
    image = Image.query.get(img_id)
    if image.preview == "0":
        # old_pic = Image.query.where(Image.preview == "1" and Image.user_id == current_user.id)
        all_pics = Image.query.filter(Image.user_id== current_user.id).from_self()
        old_pic = Image()
        for pic in all_pics:
            if pic.preview == "1":
                old_pic = pic
        print(old_pic.to_dict(), "THIS IS OLD PIC")
        old_pic.preview = "0"
        image.preview = "1"
        db.session.commit()
        # print(image.to_dict(), 'PREVIEW THAT')
        print(type(old_pic), 'WHATHWHA')
        rObj = {"img1": image.to_dict(), "img2": old_pic.to_dict()}
        return rObj, 200
        return image.to_dict()

    else:
        userImages = Image.query.filter(Image.user_id == current_user.id).all()
        randomImg = userImages[randint(0, len(userImages)-1)]
        randomImg.preview = "1"
        image.preview = "0"
        db.session.commit()
        print(image.to_dict(), 'PREVIEW THIS')
        rObj = {"img1": image.to_dict(), "img2":randomImg.to_dict()}
        return rObj, 200









@profile_routes.route('/images/<int:id>', methods=["DELETE"])
@login_required
def delete_image(id):
    image = Image.query.get(id)
    if image.id and image.user_id != current_user.id:
        return {'errors': 'You are not authorize to make changes to this image'}
    if image.id:
        db.session.delete(image)
        db.session.commit()
        return {'Congratulations': 'Image successfully deleted.'}
    return {'errors': 'Delete Image failed, ask dev team for help'}


#GET OTHER USERS IMAGES
@profile_routes.route('/<int:id>/images')
@login_required
def user_image(id):
    images = Image.query.filter(Image.user_id == id).all()
    users_images = {id:[]}
    for img in images:
        users_images.id.append(img.to_dict())
    return users_images
# return {'Error': 'Delete Image failed, ask dev team for help'}


# @profile_routes.route('')
# @login_required
# def show_myprofile():
#     profile =





#Make image to main (preview)
#@@@@@@@@@ DONT NEED THIS ROUTE @@@@@@@@
# @profile_routes.route('/images/<int:img_id>', methods=['POST'])
# @login_required
# def post_preview(id, img_id):
#     preview_image = Image.query.get(img_id)

#     form = ImageForm() #I don't know what the form name is; I will put tempForm() for now okay?
#     form['csrf_token'].data = request.cookies['csrf_token']

#     if preview_image.user_id != current_user.id:
#         return {'Submission Error': 'You are not authorize to make changes to this image'}

#     if form.validate():
#         image = Image.query.get(Image.user_id == id and Image.preview == True)
#         exempt = preview_image.id

#         # try:
#         #     for image in images:
#         #         if exempt != image.id and preview_image.preview == True:
#         #             image.preview = False
#         #             db.session.add(image)
#         #             db.session.commit()
#         # except:
#         #     return {'Internal Error': 'Internal Error on profile_routes'}
#         # form.data['preview'] = True   #This is redundant because the form should have given the image preview to true by the user input on the front end.
#         try:
#             preview_image.preview = form.data['preview']
#             db.session.add(preview_image)
#             db.session.commit()

#             if image:
#                 image.preview = False
#                 db.session.add(image)
#                 db.session.commit()

#             return preview_image.to_dict(), 200
#         except:
#           return {'Submission Error': form.error}


#@@@@@@@ END COMMENT




# @profile_routes.route('/<int:id>')
# @login_required
# def user_page(id):
#     user = User.query.get(id)
#     return user.to_dict()
#     pass


# @profile_routes.route('/<int:id>/images')
# @login_required
# def user_images(id):
#     pass


# def preview_swap(form, field):
#   preview = form.data["preview"]
#   if preview:
#     current_preview = Images.query.filter_by(preview = True, user_id = current_user.id)
#     current_preview.preview = False


# @profile_routes.route('/images/<int:id>', methods=["DELETE"])
# @login_required
# def delete_image(id):
#     image = Image.query.get(id)
#     if image:
#         db.session.delete(image)
#         db.session.commit()
#         return {'message'}
