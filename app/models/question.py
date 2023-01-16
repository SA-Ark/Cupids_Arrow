from .db import db, environment, SCHEMA, add_prefix_for_prod
# from .user_answers import UserAnswer


class Question(db.Model):
  __tablename__ = 'questions'

  if environment == "production":
    __table_args__ = {'schema': SCHEMA}

  id = db.Column(db.Integer, primary_key=True)
  question_body = db.Column(db.String, nullable=False)
  answer_choices = db.Column(db.String, nullable=False)
  question_key = db.relationship("UserAnswer", back_populates="question")
  created_at = db.Column(db.Date)

  def to_dict(self):
    return {
      'id': self.id,
      'question_body': self.question_body,
      'answer_choices': self.answer_choices,
    }
