const express = require('express')
// require('./db/mongoos')
const bodyParser = require('body-parser');
const userRouter = require('./routers/user')
var session = require('express-session');
var cookieParser = require('cookie-parser');
var app=express()
const server = require("http").createServer(app);
// const io = require("socket.io").listen(server)
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(userRouter)
app.use(cookieParser());
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: '',
  database:'safejourn',
  multipleStatements:true

});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});





// io.on("connection", socket => {
//    console.log("a user connected :D");
//    socket.on("chat message", msg => {
//      console.log(msg);
//      socket.emit("chat message", msg);
//    });
//  });


server.listen(8080, () => {
    console.log('Server is up on port ' + 8080)
})