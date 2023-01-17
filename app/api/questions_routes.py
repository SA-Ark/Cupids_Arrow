from flask import Blueprint, jsonify, session, request
from app.models import Question, UserAnswer, db
from app.forms import LoginForm, SignUpForm, questions_form
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

@questions_routes.route('/')
@login_required
def get_answered_questions():
    ans_ques = {}
    answered = UserAnswer.query.filter(UserAnswer.user_id == current_user.id).all()
    questions = Question.query.all()
    for ans in answered:
        ans_ques[ans.question_id] = {"ques": questions.find(id =ans.question_id), "ans": ans.answer}
    # return ans_ques


    try:
        return ans_ques
    except:
        raise ValueError("You screwed up on getting all the questions F%%K")



@questions_routes.route('/', methods=['PUT'])
@login_required
def question_put():
    pass


@questions_routes.route('/', methods=['DELETE'])
@login_required
def question_delete():
    pass
