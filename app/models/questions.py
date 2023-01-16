from .db import db, environment, SCHEMA, add_prefix_for_prod


class Question(db.Model):
  __tablename__ = 'questions'

  if environment == "production":
    __table_args__ = {'schema': SCHEMA}

  id = db.Column(db.Integer, primary_key=True)
  question_body = db.Column(db.String, nullable=False)
  answer_choices = db.Column(db.String, nullable=False)
  question_key = db.relationship("userAnswers", back_populates="id")
  created_at = db.Column(db.Date)

  def to_dict(self):
    return {
      'id': self.id,
      'question body': self.question_body,
      'answer choices': self.answer_choices,
    }
