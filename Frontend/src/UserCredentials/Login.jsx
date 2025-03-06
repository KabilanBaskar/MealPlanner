import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

const Login = () => {
    const navigate = useNavigate();
    const [move, setMove] = useState(false);
    const [click, setClick] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        mobile: ""
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.fullName || !formData.email || !formData.password || !formData.mobile) {
            alert("All fields are required!");
            return;
        }
        try {
            const response = await axios.post("http://localhost:3000/signup", formData);
            alert(response.success);
            navigate("/Home");
            
        } catch (error) {
            alert("Error: " + (error.response?.data?.message || "Something went wrong"));
        }
    };
    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:3000/signin`, formData);
            alert(response.success);
            navigate("/Home");
            
        } catch (error) {
            alert("Error: " + (error.response?.data?.message || "Something went wrong"));
        }
    };
    return (
        <>
            <div className="backbackground"></div>
            <motion.button
                className="signupbutton"
                onClick={(e) => {
                    e.preventDefault();
                    setMove(!move);
                    setClick(!click);
                }}
                animate={{
                    left: click ? 1370 : 1370, 
                }}
                transition={{ duration: 1 }}
            >
            {click ? "Sign-in" : "Sign-up"}
            </motion.button>
            <motion.div 
                className="frontbackground"
                animate={{
                    x: move ? -700 : 0,
                }}
                transition={{ duration: 1 }}
            >    
             
                <div className="signinorsignup">
                    {click ? (
                        // Sign-up Form
                        <div>
                            <form onSubmit={handleSubmit}>
                                <h1 className="signuptopic">Sign-up Form</h1>
                                <AnimatePresence>  
                                    <motion.input
                                        type="text"
                                        name = "fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        placeholder="Full Name"
                                        className="inputfield"
                                        initial={{ y: -1000, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 1.8, ease: "easeOut" }}
                                    />
                                    <motion.input
                                        type="email"
                                        name = "email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Email"
                                        className="inputfield"
                                        initial={{ y: -1000, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 1.6, ease: "easeOut" }}
                                    />
                                    <motion.input
                                        type="password"
                                        name = "password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="Password"
                                        className="inputfield"
                                        initial={{ y: -1000, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 1.4, ease: "easeOut" }}
                                    />
                                    <motion.input
                                        type="number"
                                        name="mobile"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        placeholder="Mobine number"
                                        className="inputfield"
                                        initial={{ y: -1000, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 1.2, ease: "easeOut" }}
                                    />
                                    <motion.button
                                        type="submit"
                                        className="registerbutton"
                                        initial={{ y: 1000, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1, x:34}}
                                        transition={{ duration: 1, ease: "easeOut" }}
                                    >Register</motion.button>
                                </AnimatePresence>
                            </form>
                        </div>
                    ) : (
                        // Sign-in Form
                        <div>
                            <form onSubmit={handleSignIn}>
                                <h1 className="signintopic">Sign-in Form</h1>
                                <motion.input
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="inputfield"
                                    initial={{ x: -1000, opacity: 0 }}
                                    animate={{ y: 10, opacity: 1, x:0 }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                />
                                <motion.input
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="inputfield"
                                    initial={{ x: 1300, opacity: 0 }}
                                    animate={{ y: 10, opacity: 1, x:0 }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                />
                                <motion.button
                                    className="loginbutton"
                                    initial={{ y: 1000, opacity: 0 }}
                                    animate={{ y: 10, opacity: 1, x:30 }}
                                    transition={{ duration: 1.4   , ease: "easeOut" }}
                                >Sign-in</motion.button>
                            </form>
                        </div>
                    )}
                </div>
                
            </motion.div>
            
        </>
    );
};

export default Login;
