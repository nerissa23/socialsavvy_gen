import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { signInStart, signInSuccess, signInFailure } from "../../redux/user/userSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";

import "./style1.css"
import { app } from "../../firebase.js";
// import logo from "../../assets/images/socialsavvy-logo.png"

function Register() {
    const lineStyle = { stroke: "black", strokeWidth: 1 };

    const [formData, setFormData] = useState({});
    const { loading, error } = useSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleOnChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            dispatch(signInStart());
            const res = await fetch("/backend/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const text = await res.text();
            console.log("Response text:", text);

            const data = JSON.parse(text);
            if (data.success === false) {
                dispatch(signInFailure(data));
                return;
            }
            dispatch(signInSuccess(data));
            navigate("/login");
        } catch (error) {
            dispatch(signInFailure(error));
        }

    };
    
    const handleGoogleClick = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);

            const result = await signInWithPopup(auth, provider);
            const res = await fetch("/backend/auth/google", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: result.user.displayName,
                    email: result.user.email,
                    photo: result.user.photoURL,
                }),
            });
            const data = await res.json();
            dispatch(signInSuccess(data));
        } catch (error) {
            console.log("Could not login with Google", error)
        }
    }

    return (
        <div className="split-screen">
            <div className="left">
                <section className="copy">
                    <div className="logo">
                        <img src="../../../public/assets/images/socialsavvy-logo.png" alt="SocialSavvy" />
                    </div>
                    <h1>Create and manage your marketing contents better and easier.</h1>
                    <svg width="203" height="1">
                        <line x1="0" y1="0" x2="203" y2="0" style={lineStyle} />
                    </svg>
                    <p><i> Streamline Content, Amplify Impact</i></p>
                </section>
            </div>
            <div className="right">
                <form onSubmit={handleSubmit}>
                    <section className="copy">
                        <h2>Create your account</h2>
                        <div className="signup-container">
                            <p>Already have an account? <Link to="/login"><strong>Log in</strong></Link></p>
                        </div>
                        <button type="button" onClick={handleGoogleClick} className="signup-w-google-btn">
                            Sign up with Google
                        </button>
                        <div>
                            <svg width="130" height="1">
                                <line x1="0 y1=0" x2="130" y2="0" style={lineStyle} ></line>
                            </svg>
                            <small>Or</small>
                            <svg width="130" height="1">
                                <line x1="0 y1=0" x2="130" y2="0" style={lineStyle} ></line>
                            </svg>
                        </div>
                    </section>
                    <br />
                    {/* <div className="input-container name">
                        <input id="fname" name="fname" type="text" placeholder="First name" />
                        <input id="lname" name="lname" type="text" placeholder="Last name" />
                    </div> */}
                    <div className="input-container email">
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            onChange={handleOnChange}
                        />
                    </div>
                    <div className="input-container password">
                        <input
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={handleOnChange}
                        />
                        <i className="far fa-eye-slash"></i>
                    </div>
                    <div className="input-container password">
                        <input
                            id="cpassword"
                            type="password"
                            name="cpassword"
                            placeholder="Confirm Password"
                            onChange={handleOnChange}
                        />
                        <i className="far fa-eye-slash"></i>
                    </div>
                    <p className="errorMsg">{error ? error || "Something went wrong!" : ""}</p>
                    <button disabled={loading} className="signup-btn" type="submit">
                        {loading ? "Loading..." : "Sign Up"}
                    </button>
                    <div className="input-container cta">
                        <label className="checkbox-container">
                            <input type="checkbox" />
                            <span className="r-checkmark"></span>
                            <p><small>By creating an account, I agree to accept SocialSavvy's
                                <Link to="https://docs.google.com/document/d/1KazYjy9XokNkQurNVBNj1duowDUW72UF6RFD8bKt5W0/edit?usp=sharing"> Privacy Policy </Link>
                                and <Link to="https://docs.google.com/document/d/1RDBvwhP1bWuuPkI6fRsvOu6x872QvEK9uY75jLUjmUw/edit?usp=sharing">Terms of Service</Link>.</small></p>
                        </label>
                    </div>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Register;