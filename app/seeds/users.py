from app.models import db, User, environment, SCHEMA
from random import randint


# Adds a demo user, you can add other users here if you want
def seed_users():
    # demo = User(
    #     username='Demo', email='demo@aa.io', password='password')
    # marnie = User(
    #     username='marnie', email='marnie@aa.io', password='password')
    # bobbie = User(
    #     username='bobbie', email='bobbie@aa.io', password='password')


    names = ['Karen','Phil','Diego','Elon','Rupert','Clifford','Jenna','Rebacca','Justine','Lily','Fiona','Alan','Charlie','Alex','Steve','Hilda','Xena','Jerry','Beth']
    last = ['Smith','Smithson','Levi','Snape','Dumbledore','Lee','McGregor','Kim','Putin','Thisseldorf','Strickland','Jones']
    # email = ['@gmail.com','@yahoo.com','@aol.com','@godaddy.com']
    relation = ['Single','Married','Divorced','Widowed','Unsure']

    i = 0
    while i < 30:
        skelly = User(
            first_name= names[randint(0,len(names)-1)],
            last_name= last[randint(0,len(last)-1)],
            email= f'{i}@gmail.com',
            relationship_status= relation[randint(0,len(relation)-1)],
            password= 'password',
            city= 'San Francisco',
            state= 'CA',
            username= f'{i}sampleuser'
        )
       


        db.session.add(skelly)
        i+=1

    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM users")

    db.session.commit()
