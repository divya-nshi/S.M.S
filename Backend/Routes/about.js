import Express from "express";//imports express
const route = Express.Router();// function is used to create a new router object. This function is used when you want to create a new router object in your program to handle requests.

import About from "../Database/schema/About.js";//require() is a global node function that is used to import modules into the current file.

route.post("/contactUs", (req, res) => {
  const aboutQuery = req.body;
  const about = saveAbout(aboutQuery);
  console.log("Added successfully");
  if (about) {
    console.group(about)
    res
      .status(201)
      .json({ ...about, message: "About Added Redirecting to login..." });
  } else {
    res.status(409).json({ message: err.message });
  }
});

const saveAbout = async (aboutQuery) => {
  {
    const newAbout = About({
      name: aboutQuery.name,
      email: aboutQuery.email,
      phno: aboutQuery.phno,
      message: aboutQuery.message
    });
    try {
      await newAbout.save( () => {
        return newAbout;
      });
    } catch (err) {
      return false;
    }
  }
};

route.get("/contactUs", async (req, res) => {
  try {
    const about = await About.find();
    res.status(200).json(about);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

export default route;
