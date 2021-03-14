from pymongo import MongoClient

client = MongoClient(
    'mongodb://admin:admin1234@ds231207.mlab.com:31207/erpdata?retryWrites=false'
    # 'mongodb://localhost:27017/dataBase?retryWrites=false'
    )

# db = client.dataBase
db = client.erpdata

