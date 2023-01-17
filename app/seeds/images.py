from app.models import db, Image, User, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_images():
    all_users = User.query.all()
    for user in all_users:

        image= Image(
        user_id= user.id, image_url='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.rottentomatoes.com%2Ftv%2Fdexter%2Fs05&psig=AOvVaw36rvuCy1xTD5KoQ0u-7oiE&ust=1674004319148000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCIj63pm2zfwCFQAAAAAdAAAAABAR',
        preview=True)
        for i in range(5):
            other_image = Image(
        user_id= user.id, image_url='https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FDexter_%2528season_6%2529&psig=AOvVaw36rvuCy1xTD5KoQ0u-7oiE&ust=1674004319148000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCIj63pm2zfwCFQAAAAAdAAAAABAJ',
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
