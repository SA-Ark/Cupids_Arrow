from flask import Blueprint, jsonify, session, request
from app.models import User, db
from app.forms import LoginForm
from app.forms import SignUpForm
from app.forms import EditForm
from flask_login import current_user, login_user, logout_user, login_required
from app.forms import UserForm

auth_routes = Blueprint('auth', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@auth_routes.route('/')
def authenticate():
    """
    Authenticates a user.
    """
    if current_user.is_authenticated:
        return current_user.to_dict()
    return {'errors': ['Unauthorized']}


@auth_routes.route('/login', methods=['POST'])
def login():
    """
    Logs a user in
    """
    form = LoginForm()
    # Get the csrf_token from the request cookie and put it into the
    # form manually to validate_on_submit can be used
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        # Add the user to the session, we are logged in!
        user = User.query.filter(User.email == form.data['email']).first()
        login_user(user)
        return user.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@auth_routes.route('/logout')
def logout():
    """
    Logs a user out
    """
    logout_user()
    return {'message': 'User logged out'}



@auth_routes.route('/edit', methods=['PUT'])
@login_required
def edit_put():
    # pass
    """
    Creates a new user and logs them in
    """
    form = EditForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    # print(form.data,'WELCOMEw9128u39128391283u9&!&!&!&!&!&!&&!&!&!&!&&!&!&!&!&!&!&')
    if form.validate_on_submit():
        print('^@^@^@^@^^@^@^@^@^^@^@^@^^@^@^@^@^^@^@^')
        user = User.query.get(current_user.id)
        if form['biography'].data:
            user.biography = form['biography'].data
        # if request.json['relationship_status']:
        #     user.relationship_status = request.json['relationship_status']
        if form['gender'].data:
            user.gender = form['gender'].data
        if form['sexual_orientation'].data:
            user.sexual_orientation = form['sexual_orientation'].data
        if form['income'].data:
            user.income = form['income'].data
        if form['relationship_goal'].data:
            user.relationship_goal = form['relationship_goal'].data
        if form['kids'].data:
            user.kids = form['kids'].data
        if form['race'].data:
            user.race = form['race'].data
        if form['height'].data:
            user.height = form['height'].data
        if form['weight'].data:
            user.weight = form['weight'].data
        if form['inebriates'].data:
            user.inebriates = form['inebriates'].data
        if form['religion'].data:
            user.religion = form['religion'].data

        db.session.commit()

        # print(form.data)
        # for i in form.data:
        #     print(i, '---DIVIDER---', form[i].data)
        #     if form[i].data and i != 'csrf_token':
        #         print(i, '---DIVIDER2---', form[i].data)
        #         user.race = form[i].data
    #         print(user)
        return user.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401



    # form = EditForm(request.form)
    # form['csrf_token'].data = request.cookies['csrf_token']
    # print(form.data,'WELCOMEw9128u39128391283u9&!&!&!&!&!&!&&!&!&!&!&&!&!&!&!&!&!&')
    # if form.validate_on_submit():

    #     print('^@^@^@^@^^@^@^@^@^^@^@^@^^@^@^@^@^^@^@^')
    #     user = User.query.get(current_user.id)
    # #     if form.data['biography']:
    # #         user.biography = form.data['biography']
    # #     elif form.data['relationship_status']:
    # #         user.data['']
    #     print(form.data)
    #     for i in form.data:
    #         if i and i != '0':
    #             user[i] = form.data[i]
    # #         print(user)

#     if True:
#         user = User.query.get(current_user.id)
#         for key,value in request.json.items():
#             print(key, value)
#             user[key] = value

#     #     # form.populate_obj(user)

#     #     db.session.add(user)
#         db.session.commit()
#     #     login_user(user)
#         print(user.to_dict(), 'DICTIIIDHDOIHDIOFIDOFDIOG')
#         return user.to_dict()
#     return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@auth_routes.route('/signup', methods=['POST'])
def sign_up():
    """
    Creates a new user and logs them in
    """
    form = SignUpForm()

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        # user = User(
        #     username=form.data['username'],
        #     email=form.data['email'],
        #     password=form.data['password'],
        #     relationship_status=form.data['relationship_status']
        # )
        # print(user)

        user = User()
        form.populate_obj(user)
        # for i in form.data:
        #     print(i)
        #     print(form.data[i])

        # print(user.to_dict())

        db.session.add(user)
        db.session.commit()
        login_user(user)
        return user.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

# @auth_routes.route('/edit/', methods=['PUT'])
# def edit():
#     """
#     Creates a new user and logs them in
#     """
#     form = UserForm()

#     form['csrf_token'].data = request.cookies['csrf_token']
#     if form.validate_on_submit():
#         # user = User(
#         #     username=form.data['username'],
#         #     email=form.data['email'],
#         #     password=form.data['password'],
#         #     relationship_status=form.data['relationship_status']
#         # )
#         user = User()
#         form.populate_obj(user)

        # db.session.add(user)
#         db.session.commit()

#         return user.to_dict()
#     return {'errors': validation_errors_to_error_messages(form.errors)}, 401




@auth_routes.route('/unauthorized')
def unauthorized():
    """
    Returns unauthorized JSON when flask-login authentication fails
    """
    return {'errors': ['Unauthorized']}, 401
