var express=require("express");
var bodyParser=require("body-parser");
const path = require('path');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/gfg');
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
	console.log("connection succeeded");
})

var app=express()


app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
	extended: true
}));

app.post('/sign_up', function(req,res){
	var name = req.body.name;
	var email =req.body.email;
	var pass = req.body.password;
	var phone =req.body.phone;

	var data = {
		"name": name,
		"email":email,
		"password":pass,
		"phone":phone
	}
db.collection('details').insertOne(data,function(err, collection){
		if (err) throw err;
		console.log("Record inserted Successfully");
			
	});
	return res.sendFile(path.join( __dirname , 'navbar.html'));
})

app.get('/',function(req,res){
res.set({
	'Access-control-Allow-Origin': '*'
	});
return res.redirect('/public/index.html');
}).listen(3000)

app.get('/link' , (req,res)=>{
    res.send("<h1>Here you will get the links</h1>");
})
app.get('/stuinfo' , (req,res)=>{
    res.sendFile(path.join(__filename , "../info.html"));
})
app.get('/ass' , (req,res)=>{
    res.sendFile(path.join(__filename , "../ass.html"));
})
app.get('/grades' , (req,res)=>{
    res.sendFile(path.join(__filename , "../grades.html"));
})

app.get('/home' , (req,res)=>{
    res.sendFile(path.join(__filename , "../navbar.html"))
})
app.get('/todo' , (req,res)=>{
    res.sendFile(path.join(__filename , "../todo.html"))
})
app.get('/lectures' , (req,res)=>{
    res.sendFile(path.join(__filename , "../lectures.html"))
})
app.get('/material' , (req,res)=>{
    res.sendFile(path.join(__filename , "../material.html"))
})

console.log("server listening at port 3000");
