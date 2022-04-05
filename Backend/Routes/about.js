import Express from "express";
const route = Express.Router();

import About from "../Database/schema/About.js";

route.post("/contact_us", (req, res) => {
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
