from flask import Blueprint
import db
bp = Blueprint('users', __name__, url_prefix='/users')

@bp.route('/')
def list():
    users = 'asdf'
    return users

def detail():

    user = ''
    return user


def create():
    state = ''
    return state


def update():
    state = ''
    return state

def delete():
    state = ''
    return state

def login():
    state = ''
    return state