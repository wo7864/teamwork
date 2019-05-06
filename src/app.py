from flask import Flask, render_template
from flask_cors import CORS
from flask_restful import Api, Resource
import db, users

app = Flask(__name__)
CORS(app, resource=r"localhost:4200/*")
api = Api(app)

class test(Resource):
    def get(self):
        users = {
            'user':'hi'
        }
        return users


api.add_resource(test, '/users/')


if __name__ == '__main__':
    app.run()
