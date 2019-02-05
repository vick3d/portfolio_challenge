import React from "react"
import {HashLink, Link} from "react-router-hash-link"

const Header = () => {
    return (
        <nav className="header">
            <h1 className="header-title">
                <Link className="header-navlink" to='/'>My Portfolio</Link>
            </h1>
            <ul className="header-ulist">
                <li className="header-list"><Link to="about-me#About">About me</Link></li>
                <li className="header-list"><NavLink className="header-navlink" to='/projects'>My Projects</NavLink></li>
            </ul>
        </nav>
    )
}

export default Header