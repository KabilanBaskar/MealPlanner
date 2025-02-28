import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Login = () => {
    const [move, setMove] = useState(false);
    const [click, setClick] = useState(false);

    return (
        <>
            <div className="backbackground"></div>
            <motion.div 
                className="frontbackground"
                animate={{
                    x: move ? -700 : 0,
                }}
                transition={{ duration: 1 }}
            >
                <AnimatePresence>
                <motion.button
                    className="signupbutton"
                    onClick={(e) => {
                        e.preventDefault();
                        setMove(!move);
                        setClick(!click);
                    }}
                    animate={{
                        left: click ? 2080 : 1380, 
                    }}
                    transition={{ duration: 1 }}
                >
                    {click ? "Sign-in" : "Sign-up"}

                <motion.div
                    className="signinorsignup"
                    animate={{
                        x: move ? 0 : 0,
                    }}
                >
                    {click ? (
                        // Sign-up Form
                        <motion.div 
                            key="signup"
                            className="signupform"
                            initial={{ opacity: 0, y: 0 }}
                            animate={{ opacity: 1, y: 20, x:60 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 1 }}
                        >
                            <form>
                                <h1 className="topic">Sign-up Form</h1>
                                <motion.input
                                    type="text"
                                    placeholder="Full Name"
                                    className="inputfield"
                                    initial={{ y: -1000, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 1.8, ease: "easeOut" }}
                                />
                                <motion.input
                                    type="email"
                                    placeholder="Email"
                                    className="inputfield"
                                    initial={{ y: -1000, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 1.6, ease: "easeOut" }}
                                />
                                <motion.input
                                    type="password"
                                    placeholder="Password"
                                    className="inputfield"
                                    initial={{ y: -1000, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 1.4, ease: "easeOut" }}
                                />
                                <motion.input
                                    type="text"
                                    placeholder="Mobine number"
                                    className="inputfield"
                                    initial={{ y: -1000, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 1.2, ease: "easeOut" }}
                                />
                                <motion.p
                                    className="registerbutton"
                                    initial={{ y: 1000, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1, x:34}}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                >Register</motion.p>
                            </form>
                        </motion.div>
                    ) : (
                        // Sign-in Form
                        <motion.div 
                            key="signin"
                            className="signinform"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 50, x: 65}}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.5 }}
                        >
                            <form>
                                <h1 className="topic">Sign-in Form</h1>
                                <motion.input
                                    type="text"
                                    placeholder="Username"
                                    className="inputfield"
                                    initial={{ x: -1000, opacity: 0 }}
                                    animate={{ y: 10, opacity: 1, x:0 }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                />
                                <motion.input
                                    type="password"
                                    placeholder="Password"
                                    className="inputfield"
                                    initial={{ x: 1300, opacity: 0 }}
                                    animate={{ y: 10, opacity: 1, x:0 }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                />
                                <motion.p
                                    className="loginbutton"
                                    initial={{ y: 1000, opacity: 0 }}
                                    animate={{ y: 10, opacity: 1, x:30 }}
                                    transition={{ duration: 1.4   , ease: "easeOut" }}
                                ><Link to="/Home">Sign-in</Link></motion.p>

                            </form>
                        </motion.div>
                    )}
                </motion.div>
                </motion.button>
                </AnimatePresence>
            </motion.div>
            
        </>
    );
};

export default Login;
