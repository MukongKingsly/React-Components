import React from "react";
import { useLocation } from "react-router-dom";
import LoginOne from "./Login";
import SignupOne from "./Signup";
import Banner from "./Banner";
import "./componentOne.css";

const ComponentOne = () => {
  const location = useLocation();
  if (location.pathname === "/") {
    return (
      <div className="componentOne">
        <LoginOne />
        <Banner />
      </div>
    );
  } else if (location.pathname === "/signupone") {
    return (
      <div className="componentOne">
        <SignupOne />
        <Banner />
      </div>
    );
  }
};
export default ComponentOne;
