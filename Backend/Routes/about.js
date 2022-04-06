import Express from "express";//imports express
const route = Express.Router();// function is used to create a new router object. This function is used when you want to create a new router object in your program to handle requests.

import About from "../Database/schema/About.js";//require() is a global node function that is used to import modules into the current file.

route.post("/contact_us", async (req, res) => {
  const { name, email, phno, message } = req.body;
  const newAbout = About({
    name: name,
    email: email,
    phoneNumber: phno,
    message: message,
  });

  try {
    await newAbout.save();
    console.log("Added successfully");
    res.status(201).json({...newAbout, message : "Message sent successfully Redirecting to login..."});
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
});

export default route;
