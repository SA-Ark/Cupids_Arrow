from flask import Blueprint, jsonify, session, request
from app.models import Question, UserAnswer, db
from app.forms import LoginForm, SignUpForm
from app.forms.user_answers_form import UserAnswerForm
from flask_login import current_user, login_user, logout_user, login_required
from ..utils import many_to_dict
from random import randint

questions_routes = Blueprint('questions', __name__)

# @questions_routes.route('/', methods=["GET",'POST'])
# @login_required
# def question_page():
#     form = questions_form()

#     question = Question.query.get(randint(1,100))
#     question_id = question.id
#     user_id = current_user.id
#     possible_ans = UserAnswer.query.get((user_id,question_id))

#     if possible_ans == None and form.validate_on_submit:
#         answer = form.data['answer']
#         new_answer = UserAnswer(user_id, question_id, answer)
#         return new_answer, 200


#     return question.to_dict()

@questions_routes.route('/answered')
@login_required
def get_answered_questions():
    ans_ques = {}
    answered = UserAnswer.query.filter(UserAnswer.user_id == current_user.id).all()
    questions = Question.query.all()
    for ans in answered:
        final_q = {}
        for question in questions:
            if question.id == ans.question_id:
                final_q = question
                break

        ans_ques[ans.question_id] = {"ques": final_q.to_dict(), "ans": ans.answer}
    # return ans_ques


    try:
        return ans_ques
    except:
        raise ValueError("You screwed up on getting all the answered questions F%%K")

@questions_routes.route('/unanswered')
@login_required
def get_unanswered_questions():
    answered = UserAnswer.query.filter(UserAnswer.user_id == current_user.id).all()
    answered_question_ids = [answer.question_id for answer in answered]
    questions = Question.query.all()
    unanswered_ids = [question.id for question in questions if question.id not in answered_question_ids ]
    return unanswered_ids

@questions_routes.route('')
@login_required
def get_question():
    questions = Question.query.all()
    answered = UserAnswer.query.filter(UserAnswer.user_id == current_user.id).all()
    aIds = set()

    for a in answered:
        aIds.add(a.question_id)

    for q in questions:
        if not q.id in aIds:
            return q

    return "You have answered all questions!"



@questions_routes.route('/', methods=['POST'])
@login_required
def post_question():
    form = UserAnswerForm()

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        user_answer = UserAnswer()
        form.populate_obj(user_answer)

        db.session.add(user_answer)
        db.session.commit()
        return user_answer.to_dict()
    return {'errors': form.errors}, 401




@questions_routes.route('/', methods=['PUT'])
@login_required
def question_put():
    pass


@questions_routes.route('/', methods=['DELETE'])
@login_required
def question_delete():
    pass
