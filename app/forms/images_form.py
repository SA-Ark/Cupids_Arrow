from app.models import Images
from flask_login import current_user
from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, IntegerField, BooleanField
from wtforms.validators import DataRequired, ValidationError, Length
from app.models import Images

# def create_image(form, field):
#   user_id = field.data['id']

#   img_url = form.data['img_url']


def url_check(form, field):
  url = field.data
  if '.png' not in url and '.jpg' not in url and '.jpeg' not in url:
    raise ValidationError('File format must be png, jpg or jpeg.')





class ImageForm(FlaskForm):
  user_id = IntegerField('user id', validators=[DataRequired()])
  img_url = StringField('image url', validators=[DataRequired(), url_check])
  preview =BooleanField('preview', validators=[DataRequired()])
