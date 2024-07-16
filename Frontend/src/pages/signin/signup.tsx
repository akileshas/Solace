import React from "react";
import signin from "../signin/signup.css";
import SignInForm from "../../components/SIGNIN/signin-form";
import SignInImg  from "../../components/SIGNIN/signin-img";
import Header from "../../components/SIGNIN/header";

const Signup = () => {
    return (
        <section id ="signin-page">
            <div id="header">
                <Header />
            </div>
        <div id ="signin-content">
            <SignInForm/>
        </div>
        <div id ="signin-img" >
            <SignInImg/>
        </div>
    </section>
    );
};

export default Signup;