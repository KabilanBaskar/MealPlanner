const express = require("express");  //Import the express framework. which handles http req, res, and middleware(handle logic or process).
const cors = require("cors"); // to allow frontend request
const path = require("path");

const app = express(); //Definning framework in a variable.
const PORT = 3000; //local server running place

app.use(cors()); // allow frontend to access backend
app.use(express.json()); //handle the json data

app.use(express.static("C://Users//kabil//Desktop//MealPlanner//Frontend//dist"));

app.get("*", (req, res) => {
    res.sendFile("C://Users//kabil//Desktop//MealPlanner//Frontend//dist//index.html");
});

app.get("/api/data", (req, res) => {
    res.json({ message: "Hello from Express Backend!" });
});

app.listen(PORT, () => {
    console.log(`Server started successfully : http://localhost:${PORT}`);
});