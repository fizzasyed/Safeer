const express = require('express');
var app=express();
const bodyParser = require('body-parser');


app.set('view engine','ejs');

// __dirname
app.use(express.static(__dirname+"/public"));

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true })); 

app.get("/",(req,res)=>{

});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is up on port ' + 3000)
});