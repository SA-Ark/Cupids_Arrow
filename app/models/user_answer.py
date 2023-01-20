from .db import db, environment, SCHEMA, add_prefix_for_prod
from .user import User
from .question import Question

class UserAnswer(db.Model):
  __tablename__ = 'user_answers'

  if environment == "production":
    __table_args__ = {'schema': SCHEMA}

  user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), primary_key=True, nullable=False)
  question_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('questions.id')), primary_key=True, nullable=False)
  answer = db.Column(db.String, nullable=False)

  user = db.relationship("User",  back_populates="answers")
  question= db.relationship("Question", back_populates="answers")

  User.answers = db.relationship("UserAnswer", back_populates="user", cascade="all, delete-orphan")
  Question.answers = db.relationship("UserAnswer", back_populates="question", cascade="all, delete-orphan")

  # created_at = db.Column(db.Date)

  def to_dict(self):
      return {
        'question_id': self.question_id,
        'user_id': self.user_id,
        'answer': self.answer,
      }
