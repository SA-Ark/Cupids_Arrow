from .db import db, environment, SCHEMA, add_prefix_for_prod


class Image(db.Model):
  __tablename__ = 'images'

  if environment == "production":
    __table_args__ = {'schema': SCHEMA}

  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
  img_url = db.Column(db.String, nullable=False)
  preview = db.Column(db.Boolean, nullable=False)
  images_key = db.relationship("User", back_populates="images")

  def to_dict(self):
    return {
      'id': self.id,
      'user id': self.user_id,
      'imgage url': self.img_url,
      'preview': self.preview
    }
