from flask import Flask, jsonify
from flask_cors import CORS
import sys
import os


sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from blueprints.others import others_app
from blueprints.admin import admin_app
from blueprints.user import user_app
from blueprints.rent import rent_app




application = Flask(__name__)

application.register_blueprint(rent_app, url_prefix='/api/v1/rent')
application.register_blueprint(user_app, url_prefix='/api/v1/user')
application.register_blueprint(admin_app, url_prefix='/api/v1/admin')
application.register_blueprint(others_app, url_prefix='/api/v1/others')





@application.route('/api/v1')
def test():
    return jsonify({'data': 'Welcome to 5Cube ERP', 'status_code': 200})


@application.route('/')
def test2():
    return jsonify({'data': 'Welcome to 5Cube ERP', 'status_code': 200})


if __name__ == '__main__':
    application.run(debug=True)
