from flask import Blueprint, request, jsonify
import simplejson as json
from blueprints.mongo import db
from bson.json_util import dumps
from bson.objectid import ObjectId
from datetime import date
from datetime import datetime

others_app = Blueprint('others', __name__)

scholarship_details_collection = db['scholarship_details']

amakin_details_collection = db['amakin_details']


@others_app.route('/scholarship-details', methods=['POST', 'GET', 'DELETE', 'PATCH'])
def scholarship_details():
    try:
        if request.method == 'POST':
            data = request.json
            result = scholarship_details_collection.insert_one(data)
            if result.inserted_id:
                return jsonify({'status': 200})
            else:
                return jsonify({'status': 400})

        if request.method == 'GET':
            query = scholarship_details_collection.find()
            data = []
            for obj in query:
                data.append(obj)
            # serialize objectId to json format
            data = dumps(data)
            return jsonify({'data': data, 'status': 200})

        if request.method == 'PATCH':
            data = request.json
            _id = data['_id']['$oid']
            del data['_id']
            update_id = {'_id': ObjectId(_id)}
            new_values = {"$set": data}
            result = scholarship_details_collection.update_one(
                update_id, new_values)
            if result.modified_count == 1:
                return jsonify({'status': 200})
            else:
                return jsonify({'status': 400})

        if request.method == 'DELETE':
            _id = request.args.get('id')
            delete_query = {'_id': ObjectId(_id)}
            result = scholarship_details_collection.delete_one(delete_query)
            if result.deleted_count == 1:
                return jsonify({'status': 200})
            else:
                return jsonify({'status': 400})

    except Exception as e:
        return jsonify({'error': str(e), 'status': 500})


@others_app.route('/amakin-details', methods=['POST', 'GET', 'DELETE', 'PATCH'])
def amakin_details():
    try:
        if request.method == 'POST':
            data = request.json
            result = amakin_details_collection.insert_one(data)
            if result.inserted_id:
                return jsonify({'status': 200})
            else:
                return jsonify({'status': 400})

        if request.method == 'GET':
            query = amakin_details_collection.find()
            data = []
            for obj in query:
                data.append(obj)
            # serialize objectId to json format
            data = dumps(data)
            return jsonify({'data': data, 'status': 200})

        if request.method == 'PATCH':
            data = request.json
            _id = data['_id']['$oid']
            del data['_id']
            update_id = {'_id': ObjectId(_id)}
            new_values = {"$set": data}
            result = amakin_details_collection.update_one(
                update_id, new_values)
            if result.modified_count == 1:
                return jsonify({'status': 200})
            else:
                return jsonify({'status': 400})

        if request.method == 'DELETE':
            _id = request.args.get('id')
            delete_query = {'_id': ObjectId(_id)}
            result = amakin_details_collection.delete_one(delete_query)
            if result.deleted_count == 1:
                return jsonify({'status': 200})
            else:
                return jsonify({'status': 400})

    except Exception as e:
        return jsonify({'error': str(e), 'status': 500})
