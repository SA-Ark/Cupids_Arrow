from .db import db, environment, SCHEMA, add_prefix_for_prod

class User_answers(db.Model):
  __tablename__ = 'user_answers'

  if environment == "production":
    __table_args__ = {'schema': SCHEMA}

  db.Column('user_id', db.Integer, db.ForeignKey('Users.id', primary_key=True, nullable=False))
  db.Column('question_id', db.Integer, db.ForeignKey('Questions.id', primary_key=True, nullable=False))
  db.Column('answer_id', db.Integer,  primary_key=True, nullable=False)
  db.ForeignKeyConstraint(['user_id'], ['question_id'])
