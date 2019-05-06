from flask import Blueprint
import db
bp = Blueprint('daily', __name__, url_prefix='/daily')

@bp.route('/')
def list():
    users = 'asdf'
    return users

def detail():

    user = ''
    return user


def insert():
    state = ''
    return state


def update():
    state = ''
    return state

def delete():
    state = ''
    return state

def check():
    state = ''
    return state