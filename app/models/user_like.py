from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy import ForeignKeyConstraint

class UserLike(db.Model):
  __tablename__= 'user_likes'

  if environment == "production":
    __table_args__ = {'schema': SCHEMA}

  user_id = db.Column(db.Integer, primary_key=True)
  liked_by_id = db.Column(db.Integer, primary_key=True)
  ForeignKeyConstraint(['user_id'], ['user.id'], name='fk_user_id')
  ForeignKeyConstraint(['liked_by_id'], ['user.id'], name='fk_liked_by_id')
