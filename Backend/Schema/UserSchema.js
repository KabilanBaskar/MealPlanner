const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    mobile: { type: Number, required: true, unique: true, sparse: true }
});

const Signup = mongoose.model("Signup", signupSchema);

module.exports = Signup;