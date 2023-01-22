from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, IntegerField, BooleanField, SelectField, SubmitField
from wtforms.validators import DataRequired, Email, ValidationError



class EditForm(FlaskForm):
  biography = StringField('Biography')
  # relationship_status = SelectField('Relationship Status', choices=[('Single', 'Single'), ('Seeing someone', 'Seeing someone'), ("It's complicated", "It's complicated"), ('In a relationship', 'In a relationship'), ('Married', 'Married'), ('Divorced', 'Divorced')])
  gender = SelectField('Gender', choices=[('',''), ('Man', 'Man'), ('Woman', 'Woman'), ('Nonbinary', 'Nonbinary')])
  sexual_orientation = SelectField('Sexual_Orientation', choices=[('',''), ('Straight', 'Straight'), ('Gay', 'Gay'), ('Lesbian', 'Lesbian'), ('Bisexual', 'Bisexual'), ('Queer', 'Queer'), ('Pansexual', 'Pansexual'), ('Questioning', 'Questioning'), ('Heteroflexible', 'Heteroflexible'), ('Homoflexible', 'Homoflexible'), ('Asexual', 'Asexual'), ('Gray-asexual', 'Gray-asexual'), ('Demisexual', 'Demisexual'), ('Reciprosexual', 'Reciprosexual'), ('Akiosexual', 'Akiosexual'), ('Aceflux', 'Aceflux'), ('Grayromantic', 'Grayromantic'), ('Demiromantic', 'Demiromantic'), ('Recipromantic', 'Recipromantic'), ('Akioromantic', 'Akioromantic'), ('Aroflux', 'Aroflux')])
  income = SelectField('Yearly Income', choices=[('',''), ('10k-19k', '10k-19k'), ('20k-29k', '20k-29k'), ('30k-39k', '30k-39k'), ('40k-49k', '40k-49k'), ('50k-59k', '50k-59k'), ('60k-69k', '60k-69k'), ('70k-79k', '70k-79k'), ('80k-89k', '80k-89k'), ('90k-99k', '90k-99k'), ('100k-109k', '100k-109k'), ('110k-119k', '110k-119k'), ('120k-129k', '120k-129k'), ('130k-139k', '130k-139k'), ('140k-149k', '140k-149k'), ('150k+', '150k+')])
  relationship_goal = SelectField('Relationship Goal', choices=[('',''), ('Monogamous', 'Monogamous'), ('Non-monogamous', 'Non-monogamous'), ('Open to either', 'Open to either')])
  kids = IntegerField('Kids')
  race = SelectField('Ethnicity', choices=[('',''), ('Asian', 'Asian'), ('Black', 'Black'), ('Hispanic/Latin', 'Hispanic/Latin'), ('Indian', 'Indian'), ('Middle Eastern', 'Middle Eastern'), ('Native American', 'Native American'), ('Pacific Islander', 'Pacific Islander'), ('White', 'White'), ('Other ethnicity', 'Other ethnicity')])
  height = SelectField('Height', choices=[('',''), ("-4'0", "-4'0"), ("4'1", "4'1"), ("4'2", "4'2"), ("4'3", "4'3"), ("4'4", "4'4"), ("4'5", "4'5"), ("4'6", "4'6"), ("4'7", "4'7"), ("4'8", "4'8"), ("4'9", "4'9"), ("4'10", "4'10"), ("4'11", "4'11"), ("5'0", "5'0"), ("5'1", "5'1"), ("5'2", "5'2"), ("5'3", "5'3"), ("5'4", "5'4"), ("5'5", "5'5"), ("5'6", "5'6"), ("5'7", "5'7"), ("5'8", "5'8"), ("5'9", "5'9"), ("5'10", "5'10"), ("5'11", "5'11"), ("6'0", "6'0"), ("6'1", "6'1"), ("6'2", "6'2"), ("6'3", "6'3"), ("6'4", "6'4"), ("6'5", "6'5"), ("6'6", "6'6"), ("6'7", "6'7"), ("6'8", "6'8"), ("6'9", "6'9"), ("6'10", "6'10"), ("6'11", "6'11"), ("7'0+", "7'0+")])
  weight = IntegerField('Weight')
  inebriates = SelectField('inebriates', choices=[('',''), ('yes', 'yes'), ('no', 'no')])
  religion = SelectField('Religion', choices=[('',''), ('Agnosticism','Agnosticism'), ('Atheism','Atheism'), ('Christianity','Christianity'), ('Judaism','Judaism'), ('Catholicism','Catholicism'), ('Islam','Islam'), ('Hinduism','Hinduism'), ('Buddhism','Buddhism'), ('Sikh','Sikh'), ('Other religion','Other religion'), ])
  # submit = SubmitField('Change Profile Details')
