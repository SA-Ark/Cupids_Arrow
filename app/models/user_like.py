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

def setitem(self, key, value):
    setattr(self, key, value)

def getitem(self, key):
    return getattr(self, key)

def to_dict(self):
    return {
      'user_id': self.user_id,
      'liked_by_id': self.liked_by_id,
    }
