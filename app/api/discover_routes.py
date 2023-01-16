from flask import Blueprint, jsonify, session, request
from app.models import User, db
from app.forms import LoginForm
from app.forms import SignUpForm
from flask_login import current_user, login_user, logout_user, login_required
from ..utils import many_to_dict

discover_routes = Blueprint('discover', __name__)

@discover_routes.route('/')
@login_required
def main_page():
    users = User.query.all()
    return {'users': many_to_dict(users)}
