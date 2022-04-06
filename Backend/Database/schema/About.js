import mongoose from "mongoose"; //imported mongoose 

const aboutSchema = new mongoose.Schema({ //created table schema in mongodb atlas and defined the datatypes of the objects
    name: String,
    email: String,
    phno: String,
    message: String
});

const About = new mongoose.model("About", aboutSchema); //creation of model
                                                        //About - name of collection where data will be stored - aboutSchema - the schema defined earlier 
export default About;                                   //used export it so it can be used elsewhere