import React from "react";
import { Link, NavLink } from "react-router-dom";
export default function Header() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    return (
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
            <NavLink style={({isActive}) => isActive ? activeStyles : null} to="/about">About</NavLink>
            <NavLink style={({isActive}) => isActive ? activeStyles : null} to="/vans">Vans</NavLink>
            <NavLink style={({isActive}) => isActive ? activeStyles : null} to="/host">Host</NavLink>
            </nav>
        </header>
    )
}
