"""empty message

Revision ID: ad8148f33c68
Revises:
Create Date: 2023-01-18 20:53:05.191779

"""
from alembic import op
import sqlalchemy as sa
import os

environment = os.getenv("FLASK_ENV")
SCHEMA = os.environ.get("SCHEMA")



# revision identifiers, used by Alembic.
revision = 'ad8148f33c68'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('questions',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('question_body', sa.String(), nullable=False),
    sa.Column('answer_choices', sa.String(), nullable=False),
    sa.Column('created_at', sa.Date(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    if environment == "production":
        op.execute(f"ALTER TABLE questions SET SCHEMA {SCHEMA};")

    op.create_table('user_likes',
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('liked_by_id', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('user_id', 'liked_by_id')
    )

    if environment == "production":
        op.execute(f"ALTER TABLE user_likes SET SCHEMA {SCHEMA};")

    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=40), nullable=False),
    sa.Column('first_name', sa.String(length=255), nullable=False),
    sa.Column('last_name', sa.String(length=255), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('relationship_status', sa.String(length=40), nullable=False),
    sa.Column('city', sa.String(length=40), nullable=False),
    sa.Column('state', sa.String(length=40), nullable=False),
    sa.Column('biography', sa.String(length=40), nullable=True),
    sa.Column('gender', sa.String(length=40), nullable=True),
    sa.Column('sexual_orientation', sa.String(length=40), nullable=True),
    sa.Column('income', sa.Integer(), nullable=True),
    sa.Column('kids', sa.Integer(), nullable=True),
    sa.Column('relationship_goal', sa.String(length=40), nullable=True),
    sa.Column('race', sa.String(length=40), nullable=True),
    sa.Column('height', sa.Integer(), nullable=True),
    sa.Column('weight', sa.Integer(), nullable=True),
    sa.Column('inebriates', sa.String() , nullable=True),
    sa.Column('religion', sa.String(length=40), nullable=True),
    sa.Column('premium', sa.String() , nullable=True),
    sa.Column('created', sa.Date(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )

    if environment == "production":
        op.execute(f"ALTER TABLE users SET SCHEMA {SCHEMA};")

    op.create_table('desired_partner_attributes',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('gender', sa.String(length=40), nullable=True),
    sa.Column('income', sa.Integer(), nullable=True),
    sa.Column('kids', sa.String() , nullable=True),
    sa.Column('relationship_goal', sa.String(length=40), nullable=True),
    sa.Column('race', sa.String(length=40), nullable=True),
    sa.Column('height', sa.Integer(), nullable=True),
    sa.Column('weight', sa.Integer(), nullable=True),
    sa.Column('inebriates', sa.String() , nullable=True),
    sa.Column('religion', sa.String(length=40), nullable=True),
    sa.ForeignKeyConstraint(['id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )

    if environment == "production":
        op.execute(f"ALTER TABLE desired_partner_attributes SET SCHEMA {SCHEMA};")

    op.create_table('images',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('image_url', sa.String(), nullable=False),
    sa.Column('preview', sa.String(),nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user_answers',
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('question_id', sa.Integer(), nullable=False),
    sa.Column('answer', sa.String(), nullable=False),
    sa.Column('created_at', sa.Date(), nullable=True),
    sa.ForeignKeyConstraint(['question_id'], ['questions.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('user_id', 'question_id')
    )

    if environment == "production":
        op.execute(f"ALTER TABLE user_answers SET SCHEMA {SCHEMA};")
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('user_answers')
    op.drop_table('images')
    op.drop_table('desired_partner_attributes')
    op.drop_table('users')
    op.drop_table('user_likes')
    op.drop_table('questions')
    # ### end Alembic commands ###
