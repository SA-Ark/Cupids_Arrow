from flask import Blueprint, jsonify, session, request
from app.models import User, DesiredPartnerAttribute, UserLike, Image, db, UserAnswer, Question
from app.forms.images_form import ImageForm
from flask_login import current_user, login_user, logout_user, login_required

prefrences_routes = Blueprint('prefrences', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@prefrences_routes.route('', methods=['POST'])
@login_required
def select_pref():
    # pass
    """
    Creates a new user and logs them in
    """
    form = 'something'
    # form = EditForm()
    #^^^^^^^^^^^ NEEDS FORM FOR PREFRENCES HERE
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        user = User.query.get(current_user.id)
    #     if form.data['biography']:
    #         user.biography = form.data['biography']
    #     elif form.data['relationship_status']:
    #         user.data['']
        print(form.data)
        for i in form.data:
            if i and i != '0':
                user[i] = form.data[i]
    #         print(user)
            

     
    #     # form.populate_obj(user)
        
    #     db.session.add(user)
        db.session.commit()
    #     login_user(user)
        return user.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401



@prefrences_routes.route('')
@login_required
def users():
    """
    Query for all users and returns them in a list of user dictionaries
    """
    randomSample = User.query.where(User.id != current_user.id and User.relationship_status == 'Single').from_self().limit(10).all()

    ans = {}
    for u in randomSample:
        ans[u.id] = u.to_dict()

    
   
    
    print(ans, '!*!*!*!*!*!*!','*!*!*!*!**!*!', )
    # user1 = User.query.get


    return ans



