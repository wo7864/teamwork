from flask_restful import reqparse, abort, Api, Resource, request
from flask import Flask, render_template
import db, users

app = Flask(__name__)
api = Api(app)

def api_test():
    return 1+1


api.add_resource(users.List, '/users')


if __name__ == '__main__':
    app.run()