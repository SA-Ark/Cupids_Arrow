from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


class QuestionsForm(FlaskForm):
    # email = StringField('email', validators=[DataRequired()])
    question_body = StringField('Question', validators=[DataRequired()])
    answer_choices = StringField('Answer choices',validators=[DataRequired()])

