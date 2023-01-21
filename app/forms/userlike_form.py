from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, BooleanField, SelectField, SubmitField
from wtforms.validators import DataRequired, Email, ValidationError

class UserLikeForm(FlaskForm):

    user_id = IntegerField('User Id', validators=[DataRequired()])
    liked_by_id = IntegerField('Liked Id', validators=[DataRequired()])
