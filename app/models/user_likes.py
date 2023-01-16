from .db import db, environment, SCHEMA, add_prefix_for_prod

User_likes = db.Table(
    'user_likes',
<<<<<<< HEAD
    db.Column('parent_id', db.Integer, db.ForeignKey('Users.id')),
    db.Column('children_id', db.Integer, db.ForeignKey('Users.id'))
=======
    db.Column('parent_id', db.Integer, db.ForeignKey('users.id')),
    db.Column('children_id', db.Integer, db.ForeignKey('users.id'))
>>>>>>> ce61de68876296bad8f1afc423052e8773c8289b
  )
