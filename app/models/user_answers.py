from .db import db, environment, SCHEMA, add_prefix_for_prod

class UserAnswer(db.Model):
  __tablename__ = 'user_answers'

  if environment == "production":
    __table_args__ = {'schema': SCHEMA}

  user_id = db.Column(db.Integer, db.ForeignKey('users.id'), primary_key=True, nullable=False)
  question_id = db.Column(db.Integer, db.ForeignKey('questions.id'), primary_key=True, nullable=False)
  user_answers_id = db.Column(db.Integer,  primary_key=True, nullable=False)
  db.ForeignKeyConstraint(['user_id'], ['question_id'])
  answer = db.Column(db.Boolean, nullable=False)
  created_at = db.Column(db.Date)
