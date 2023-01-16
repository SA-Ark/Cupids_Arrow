from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy import PrimaryKeyConstraint

class UserLike(db.Model):
  __tablename__= 'user_likes'

  if environment == "production":
    __table_args__ = {'schema': SCHEMA}

  user_id = db.Column('parent_id', db.Integer, db.ForeignKey('users.id'), primary_key= True)
  liked_user_id = db.Column('children_id', db.Integer, db.ForeignKey('users.id'), primary_key= True)
  user = db.relationship("User", back_populates="liked_users", foreign_keys=[user_id])                      
  liked_user = db.relationship("User", foreign_keys=[liked_user_id])
