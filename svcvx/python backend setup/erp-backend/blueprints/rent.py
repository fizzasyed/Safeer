from flask import Blueprint, request, jsonify
import simplejson as json
from blueprints.mongo import db
from pymongo import ReturnDocument
from bson.json_util import dumps
from bson.objectid import ObjectId
from datetime import date
from datetime import datetime

rent_app = Blueprint('rent', __name__)

property_details_collection = db['property_details']

tenant_details_collection = db['tenant_details']

transfer_details_collection = db['transfer_details']

rent_details_collection = db['rent_details']

ownerShip_collection = db['ownerShip']

propertyHistory_collection = db['propertyHistory']


@rent_app.route('/property-details', methods=['POST', 'GET', 'DELETE', 'PATCH'])
def property_details():
    try:
        if request.method == 'POST':
            data = request.json
            result = property_details_collection.insert_one(data)
            if result.inserted_id:
                return jsonify({'status': 200})
            else:
                return jsonify({'status': 400})

        if request.method == 'GET':
            query = property_details_collection.find()
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
            result = property_details_collection.update_one(
                update_id, new_values)
            if result.modified_count == 1:
                return jsonify({'status': 200})
            else:
                return jsonify({'status': 400})

        if request.method == 'DELETE':
            _id = request.args.get('id')
            delete_query = {'_id': ObjectId(_id)}
            result = property_details_collection.delete_one(delete_query)
            if result.deleted_count == 1:
                return jsonify({'status': 200})
            else:
                return jsonify({'status': 400})

    except Exception as e:
        return jsonify({'error': str(e), 'status': 500})


@rent_app.route('/transfer-details', methods=['POST', 'GET'])
def transfer_details():
    try:
        if request.method == 'POST':
            data = request.json
            cond = {'bldgId': ObjectId(data['bldgId'])}
            del data['bldgId']
            # del data['deposit']
            datas = {}
            datas['$set'] = data
            result_transfer = transfer_details_collection.find_one_and_update(
                cond, datas, upsert=True, return_document=ReturnDocument.AFTER)
            if result_transfer['_id']:
                # this is to save pervious data to property_history part 2
                # if prv_data: for sublet history
                #     del prv_data['bldgId']
                #     en_data={'$push': {'sublet': prv_data}}
                #     propertyHistory_collection.find_one_and_update(cond,en_data, upsert=True)
                    # ENd here peroperty_history part 2
                obj = {}
                # date1 = datetime.strptime(data['leaseStartDate'], '%b-%Y')
                date1 = data['leaseStartDate']
                attr = {
                    "$set": {
                        'transferId': result_transfer['_id'], 'subMonth': date1},
                }
                # attr = { #no deposit and tennant id for sublet
                #         "$set": {
                #             'tenantId': data['tenantId'], 'transferId': str(result['_id']), 'curMonth':data['leaseStartDate']},
                #         "$inc":{'deposit': deposit}
                #         }
                result = rent_details_collection.find_one_and_update(
                    cond, attr, upsert=True, return_document=ReturnDocument.AFTER)
                if result['_id']:
                    cond = {'_id': cond['bldgId']}
                    attr = {"$set": {'available': False}}
                    result = property_details_collection.find_one_and_update(
                        cond, attr, upsert=True)
                    if result:
                        return jsonify({'status': 200})
                    else:
                        return jsonify({'status': 400})
                else:
                    return jsonify({'status': 400})
            else:
                return jsonify({'status': 400})

        if request.method == 'GET':
            query = transfer_details_collection.find()
            data = []
            for obj in query:
                data.append(obj)
            # serialize objectId to json format
            data = dumps(data)
            return jsonify({'data': data, 'status': 200})

    except Exception as e:
        print(e)
        return jsonify({'error': str(e), 'status': 500})


@rent_app.route('/tenant-details', methods=['POST', 'GET', 'DELETE', 'PATCH'])
def tenant_details():
    try:
        if request.method == 'POST':
            data = request.json
            result = tenant_details_collection.insert_one(data)
            if result.inserted_id:
                return jsonify({'status': 200})
            else:
                return jsonify({'status': 400})

        if request.method == 'GET':
            query = tenant_details_collection.find()
            data = []
            for obj in query:
                id = str(obj['_id'])
                obj['_id'] = id
                data.append(obj)
            return jsonify({'data': data, 'status': 200})

        if request.method == 'PATCH':
            data = request.json
            _id = data['_id']
            del data['_id']
            update_id = {'_id': ObjectId(_id)}
            new_values = {"$set": data}
            result = tenant_details_collection.update_one(
                update_id, new_values)
            if result.modified_count == 1:
                return jsonify({'status': 200})
            else:
                return jsonify({'status': 400})

        if request.method == 'DELETE':
            _id = request.args.get('id')
            delete_query = {'_id': ObjectId(_id)}
            result = tenant_details_collection.delete_one(delete_query)
            if result.deleted_count == 1:
                return jsonify({'status': 200})
            else:
                return jsonify({'status': 400})

    except Exception as e:
        return jsonify({'error': str(e), 'status': 500})


@rent_app.route('/transfer-history', methods=['GET', 'PATCH'])
def transfer_history():
    try:
        if request.method == 'GET':
            query = rent_details_collection.find()
            data = []
            for obj in query:
                obj['id'] = str(obj.pop('_id'))
                if 'rent' in obj:
                    del obj['rent']
                if 'ownerId' in obj:
                    ownerId = {'_id': ObjectId(obj['ownerId'])}
                    owner_data = ownerShip_collection.find_one(
                        ownerId, {"_id": 0, "tenantId": 0})
                    os_id = {'_id': owner_data['ownerId']}
                    ownerShip_data = tenant_details_collection.find_one(os_id, {
                                                                        "_id": 0})
                    obj.update({'ownerShip': ownerShip_data})
                    owner_data['ownerId'] = str(owner_data['ownerId'])
                    obj.update(owner_data)

                if 'tenantId' in obj:
                    tenantId = {'_id': ObjectId(obj['tenantId'])}
                    tenant_data = tenant_details_collection.find_one(tenantId, {
                                                                     "_id": 0})
                    obj.update(tenant_data)

                bldgId = {'_id': obj['bldgId']}
                if 'transferId' in obj:
                    transferId = {'_id': ObjectId(obj['transferId'])}
                    transfer_data = transfer_details_collection.find_one(transferId, {
                                                                         "_id": 0})
                    obj.update(transfer_data)
                    obj['transferId'] = str(obj['transferId'])

                bldg_data = property_details_collection.find_one(bldgId, {
                                                                 "_id": 0})

                if bldg_data:
                    obj.update(bldg_data)
                    obj['bldgId'] = str(obj['bldgId'])
                data.append(obj)
                import pdb ; pdb.set_trace()
            return jsonify({'data': data, 'status': 200})

        if request.method == 'PATCH':
            data = request.json
            rentId = {'_id': ObjectId(data['id'])}
            rent_data = rent_details_collection.find_one(
                rentId, {"_id": 0, 'tenantId': 1, 'ownerId': 1, 'bldgId': 1})
            if data['perIs'] == 'Owner':
                if 'tenantId' in rent_data:
                    rent_details_collection.update(
                        rentId, {'$unset': {'ownerId': 1}})
                else:
                    rent_details_collection.delete_one(rentId)

                cond = {'_id': rent_data['bldgId']}
                attr = {"$set": {'forsale': True}}
                property_details_collection.find_one_and_update(cond, attr)

            if data['perIs'] == 'Sublet':
                if 'ownerId' in rent_data:
                    rent_details_collection.update(
                        rentId, {'$unset': {'transferId': 1}})
                else:
                    rent_details_collection.delete_one(rentId)

                cond = {'_id': rent_data['bldgId']}
                attr = {"$set": {'available': True}}
                property_details_collection.update(cond, attr)

            return jsonify({'status': 200})

    except Exception as e:
        print(e)
        return jsonify({'error': str(e), 'status': 500})


@rent_app.route('/rent-details', methods=['GET', 'PATCH'])
def rent_details():
    try:
        if request.method == 'GET':
            query = rent_details_collection.find()
            data = []
            for obj in query:
                obj['id'] = str(obj.pop('_id'))
                if 'ownerId' in obj:
                    ownerId = {'_id': obj['ownerId']}
                    owner_data = ownerShip_collection.find_one(
                        ownerId, {"_id": 0, "ownerRent": 1, "ownerId": 1})
                    os_id = {'_id': owner_data['ownerId']}
                    ownerShip_data = tenant_details_collection.find_one(
                        os_id, {"_id": 0, "tenantName": 1})
                    obj.update({"ownerShip": ownerShip_data['tenantName']})
                    owner_data['ownerId'] = str(owner_data['ownerId'])
                    obj.update(owner_data)

                bldgId = {'_id': obj['bldgId']}
                if 'transferId' in obj:
                    transferId = {'_id': ObjectId(obj['transferId'])}
                    transfer_data = transfer_details_collection.find_one(
                        transferId, {"_id": 0, "subletName": 1, "acceptedRent": 1, "leaseEndDate": 1})
                    obj.update(transfer_data)
                    obj['transferId'] = str(obj['transferId'])

                bldg_data = property_details_collection.find_one(
                    bldgId, {"_id": 0, "address": 1, "type": 1, "mant": 1})

                if bldg_data:
                    obj.update(bldg_data)
                    obj['bldgId'] = str(obj['bldgId'])

                data.append(obj)
            return jsonify({'data': data, 'status': 200})

        if request.method == 'PATCH':
            data = request.json
            rent_id = {'_id': ObjectId(data['rentId'])}
            keys = data.keys()
            date1 = None
            date2 = None
            if 'Dates' in keys:
                dates = data['Dates']
                date1 = datetime.strptime(data['Dates'][-1], '%b-%Y')
                print(date1)
            else:
                dates = []

            if 'subDates' in keys:
                subDates = data['subDates']
                date2 = datetime.strptime(data['subDates'][-1], '%b-%Y')
            else:
                subDates = []
            length = len(dates) if dates > subDates else len(subDates)
            for i in range(length):
                if i < len(dates):
                    new_obj = {}
                    new_obj['month'] = dates[i]
                    new_obj['amount'] = data['ownerRent']
                    new_obj['lessDeposit'] = data['lessDeposit']
                    new_obj['mant'] = data['mant']
                    new_obj['date'] = data['payDate']
                    new_obj['OChrg'] = data['OChrg']
                    rent_details_collection.update_one(
                        rent_id, {'$push': {'rent': new_obj}}, upsert=True)

                if i < len(subDates):
                    new_obj = {}
                    new_obj['month'] = subDates[i]
                    new_obj['date'] = data['payDate']
                    new_obj['amount'] = data['subRent']

                    rent_details_collection.update_one(
                        rent_id, {'$push': {'subRent': new_obj}}, upsert=True)

            if date1 and date2:
                new_values = {"$set": {'curMonth': date1, 'subMonth': date2, 'advance': data['ownerAdv'],
                    'subAdv': data['subAdv']}, "$inc": {'deposit': -(data['lessDeposit'] * len(data['Dates']))}}
            else:
                if date1:
                    new_values = {"$set": {'curMonth': date1, 'advance': data['ownerAdv']}, "$inc": {'deposit': -(data['lessDeposit'] * len(data['Dates']))}}
                if date2:
                    new_values = {
                        "$set": {'subMonth': date2, 'subAdv': data['subAdv']}}

            result = rent_details_collection.update_one(
                rent_id, new_values, upsert=True)
            return jsonify({'status': 200})
        else:
            return jsonify({'status': 400})

    except Exception as e:
        print(e)
        return jsonify({'error': str(e), 'status': 500})


@rent_app.route('/rent-filters', methods=['GET'])
def rent_filters():
    try:
        filter = request.args.get('filter')
        if filter == 'tenant':
            id = request.args.get('id')
            tenant_id = {'tenantId': id}
            data = rent_details_collection.find_one(tenant_id, {"_id": 0})
            return jsonify({'data': data, 'status': 200})
    except Exception as e:
        return jsonify({'error': str(e), 'status': 500})
