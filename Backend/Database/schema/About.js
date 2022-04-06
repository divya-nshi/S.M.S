import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema({
    name: String,
    email: String,
    phno: String,
    message: String
});

const About = new mongoose.model("About", aboutSchema);

export default About;