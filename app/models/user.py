from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    first_name = db.Column(db.String(255), nullable=False)
    last_name = db.Column(db.String(255), nullable=False)
    hashed_password = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), nullable=False, unique=True)
    relationship_status = db.Column(db.String(40), nullable=False)
    city = db.Column(db.String(40), nullable=False)
    state = db.Column(db.String(40), nullable=False)

    biography = db.Column(db.String(40))
    gender = db.Column(db.String(40))
    sexual_orientation = db.Column(db.String(40))
    income = db.Column(db.Integer)
    kids = db.Column(db.Integer)
    relationship_goal = db.Column(db.String(40))
    race = db.Column(db.String(40))
    height = db.Column(db.Integer)
    weight = db.Column(db.Integer)
    inhabitants = db.Column(db.Boolean)
    religion = db.Column(db.String(40))
    premium = db.Column(db.Boolean)
    desired_profile = db.relationship("DesiredPartnerAttributes", back_populates="id")
    created = db.Column(db.Date)
    #  id = db.relationship("User", back_populates="desired_profile", primary_key=True)





    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email
        }
