from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .user_like import UserLike
from sqlalchemy.sql import and_



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
    income = db.Column(db.String)
    relationship_goal = db.Column(db.String(40))
    kids = db.Column(db.Integer)
    race = db.Column(db.String(40))
    height = db.Column(db.String)
    weight = db.Column(db.Integer)
    inebriates = db.Column(db.String)
    religion = db.Column(db.String(40))
    premium = db.Column(db.String)
    desired_profile = db.relationship("DesiredPartnerAttribute", back_populates="user")
    liked = db.relationship('UserLike',
                            primaryjoin=and_(UserLike.user_id == id, UserLike.liked_by_id == id),
                            foreign_keys=[UserLike.user_id, UserLike.liked_by_id],
                            backref='user', lazy='dynamic')
    liked_by = db.relationship('UserLike',
                            primaryjoin=and_(UserLike.user_id == id, UserLike.liked_by_id == id),
                            foreign_keys=[UserLike.user_id, UserLike.liked_by_id],
                            backref='liked_by', lazy='dynamic')

    images = db.relationship("Image", back_populates="images_key", cascade="all, delete")
    created = db.Column(db.Date)
    #  id = db.relationship("User", back_populates="desired_profile", primary_key=True)





    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def __setitem__(self, key, value):
        setattr(self, key, value)

    def __getitem__(self, key):
        return getattr(self, key)

    # @property
    # def get_biography(self):
    #     return self.biography

    # @get_biography.setter
    # def get_biography(self, bio_info):
    #     self.biography = bio_info

    # @property
    # def get_gender(self):
    #     return self.gender

    # @get_gender.setter
    # def get_gender(self, gender_info):
    #     self.gender = gender_info

    # @property
    # def get_sexual_orientation(self):
    #     return self.sexual_orientation

    # @get_sexual_orientation.setter
    # def get_sexual_orientation(self, sexual_orientation_info):
    #     self.sexual_orientation = sexual_orientation_info

    # @property
    # def get_income(self):
    #     return self.income

    # @get_income.setter
    # def get_income(self, income_info):
    #     self.income = income_info

    # @property
    # def get_kids(self):
    #     return self.kids

    # @get_kids.setter
    # def get_kids(self, kids_info):
    #     self.kids = kids_info

    # @property
    # def get_relationship_goal(self):
    #     return self.relationship_goal

    # @get_relationship_goal.setter
    # def get_relationship_goal(self, relationship_goal_info):
    #     self.relationship_goal = relationship_goal_info

    # @property
    # def get_race(self):
    #     return self.race

    # @get_race.setter
    # def get_race(self, race_info):
    #     self.race = race_info

    # @property
    # def get_height(self):
    #     return self.height

    # @get_height.setter
    # def get_height(self, height_info):
    #     self.height = height_info

    # @property
    # def get_weight(self):
    #     return self.weight

    # @get_weight.setter
    # def get_weight(self, weight_info):
    #     self.weight = weight_info

    # @property
    # def get_inebriates(self):
    #     return self.inebriates

    # @get_inebriates.setter
    # def get_inebriates(self, inebriates_info):
    #     self.inebriates = inebriates_info

    # @property
    # def get_religion(self):
    #     return self.religion

    # @get_religion.setter
    # def get_religion(self, religion_info):
    #     self.religion = religion_info

    # @property
    # def get_premium(self):
    #     return self.religion

    # @get_premium.setter
    # def get_premium(self, premium_info):
    #     self.premium = premium_info

    def check_password(self, password):
        return check_password_hash(self.password, password)

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
