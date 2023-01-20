from app.models import db, Image, User, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_images():
    all_users = User.query.all()
    for user in all_users:

        image= Image(
        user_id= user.id, image_url='https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/Dexter_S6_DVD_Cover.jpg/220px-Dexter_S6_DVD_Cover.jpg',
        preview=True)
        print (image, '$^$^$^$^$^$^$^$^$^$^$')
        for i in range(5):
            other_image = Image(
        user_id= user.id, image_url='https://resizing.flixster.com/MBehnrkjxZjDjPS8YCBQ6gQ2huI=/206x305/v2/https://flxt.tmsimg.com/assets/p8219891_b_v8_aa.jpg',
        preview=False)
            db.session.add(other_image)


    db.session.add(image)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_images():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.images RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM images")

    db.session.commit()
