from flask import Blueprint, jsonify, session, request
from app.models import User, db
from app.forms import LoginForm
from app.forms import SignUpForm
from flask_login import current_user, login_user, logout_user, login_required

profileBp = Blueprint('profile', __name__)


@profileBp.route('/<int:id>')
@login_required
def user_page():
    users = Users.query.get(id)
    return user.to_dict()
