from flask import Flask,Blueprint, request, jsonify,Response,redirect
# import simplejson as json
# from flask import Blueprint, request, jsonify
import mysql.connector
import json 
from flask_cors import CORS, cross_origin
# app = Flask(__name__)


mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="",
  database="SafeJourn"
)

mycursor = mydb.cursor()

# mycursor.execute("CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))")


app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
app.config["DEBUG"] = True


#mycursor.execute("SHOW TABLES")
for x in mycursor:
  print(x)
@cross_origin()
@app.route('/', methods=['GET'])
def home():
    return {'url':'status'}
@cross_origin()
@app.route('/send', methods=['GET'])
def home2():
    print(request.json)
    # mycursor.execute("CREATE TABLE Driver ( DID varchar(255) PRIMARY KEY,NIC int,FirstName varchar(255),LastName varchar(255),CarNo varchar(255),Contact int,Shift varchar(255));")
    # mycursor.execute("CREATE TABLE Student ( SID varchar(255) PRIMARY KEY,FirstName varchar(255),LastName varchar(255),Address varchar(255),Location varchar(255),DriverID varchar(255),FOREIGN KEY(DriverID) REFERENCES Driver(DID) );")
    # mycursor.execute("CREATE TABLE Parent ( PID varchar(255) PRIMARY KEY,CID varchar(255),FirstName varchar(255),LastName varchar(255),Contact int,Notify varchar(255),FOREIGN KEY(CID) REFERENCES Student(SID));")
    # mycursor.execute("CREATE TABLE SAttendance ( SIdentity varchar(255)  PRIMARY KEY, FOREIGN KEY(SIdentity) REFERENCES Student(SID),Timestamp varchar(255),Status varchar(255));")
    # mycursor.execute("CREATE TABLE DAttendance ( DIdentity varchar(255) PRIMARY KEY,FOREIGN KEY(DIdentity) REFERENCES Driver(DID),Timestamp varchar(255),Status varchar(255));")
    # print('sadasdsa')
    # mycursor.execute("CREATE TABLE ParentLogin( PLID varchar(255) PRIMARY KEY,Username varchar(255),Password varchar(255),FOREIGN KEY(PLID) REFERENCES Student(SID));")
    return redirect("/")
    # return jsonify({'data': 'Welcome to 5Cube ERP', 'status_code': 200})
@cross_origin()
@app.route('/login', methods=['POST'])
def login():
    try:
      print('working')
      # print(request.json)
      data = request.data
      data=json.loads(data)
      print(data['password'])
      username = data['username']
      password = data['password']
      query = ('''SELECT * FROM  `admin` WHERE username=username AND password=password''')
      mycursor.execute(query)
      value=mycursor.fetchall()
      print(value)
      if value:
          return jsonify({'status': 200,'data':value})
      else:
          return jsonify({'status': 200})
    except Exception as e:
        return jsonify({'error': str(e), 'status': 500})
@cross_origin()
@app.route('/parentlogin', methods=['POST'])
def login2():
    try:
      print('working')
      # print(request.json)
      data = request.data
      data=json.loads(data)
      print(data['password'])
      username = data['username']
      password = data['password']
      query = ('''SELECT * FROM  `parentlogin` WHERE username=username AND password=password''')
      mycursor.execute(query)
      value=mycursor.fetchall()
      print(value)
      if value:
          return jsonify({'status': 200,'data':value})
      else:
          return jsonify({'status': 200})
    except Exception as e:
        return jsonify({'error': str(e), 'status': 500})

@cross_origin()
@app.route('/SaveData', methods=['POST'])
def SaveData():
    try:
      data = request.data
      data=json.loads(data)
      print(data['s'])
      print(data['p'])
      parent=data['p']
      student=data['s']
     
      SchoolID = student['SchoolID']
      FirstName = student['FirstName']
      LastName = student['LastName']
      Address = student['Address']
      PinLocation = student['PinLocation']
      DriverId = student['DriverID']
      ParentID = parent['ParentID']
      FirstName2 = parent['FirstName']
      LastName2 = parent['LastName']
      UserName=parent['UserName']
      Password = parent['Password']
      Contact = parent['Contact']
      Relationship = parent['Relationship']
    
     
      query2="INSERT INTO student(SID, FirstName, LastName, Address, Location, DriverID) VALUES (%s, %s, %s, %s, %s, %s)"
      datashiz=(SchoolID,FirstName,LastName,Address,PinLocation,DriverId)
      val=mycursor.execute(query2,datashiz)
      mydb.commit()
     
      
     # query3=('''INSERT INTO `parent`(`PID`, `CID`, `FirstName`, `LastName`, `Contact`, `Relation`) VALUES (ParentID,SchoolID,FirstName2,LastName2,Contact,Relationship)''')
     # mycursor.execute(query3)
     # value=mycursor.fetchall()
     # print(value)
     # query4=('''INSERT INTO `parentlogin`(`PLID`, `Username`, `Password`) VALUES (ParentID,UserName,Password)''')
     # mycursor.execute(query4)
     # value=mycursor.fetchall()
      #print(value)
      if val:
        return jsonify({'status': 200,'data':val})
      else:
       return jsonify({'status': 200})
    except Exception as e:
      return jsonify({'error': str(e), 'status': 500})        



@cross_origin()
@app.route('/arbaz/sohail', methods=['GET'])
def showAttendance():
  print('wrrsdf')
  return 'da'


@cross_origin()
@app.route('/sende', methods=['GET'])
def send():
  try:
    #inputting values in the data base using insert operation 
    idd='A567'
    Name='sdsds'
    passs='dafsdf'
    # sql = "INSERT INTO admin (AID, username, password) VALUES (%s, %s,%s)"
    # val = ("A922", "231s","dssd")
    
    # sql= "INSERT INTO student(SID, FirstName, LastName, Address, Location, DriverID) VALUES (%s, %s, %s, %s, %s, %s)"
    # val=("S665","Shaheryar","Khalid","5A 6/5","Johr Gulistan Block 11","k173845")

    # sql="INSERT INTO parent(PID,CID,FirstName,LastName,Contact,Relation) VALUES(%s,%s,%s,%s,%s,%s)"
    # val=("P789","S665","Javed","Iqbal",'03320550990',"Father")

    # sql="INSERT INTO parentlogin( PLID , Username , Password ) VALUES (%s, %s, %s)"
    # val=("P789","JavedP789","javed123")
    # value=mycursor.execute(sql, val)
    # mydb.commit();
    
    #getting data from the db in json format 
    sql_select_Query = "select * from student"
    mycursor.execute(sql_select_Query)
    row_headers=[x[0] for x in mycursor.description]
    records = mycursor.fetchall()
    print("Total number of rows in Laptop is: ", mycursor.rowcount)

    print("\nPrinting each laptop record")
    json_data=[]
    for result in records:
          json_data.append(dict(zip(row_headers,result)))
    return json.dumps(json_data)

    
  except Exception as e:
      return jsonify({'error': str(e), 'status': 500})
    




@cross_origin()
@app.route('/DriverDetails', methods=['GET'])
def DriverDetails():
  try:
    
    #getting data from the db in json format 
    sql_select_Query = "select * from driver"
    mycursor.execute(sql_select_Query)
    row_headers=[x[0] for x in mycursor.description]
    records = mycursor.fetchall()
    print("Total number of rows in Laptop is: ", mycursor.rowcount)

    print("\nPrinting each laptop record")
    json_data=[]
    for result in records:
          json_data.append(dict(zip(row_headers,result)))
    return json.dumps(json_data)

    
  except Exception as e:
      return jsonify({'error': str(e), 'status': 500})
        




@cross_origin()
@app.route('/DriverAttendance', methods=['GET'])
def DriverAttendance():
  try:
    
    #getting data from the db in json format 
    sql_select_Query = "select * from dattendance"
    mycursor.execute(sql_select_Query)
    row_headers=[x[0] for x in mycursor.description]
    records = mycursor.fetchall()
    print("Total number of rows in Laptop is: ", mycursor.rowcount)

    print("\nPrinting each laptop record")
    json_data=[]
    for result in records:
          json_data.append(dict(zip(row_headers,result)))
    return json.dumps(json_data)

    
  except Exception as e:
      return jsonify({'error': str(e), 'status': 500})
 
@cross_origin()
@app.route('/StudentAttendance', methods=['GET'])
def StudentAttendance():
  try:
    
    #getting data from the db in json format 
    sql_select_Query = "select * from sattendance"
    mycursor.execute(sql_select_Query)
    row_headers=[x[0] for x in mycursor.description]
    records = mycursor.fetchall()
    print("Total number of rows in Laptop is: ", mycursor.rowcount)

    print("\nPrinting each laptop record")
    json_data=[]
    for result in records:
          json_data.append(dict(zip(row_headers,result)))
    return json.dumps(json_data)

    
  except Exception as e:
      return jsonify({'error': str(e), 'status': 500})




@cross_origin()
@app.route('/RegDriver', methods=['POST'])
def RegDriver():
    try:
      data = request.data
      data=json.loads(data)
      print(data['DID'])
      print(data['FirstName'])
      print(data['LastName'])
      print(data['CarNo'])
      print(data['Contact'])
      print(data['Shift'])
      DID=data['DID']
      NIC=data['NIC']
      FirstName=data['FirstName']
      LastName=data['LastName']
      CarNo=data['CarNo']
      Contact=data['Contact']
      Shift=data['Shift']
    
      print(Shift+Contact+CarNo+FirstName)
      query2="INSERT INTO driver(DID, NIC,FirstName, LastName, CarNo, Contact, Shift) VALUES (%s, %s, %s, %s,%s, %s, %s)"
      datashiz=(DID,NIC,FirstName,LastName,CarNo,Contact,Shift)
      val=mycursor.execute(query2,datashiz)
      mydb.commit()
     
      
    
      if val:
        return jsonify({'status': 'true'})
      else:
       return jsonify({'status': 200})
    except Exception as e:
      return jsonify({'error': str(e), 'status': 500})        

app.run(host='0.0.0.0',port='5000')