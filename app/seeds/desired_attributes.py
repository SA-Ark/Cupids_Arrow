from app.models import db, DesiredPartnerAttribute, User, environment, SCHEMA
from random import randint


# Adds a demo user, you can add other users here if you want
def seed_desired_partner_attributes():
    all_users = User.query.all()

    for user in all_users:
        if (user.gender == "Male" and user.id % 10 == 0) or (user.gender == "Female" and user.id %10 != 0):
            d_gender = "Male"
        else:
            d_gender = "Female"

        attributes = DesiredPartnerAttribute(
             user = user, gender = d_gender, income = randint(50000, 10000000), kids = user.id % 3 == 0, relationship_goal = user.relationship_goal,
             race = user.race if user.id % 5 == 0 else "any",
             height = randint(55, 85), weight = randint(85, 300), inebriates = user.id % 2 == 0,
             religion = user.religion

            )
        db.session.add(attributes)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_desired_partner_attributes():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.desired_partner_attributes RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM desired_partner_attributes")

    db.session.commit()
