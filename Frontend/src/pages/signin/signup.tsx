import React from "react";
import SignUpForm from "../../components/Signup/SignupForm";
import SignupImg from "../../components/Signup/SignupImg";
import Header from "../../components/Signup/Header";

const Signup = () => {
    return (
        <section id="signup-page">
            <div id="header">
                <Header/>
            </div>
            <div id="signup-page-cont">
                <SignUpForm />
            </div>
             <div id="signup-page-img">
                <SignupImg />
            </div>
        </section>
    );
};

export default Signup;