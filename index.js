var express = require("express")//imports express
var bodyParser = require("body-parser")//imports body-parser
var mongoose = require("mongoose")//imports mongoose

const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb+srv://contactus:wNT!m$S7G$.9L.M@cluster0.4qsd4.mongodb.net/web_d?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});//for establishing the connection to mongodb atlas

var db = mongoose.connection;//storing connection in a variable db

db.on('error',()=>console.log("Error in Connecting to Database"));//if connection not successful
db.once('open',()=>console.log("Connected to Database"))//if connection succesful

app.post("/sign_up",(req,res)=>{
    var name = req.body.name;//id same as in html file
    var email = req.body.email;
    var phno = req.body.phno;
    var password = req.body.password;

    var data = { //object creation
        "Name": name, 
        "Email" : email,
        "Phone_No": phno,
        "Message" : password
    }

    db.collection('details').insertOne(data,(err,collection)=>{//our data will be stored under details
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });

    return res.redirect('home_page.html')//after contact us redirect to next page

})


app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('index.html');
}).listen(3001);


console.log("Listening on PORT 3001 http://127.0.0.1:3001/");