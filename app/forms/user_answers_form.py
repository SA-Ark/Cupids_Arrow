from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, IntegerField, BooleanField, SubmitField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import UserAnswer
from flask import request
from flask_login import current_user



class UserAnswerForm(FlaskForm):
  # user_id = request.data.user.id
  # user_id = IntegerField('User Id', default=current_user.id)
  # # user_id = IntegerField('User Id', default=request.body.id)
  # question_id = IntegerField('Question Id', default=request.body.question_id)
  # answer_id = IntegerField('Answer Id')
  answer = StringField('Answer')
  submit = SubmitField('Submit Answer')
