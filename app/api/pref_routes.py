from flask import Blueprint, jsonify, session, request
from app.models import User, DesiredPartnerAttribute, UserLike, Image, db
from app.forms.images_form import ImageForm
from flask_login import current_user, login_user, logout_user, login_required

profile_routes = Blueprint('profile', __name__)