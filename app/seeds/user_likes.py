from app.models import db, UserLike, User, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_user_likes():
    all_users = User.query.all()
    for user in all_users:
        for i in range(0,len(all_users), 3):
            like = UserLike( user_id= user.id,  liked_by_id = i )

            db.session.add(like)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_user_likes():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.user_likes RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM user_likes")

    db.session.commit()
