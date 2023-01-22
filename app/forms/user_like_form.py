from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, IntegerField, BooleanField, SubmitField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import UserLike
from flask import requestr
from flask_login import current_user



class UserLikeForm(FlaskForm):
  user_id = IntegerField('Question Id')
  liked_by_id = IntegerField('Answer')
