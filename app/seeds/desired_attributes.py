from app.models import db, DesiredPartnerAttribute, User, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_desired_partner_attributes():
    all_users = User.query.all()

    for user in all_users:
        if user.id % 2 == 0:
            attributes = DesiredPartnerAttribute(
                
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
