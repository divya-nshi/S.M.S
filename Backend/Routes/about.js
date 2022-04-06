import Express from "express";
const route = Express.Router();

import About from "../Database/schema/About.js";

route.post("/contactUs", async (req, res) => {
  const aboutQuery = req.body;
  console.log(aboutQuery)
  const newAbout = About({
    name: aboutQuery.name[0],
    email: aboutQuery.email[0],
    phno: aboutQuery.phno[0],
    message: aboutQuery.message[0]
  });
  try {
    await newAbout.save();
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
