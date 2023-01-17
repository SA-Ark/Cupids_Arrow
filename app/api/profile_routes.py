from flask import Blueprint, jsonify, session, request
from app.models import User, DesiredPartnerAttribute, UserLike, Image, db
from app.forms import LoginForm, SignUpForm, ImageForm
from flask_login import current_user, login_user, logout_user, login_required

profile_routes = Blueprint('profile', __name__)




@profile_routes.route('/<int:id>/likes')
@login_required
def user_likes(id):
    likes = UserLike.query.filter(UserLike.user_id == current_user.id).all()
    return {'user_likes': [User.query.get(otherUser.liked_user_id) for otherUser in likes]}

# @profile_routes.route('/<int:id>/messages')
# @login_required
# def user_messages(id):
#    pass


@profile_routes.route('/<int:id>/settings')
@login_required
def user_settings(id):
    user_filters = DesiredPartnerAttribute.query.get(id)
    return [filt.to_dict() for filt in user_filters]



#Make image to main (preview)
@profile_routes.route('/<int:id>/images/<int:img_id>', methods=['POST'])
@login_required
def post_preview(id, img_id):
    preview_image = Image.query.get(img_id)

    form = ImageForm() #I don't know what the form name is; I will put tempForm() for now okay?
    form['csrf_token'].data = request.cookies['csrf_token']

    if preview_image.user_id != current_user.id:
        return {'Submission Error': 'You are not authorize to make changes to this image'}

    if form.validate():
        image = Image.query.get(Image.user_id == id and Image.preview == True)
        exempt = preview_image.id

        # try:
        #     for image in images:
        #         if exempt != image.id and preview_image.preview == True:
        #             image.preview = False
        #             db.session.add(image)
        #             db.session.commit()
        # except:
        #     return {'Internal Error': 'Internal Error on profile_routes'}
        # form.data['preview'] = True   #This is redundant because the form should have given the image preview to true by the user input on the front end.
        try:
            preview_image.preview = form.data['preview']
            db.session.add(preview_image)
            db.session.commit()

            if image:
                image.preview = False
                db.session.add(image)
                db.session.commit()

            return preview_image.to_dict(), 200
        except:
          return {'Submission Error': form.error}

@profile_routes.route('/<int:id>/images/<int:img_id>', methods=['PUT'])
@login_required
def update_preview(id, img_id):
    image = Image.query.get(Image.user_id == id and Image.preview == True)
    image2 = Image.query.get(img_id == image.id )
    try:
        image2.preview = True
        db.session.add(image2)
        image.preview = False
        db.session.add(image)
        db.session.commit()
    except:
        return {'Submission Error': 'Put Route Error'}



@profile_routes.route('/<int:id>/images')
@login_required
def user_images(id):
    images = Image.query.filter(Image.user_id == id).all()
    preview_image = Image.query.filter(Image.user_id == current_user.id, Image.preview == True).first()
    return {'images': [image.to_dict() for image in images], 'preview_image': preview_image.to_dict().image_url}

@profile_routes.route('/<int:id>/images', methods=["POST"])
@login_required
def add_image():
    form = ImageForm() #I don't know what the form name is; I will put tempForm() for now okay?
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate():
        new_image = Image(
            user_id=current_user.id,
            img_url=form.data['img_url'],
            preview=form.data['preview']
        )
        db.session.add(new_image)
        db.session.commit()
        return new_image.to_dict(), 200

    return {'Submission Error': form.error}

@profile_routes.route('/<int:id>/images/<int:img_id>', methods=["DELETE"])
@login_required
def delete_image(img_id):
    this_image = Image.query.get(img_id)

    if this_image.user_id != current_user.id:
        return {'Submission Error': 'You are not authorize to make changes to this image'}

    if this_image:
        db.session.delete(this_image)
        db.session.commit()
        return {'Congratulations': 'Image successfully deleted.'}

    return {'Error': 'Delete Image failed, ask dev team for help'}

@profile_routes.route('/<int:id>/images/<int:img_id>')
@login_required
def user_image(id, img_id):
    this_image = Image.query.get(Image.user_id == current_user.id)
    return {'current_image': this_image}


@profile_routes.route('/<int:id>')
@login_required
def user_page(id):
    user = User.query.get(id)
    return user.to_dict()
    pass


# @profile_routes.route('/<int:id>/images')
# @login_required
# def user_images(id):
#     pass


# def preview_swap(form, field):
#   preview = form.data["preview"]
#   if preview:
#     current_preview = Images.query.filter_by(preview = True, user_id = current_user.id)
#     current_preview.preview = False
