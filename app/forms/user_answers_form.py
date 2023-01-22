from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, IntegerField, BooleanField, SubmitField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import UserAnswer
from flask import request
from flask_login import current_user



class UserAnswerForm(FlaskForm):
  question_id = IntegerField('Question Id')
  answer = StringField('Answer')

  