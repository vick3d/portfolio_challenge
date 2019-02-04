import React from "react"
import {NavLink, Link} from "react-router-dom"

const Header = () => {
    return (
        <nav className="header">
            <h1 className="header-title">
                <Link className="header-navlink" to='/'>My Portfolio</Link>
            </h1>
            <ul className="header-ulist">
                <li className="header-list"><NavLink className="header-navlink" to='/about'>About me</NavLink></li>
                <li className="header-list"><NavLink className="header-navlink" to='/projects'>My Projects</NavLink></li>
            </ul>
        </nav>
    )
}

export default Header