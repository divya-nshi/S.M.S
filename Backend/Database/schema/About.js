import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema({
    name: String,
    email: String,
    phoneNumber: String,
    message: String
});

const About = new mongoose.model("About", aboutSchema);

export default About;