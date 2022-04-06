import Express from "express"; //imported express
const route = Express.Router();//new router object is created

import About from "../Database/schema/About.js";//importing database schema 

route.post("/contactUs", async (req, res) => {//post is used so that the data is put in the response body of the request and sent to the server.
  const aboutQuery = req.body;//req.body property contains key-value pairs of data submitted in the request body
  console.log(aboutQuery)
  const newAbout = About({//key value pairs creation of objects
    name: aboutQuery.name[0],//created an array to save name email and other required fields
    email: aboutQuery.email[0],
    phno: aboutQuery.phno[0],
    message: aboutQuery.message[0]
  });
  try {
    await newAbout.save();//save is inbuilt fn of mongoose || waits till the data is saved 
    console.log("Added successfully");
    res.status(201).json({...newAbout, message : "Message sent successfully Redirecting..."});
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
});


route.get("/contactUs", async (req, res) => {
  try {
    const about = await About.find();
    res.status(200).json(about);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

export default route;
