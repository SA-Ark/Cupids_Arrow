from .db import db, environment, SCHEMA, add_prefix_for_prod

class User_answers(db.Model):
  __tablename__ = 'user_answers'

  if environment == "production":
    __table_args__ = {'schema': SCHEMA}

  user_id = db.Column('user_id', db.Integer, db.ForeignKey('users.id'), primary_key=True, nullable=False)
  question_id = db.Column('question_id', db.Integer, db.ForeignKey('questions.id'), primary_key=True, nullable=False)
  answer_id = db.Column('answer_id', db.Integer,  primary_key=True, nullable=False)
  db.ForeignKeyConstraint(['user_id'], ['question_id'])
