from flask import Blueprint, jsonify, session, request
from app.models import User, db
from app.forms import LoginForm
from app.forms import SignUpForm
from flask_login import current_user, login_user, logout_user, login_required
from ..utils import many_to_dict

questionsBp = Blueprint('questions', __name__)

@profileBp.route('/')
@login_required
def question_page():
    questions = Questions.query.get(id)
    return {'questions': many_to_dict(questions)}

@profileBp.route('/', methods=['POST'])
@login_required
def question_post():
    user_ques = Question.query.get(current_user.question).to_dict()
    