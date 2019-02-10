import React from "react"
import Scrollchor from 'react-scrollchor';

const Header = () => {
    return (
        <nav className="header">
            <h1 className="header-title">
                <Scrollchor className="header-navlink" to="#Home">My <span className="lname">Portfolio</span></Scrollchor>
            </h1>
            <ul className="header-ulist">
                <li className="header-list"><Scrollchor className="header-navlink" to="#Projects">My Projects</Scrollchor></li>
                <li className="header-list"><Scrollchor className="header-navlink" to="#About">About me</Scrollchor></li>
            </ul>
        </nav>
    )
}

export default Header