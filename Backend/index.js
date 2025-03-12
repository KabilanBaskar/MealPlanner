const express = require("express");  //Import the express framework. which handles http req, res, and middleware(handle logic or process).
const cors = require("cors"); // to allow frontend request
const bodyparser = require("body-parser");
const Signup = require("./Schema/UserSchema");
const bcrypt = require("bcrypt");
const mdb = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

const app = express(); //Definning framework in a variable.
const PORT =  3000; //local server running place

dotenv.config();
app.use(cors()); // allow frontend to access backend
app.use(express.json()); //handle the json data
app.use(bodyparser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '..', 'Frontend', 'dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'Frontend', 'dist', 'index.html'));
  });

mdb.connect(process.env.MONGODB_URL)
.then( () => {
    console.log(`MongoDB Connection Successful`);
}).catch( (err) => {
    console.log(`MogoDB Failed to Connect`, err);
    process.exit(1);
})

// const deleteInvalidRecords = async () => {
//     await Signup.deleteMany({ mobile: null });
//     console.log("Deleted records with null mobile.");
// };

// deleteInvalidRecords();

app.post("/signup", async (req, res) => {
    try {
        let { fullName, email, password, mobile } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const existingUser = await Signup.findOne({ email });
        if (!/^\d{10}$/.test(mobile)) {
            return res.status(400).json({ success: false, message: "Invalid mobile number!" });
        }
        if (existingUser) {
            return res.status(400).json({ success: false, message: "You've already registered! Please Sign-in" });
        }
        mobile = mobile.toString().trim();
        const newUser = new Signup({ fullName, email, password:hashedPassword, mobile });
        await newUser.save();
        res.json({ success: true, message: "User Registered!" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

app.post("/signin", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Signup.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, message: "User not found!" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: "Invalid credentials!" });
        }
        res.json({ success: true, message: "sign-in successful" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server started successfully : http://localhost:${PORT}`);
});