from app.models import db, environment, SCHEMA, Question

def seed_questions():
    ques1 = Question(question_body='Are you currently employed?',
            answer_choices=['Yes', 'No'])
    ques2 = Question(question_body='Do you ever spit on the ground in public?',
            answer_choices=['Yes', 'No'])
    ques3 = Question(question_body='Is art important to you?',
            answer_choices=['Yes', 'No'])
    ques4 = Question(question_body='Are you smarter than most people?',
            answer_choices=['Yes', 'No'])
    ques5 = Question(question_body='Would you enjoy going fishing with your partner?',
            answer_choices=['Yes', 'No'])
    ques6 = Question(question_body='Do you like loud concerts?',
            answer_choices=['Yes', 'No'])
    ques7 = Question(question_body='Do you go to great lengths to avoid conflict?',
            answer_choices=['Yes', 'No'])
    ques8 = Question(question_body='Do you have a problem with authority?',
            answer_choices=['Yes', 'No'])
    ques9 = Question(question_body='Will you teach your children to believe in Santa?',
            answer_choices=['Yes', 'No'])
    ques10 = Question(question_body='Do you believe that everything happens for a reason?',
            answer_choices=['Yes', 'No'])
    ques11 = Question(question_body='Do you usually pamper the person who you are with?',
            answer_choices=['Yes', 'No'])
    ques12 = Question(question_body='Are you afraid of death?',
            answer_choices=['Yes', 'No'])
    ques13 = Question(question_body='Are you very close to your family?',
            answer_choices=['Yes', 'No'])
    ques14 = Question(question_body='Do you consider yourself a perfectionist?',
            answer_choices=['Yes', 'No'])
    ques15 = Question(question_body='Do you have a problem with racist jokes?',
            answer_choices=['Yes', 'No'])
    ques16 = Question(question_body='Would you date someone who was in considerable debt?',
            answer_choices=['Yes', 'No'])
    ques17 = Question(question_body='Would you date someone just for the sex?',
            answer_choices=['Yes', 'No'])
    ques18 = Question(question_body='Do you like to dance?',
            answer_choices=['Yes', 'No'])
    ques19 = Question(question_body='Do you enjoy intense intellectual conversations?',
            answer_choices=['Yes', 'No'])
    ques20 = Question(question_body='If someone wrongs you do you exact revenge?',
            answer_choices=['Yes', 'No'])
    ques21 = Question(question_body='Are you registered to vote?',
            answer_choices=['Yes', 'No'])
    ques22 = Question(question_body="Would you say “I love you” to someone you’ve never met in person?",
            answer_choices=['Yes', 'No'])
    ques23 = Question(question_body='Are you ready to settle down and get married right now?',
            answer_choices=['Yes', 'No'])
    ques24 = Question(question_body='Could you date someone with no long-term goals?',
            answer_choices=['Yes', 'No'])
    ques25 = Question(question_body='Are you concerned about climate change?',
            answer_choices=['Yes', 'No'])
    ques26 = Question(question_body='Have you ever been married?',
            answer_choices=['Yes', 'No'])
    ques27 = Question(question_body='Do you like going to brunch?',
            answer_choices=['Yes', 'No'])
    ques28 = Question(question_body='Is it OK to silently support racial equality?',
            answer_choices=['Yes', 'No'])
    ques29 = Question(question_body='Do you clap when a plane lands?',
            answer_choices=['Yes', 'No'])
    ques30 = Question(question_body='Is a soulmate worth waiting for?',
            answer_choices=['Yes', 'No'])
    ques31 = Question(question_body="Do you think it’s important to have an emotional connection before a physical one?",
            answer_choices=['Yes', 'No'])
    ques32 = Question(question_body='Do you often find yourself worrying about things that you have no control over?',
            answer_choices=['Yes', 'No'])
    ques33 = Question(question_body='Do you like scary movies?',
            answer_choices=['Yes', 'No'])
    ques34 = Question(question_body='Is jealousy healthy in a relationship?',
            answer_choices=['Yes', 'No'])
    ques35 = Question(question_body='Could you date someone who is really messy?',
            answer_choices=['Yes', 'No'])
    ques36 = Question(question_body='Is astrological sign at all important in a match?',
            answer_choices=['Yes', 'No'])
    ques37 = Question(question_body='Do you enjoy discussing politics?',
            answer_choices=['Yes', 'No'])

    db.session.add(ques1)
    db.session.add(ques2)
    db.session.add(ques3)
    db.session.add(ques4)
    db.session.add(ques5)
    db.session.add(ques6)
    db.session.add(ques7)
    db.session.add(ques8)
    db.session.add(ques9)
    db.session.add(ques10)
    db.session.add(ques11)
    db.session.add(ques12)
    db.session.add(ques13)
    db.session.add(ques14)
    db.session.add(ques15)
    db.session.add(ques16)
    db.session.add(ques17)
    db.session.add(ques18)
    db.session.add(ques19)
    db.session.add(ques20)
    db.session.add(ques21)
    db.session.add(ques22)
    db.session.add(ques23)
    db.session.add(ques24)
    db.session.add(ques25)
    db.session.add(ques26)
    db.session.add(ques27)
    db.session.add(ques28)
    db.session.add(ques29)
    db.session.add(ques30)
    db.session.add(ques31)
    db.session.add(ques32)
    db.session.add(ques33)
    db.session.add(ques34)
    db.session.add(ques35)
    db.session.add(ques36)
    db.session.add(ques37)

    db.session.commit()

#   question_body = db.Column(db.String, nullable=False)
#   answer_choices = db.Column(db.String, nullable=False)
