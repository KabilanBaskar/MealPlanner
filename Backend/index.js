const express = require("express");  //Import the express framework. which handles http req, res, and middleware(handle logic or process).
const cors = require("cors"); // to allow frontend request
const path = require("path");
const mdb = require("mongoose");
const dotenv = require("dotenv");

const app = express(); //Definning framework in a variable.
const PORT = 3000; //local server running place

app.use(cors()); // allow frontend to access backend
app.use(express.json()); //handle the json data
dotenv.config();

app.use(express.static("C://Users//kabil//Desktop//MealPlanner//Frontend//dist"));

app.get("*", (req, res) => {
    res.sendFile("C://Users//kabil//Desktop//MealPlanner//Frontend//dist//index.html");
});

mdb.connect(process.env.MONGODB_URL)
.then( () => {
    console.log(`MongoDB Connection Successful`);
}).catch( () => {
    console.log(`MogoDB Failed to Connect`);
})

app.listen(PORT, () => {
    console.log(`Server started successfully : http://localhost:${PORT}`);
});