from flask import Blueprint, jsonify, session, request
from app.models import User, DesiredPartnerAttribute, db
from app.forms import LoginForm
from app.forms import SignUpForm
from flask_login import current_user, login_user, logout_user, login_required

profile_routes = Blueprint('profile', __name__)


@profile_routes.route('/<int:id>')
@login_required
def user_page():
    # user = User.query.get(id)
    # return user.to_dict()
    pass


@profile_routes.route('/<int:id>/likes')
@login_required
def user_likes():
   pass


@profile_routes.route('/<int:id>/messages')
@login_required
def user_messages():
   pass

@profile_routes.route('/<int:id>/settings')
@login_required
def user_settings():
    user_id = current_user.id
    user_filters = DesiredPartnerAttribute.query.get(user_id)
    return [filt.to_dict() for filt in user_filters]


@profile_routes.route('/<int:id>/images/<int:id>')
@login_required
def user_images():
    pass

@profile_routes.route('/<int:id>/images')
@login_required
def user_images():
    pass


# def preview_swap(form, field):
#   preview = form.data["preview"]
#   if preview:
#     current_preview = Images.query.filter_by(preview = True, user_id = current_user.id)
#     current_preview.preview = False
