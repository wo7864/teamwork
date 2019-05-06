from flask import (
    Blueprint, render_template, request
)

bp = Blueprint('test', __name__, url_prefix='/test')

@bp.route('/')
def index():
    if request.method == 'GET':
        return render_template('test.html')