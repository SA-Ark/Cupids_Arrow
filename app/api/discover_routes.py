from flask import Blueprint, jsonify, session, request
from app.models import User, db
from app.forms import LoginForm
from app.forms import SignUpForm
from flask_login import current_user, login_user, logout_user, login_required
from ..utils import many_to_dict

discoverBp = Blueprint('discover', __name__)

@discoverBp.route('/')
@login_required
def main_page():
    users = Users.query.all()
    return {'users': many_to_dict(users)}
