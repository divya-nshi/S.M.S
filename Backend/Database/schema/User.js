import mongoose from "mongoose";// imported mongoose

const userSchema = new mongoose.Schema({ //created schema and stored the datatypes of objects
    name: String,
    email: String,
    password: String
});

const User = new mongoose.model("User", userSchema); //created model
                                                    //User- name of collection & userSchema name of schema
export default User;                                //Model exported so that can be used elsewhere