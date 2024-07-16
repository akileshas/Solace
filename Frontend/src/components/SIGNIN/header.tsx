import React from "react";
import icons from "../../assets/icons.tsx";
import '../SIGNIN/header.css';


const Header = () => {
    return (
        <div className="header">
            <img src={icons.icon11} alt="img11" className="header-logo" />
        </div>
    );
};

export default Header;