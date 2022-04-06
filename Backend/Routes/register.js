import Express from "express";
const route = Express.Router();

import User from "../Database/schema/User.js";

route.post("/register", async (req, res) => {
  const userQuery = req.body;
  User.findOne({ email: userQuery.email }, (err, user) => {
    if (user) {
      res.send({ message: "User already registerd" });
    } else {
      const newUser = saveUser(userQuery);
      if (newUser) {
        console.log("Added successfully");
        res.status(201).json({...newUser, message : "User Added Redirecting to login..."});
      } else {
        res.status(409).json({ message: err.message });
      }
    }
  });
});

const saveUser = async (userQuery) => {
  {
    const newUser = User({
      name: userQuery.name,
      email: userQuery.email,
      password: userQuery.password,
    });
    try {
      await newUser.save();
      return newUser;
    } catch (err) {
      return false;
    }
  }
};

export default route;
