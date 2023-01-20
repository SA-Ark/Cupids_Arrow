from .db import db, environment, SCHEMA, add_prefix_for_prod


class DesiredPartnerAttribute(db.Model):
  __tablename__ = 'desired_partner_attributes'

  if environment == "production":
    __table_args__ = {'schema': SCHEMA}

  id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), primary_key=True, nullable=False)
  gender = db.Column(db.String(40))
  # sexual_orientation = db.Column(db.String(40))
  income = db.Column(db.Integer)
  kids = db.Column(db.Boolean, default=False)
  relationship_goal = db.Column(db.String(40))
  race = db.Column(db.String(40))
  height = db.Column(db.Integer)
  weight = db.Column(db.Integer)
  inebriates = db.Column(db.Boolean, default=False)
  religion = db.Column(db.String(40))


  user = db.relationship("User", back_populates="desired_profile", uselist=False)
  # id = db.relationship("User", back_populates="desired_profiles", primary_key=True)

  def to_dict(self):
    return {
      'id': self.id,
      'username': self.username,
      'email': self.email,
      'first name': self.first_name,
      'last name': self.last_name,
      'relationship status': self.relationship_status,
      'city': self.city,
      'state': self.state,
      'biography': self.biography,
      'gender': self.gender,
      'sexual orientation': self.sexual_orientation,
      'income': self.income,
      'kids': self.kids,
      'relationship goal': self.relationship_goal,
      'race': self.race,
      'height': self.height,
      'weight': self.weight,
      'inebriates': self.inebriates,
      'religion': self.religion,
      'premium': self.premium,
    }
