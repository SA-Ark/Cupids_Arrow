from flask import Blueprint, jsonify, session, request
from app.models import Question, UserAnswer, db
from app.forms import LoginForm, SignUpForm
from app.forms.user_answers_form import UserAnswerForm
from flask_login import current_user, login_user, logout_user, login_required
from ..utils import many_to_dict
from random import randint

questions_routes = Blueprint('questions', __name__)


# @questions_routes.route('/combo')
# @login_required
# def get_unanswered_questions():
#     ansobj = {}
#     ans = []
#     answered = UserAnswer.query.filter(UserAnswer.user_id == current_user.id).all()
#     for i in answered:
#         ansobj[i.question_id] = i.to_dict()
#         k = i.to_dict()
#         ans.append(k['question_id'])
#     allq = {}
#     final = {}
#     allquestions = Question.query.all()
#     for i in allquestions:
#         allq[i.id] = i.to_dict()
#     # print(allq)
#     for i in allq:
#         if i not in ans:
#             final[i] = allq[i]
#     return {'all': allq, 'answered': ansobj, 'unanswered': final}

@questions_routes.route('', methods=['POST'])
@login_required
def post_question():
    form = UserAnswerForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        user_answer = UserAnswer(
            user_id=current_user.id, 
            answer = form['answer'].data,
            question_id=form['question_id'].data
            )
        db.session.add(user_answer)
        db.session.commit()
        return user_answer.to_dict(), 200
    return {'errors': form.errors}, 401

@questions_routes.route('', methods=['PUT'])
@login_required
def edit_question():

    form = UserAnswerForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    user_answer = UserAnswer.query.get((current_user.id, form['question_id'].data))
    if form.validate_on_submit():
        user_answer.answer = form['answer'].data

        return user_answer.to_dict(), 200


    return {'errors': form.errors}, 401

@questions_routes.route('<int:id>/delete/', methods=['DELETE'])
@login_required
def delete_answer(id):
    # print(id, '$^$^$^$^$^$^$^$^')
    answered = UserAnswer.query.get((current_user.id, id))
    print(answered, id,  '$^$^$^$^$^$^$^$^')
    if answered:
        db.session.delete(answered)
        db.session.commit()
        # return id, 200
        return {'id': id}, 200
    return {'errors': 'yousa bad man'}, 401


@questions_routes.route('/combo')
@login_required
def get_unanswered_questions():
    ansobj = {}
    ans = []
    answered = UserAnswer.query.filter(UserAnswer.user_id == current_user.id).all()
    for i in answered:
        ansobj[i.question_id] = i.to_dict()
        k = i.to_dict()
        ans.append(k['question_id'])
    allq = {}
    final = {}
    allquestions = Question.query.all()
    for i in allquestions:
        allq[i.id] = i.to_dict()
    # print(allq)
    for i in allq:
        if i not in ans:
            final[i] = allq[i]
    return {'all': allq, 'answered': ansobj, 'unanswered': final}
