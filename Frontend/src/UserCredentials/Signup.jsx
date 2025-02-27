import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <>
        <div className="signupleftbackground"></div>
        <div className="container signup">
        <h1>Signup form</h1>
        <form>
            <input type="text" placeholder="FirstName" required className="blockinput"/>
            <input type="text" placeholder="lastName" required className="blockinput"/>
            <input type="email" placeholder="Enter your email" required className="blockinput"/>
            <input type="email" placeholder="Confirm yor email" required className="blockinput" />
            <input type="password" placeholder="Enter yor password" required className="blockinput" />
            <input type="password" placeholder="confirm your password" required className="blockinput" />
            <button className="blockinput">Signup</button>
            <p>Already Have an account? <Link to="/"><i><b>Sign-in</b></i></Link></p>
        </form>
        </div>
        <div className="signuprightbackground"></div>
        </>
    )
}
export default Signup;