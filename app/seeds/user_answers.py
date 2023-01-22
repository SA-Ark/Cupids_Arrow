from app.models import db, UserAnswer, User, Question, environment, SCHEMA
from random import randint

# Adds a demo user, you can add other users here if you want
def seed_user_answers():
    all_users = User.query.all()
    all_questions = Question.query.all()
    for user in all_users:
        if user.first_name != "Demo":
            for i in range(len(all_questions)/2):
                if i % 3 == 1:
                    ans = UserAnswer(user = user, question = all_questions[i], answer = "Yes")
                    # ans = UserAnswer(answer = "Yes")
                else:
                    ans = UserAnswer(user = user, question = all_questions[i], answer = "No")
                    # ans = UserAnswer(answer = "No")
                db.session.add(ans)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_user_answers():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.user_answers RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM user_answers")

    db.session.commit()
