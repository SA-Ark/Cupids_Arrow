from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, IntegerField, BooleanField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User_answers

class User_answerForm(FlaskForm):
  # user_id = request.data.user.id
  user_id = IntegerField('user_id')
  question_id = IntegerField('question_id')
  answer_id = IntegerField('answer id')
