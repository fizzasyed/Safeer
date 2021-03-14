from flask import Blueprint, request, jsonify
import simplejson as json
from blueprints.mongo import db
from bson.objectid import ObjectId
from datetime import date
from datetime import datetime

admin_app = Blueprint('admin', __name__)

admin_details_collection = db['admin_details']


@admin_app.route('/login', methods=['POST'])
def login():
    try:
        data = request.json
        username = data['username'].lower()
        password = data['password'].lower()
        result = admin_details_collection.find_one(
            {'username': username, 'password': password},
            {'username': 1, 'views': 1, 'pageHeaders': 1, 'links': 1, '_id': 0})
        if result:
            return jsonify({'status': 200, 'data': result})
        else:
            return jsonify({'status': 400})
    except Exception as e:
        return jsonify({'error': str(e), 'status': 500})


@admin_app.route('/admin-details', methods=['POST', 'GET', 'DELETE', 'PATCH'])
def user_details():
    try:
        if request.method == 'POST':
            data = request.json
            result = admin_details_collection.insert_one(data)
            if result.inserted_id:
                return jsonify({'status': 200})
            else:
                return jsonify({'status': 400})

        if request.method == 'GET':
            query = admin_details_collection.find()
            data = []
            for obj in query:
                obj['_id'] = str(obj['_id'])
                data.append(obj)
            return jsonify({'data': data, 'status': 200})

        if request.method == 'PATCH':
            data = request.json
            _id = data['_id']
            del data['_id']
            update_id = {'_id': ObjectId(_id)}
            new_values = {"$set": data}
            result = admin_details_collection.update_one(update_id, new_values)
            if result.modified_count == 1:
                return jsonify({'status': 200})
            else:
                return jsonify({'status': 400})

        if request.method == 'DELETE':
            _id = request.args.get('id')
            delete_query = {'_id': ObjectId(_id)}
            result = admin_details_collection.delete_one(delete_query)
            if result.deleted_count == 1:
                return jsonify({'status': 200})
            else:
                return jsonify({'status': 400})

    except Exception as e:
        print(e)
        return jsonify({'error': str(e), 'status': 500})
