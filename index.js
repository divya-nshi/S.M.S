var express = require("express")//include
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb+srv://kulsum:idklol@cluster0.x8slt.mongodb.net/webd?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"))

app.post("/sign_up",(req,res)=>{
    var name = req.body.name;//id same in html file
    var email = req.body.email;
    var phno = req.body.phno;
    var password = req.body.password;

    var data = { //object creation
        "name": name, 
        "email" : email,
        "phone_no": phno,
        "message" : password
    }

    db.collection('details').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });

    return res.redirect('home_page.html')

})


app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('index.html');
}).listen(3001);


console.log("Listening on PORT 3001 http://127.0.0.1:3001/");