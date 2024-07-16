import React from 'react';
import './Header.css';
import images from '../../assets/icons';


const Header = () => {
    return (
        <div className="signup-header">
            <img src={images.icon11} alt="logo" />
            <h1>Solace</h1>
        </div>
    );
};
export default Header;