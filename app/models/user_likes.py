from .db import db, environment, SCHEMA, add_prefix_for_prod

User_likes = db.Table(
    'user_likes',
    db.Column('parent_id', db.Integer, db.ForeignKey('Users.id')),
    db.Column('children_id', db.Integer, db.ForeignKey('Users.id'))
  )
