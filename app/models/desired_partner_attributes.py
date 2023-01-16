from .db import db, environment, SCHEMA, add_prefix_for_prod


class DesiredPartnerAttributes(db.Model):
  __tablename__ = 'desired_partner_attributes'

  if environment == "production":
    __table_args__ = {'schema': SCHEMA}

<<<<<<< HEAD
  id = db.relationship("User", back_populates="desired_profile", primary_key=True)
=======
  id = db.Column(db.Integer, db.ForeignKey('users.id'), primary_key=True, nullable=False)
>>>>>>> ce61de68876296bad8f1afc423052e8773c8289b
  distance = db.Column(db.String(40))
  gender = db.Column(db.String(40))
  sexual_orientation = db.Column(db.String(40))
  income = db.Column(db.Integer)
  kids = db.Column(db.Integer)
  relationship_goal = db.Column(db.String(40))
  race = db.Column(db.String(40))
  height = db.Column(db.Integer)
  weight = db.Column(db.Integer)
  inibriates = db.Column(db.Boolean)
  religion = db.Column(db.String(40))
<<<<<<< HEAD
=======
  # id = db.relationship("User", back_populates="desired_profiles", primary_key=True)
>>>>>>> ce61de68876296bad8f1afc423052e8773c8289b

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
      'inibriates': self.inibriates,
      'religion': self.religion,
      'premium': self.premium,
    }
