import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function VanDetailLayout() {
    return (
        
        <nav>
            <NavLink style={({isActive}) => isActive ? {fontweight: 'bold', textDecoration: 'underline', color: '#161616'} : null} end to='.' >Details</NavLink>
            <NavLink style={({isActive}) => isActive ? {fontweight: 'bold', textDecoration: 'underline', color: '#161616'} : null} end to='pricing' >Price</NavLink>
            <NavLink style={({isActive}) => isActive ? {fontweight: 'bold', textDecoration: 'underline', color: '#161616'} : null} end to='host-photos' >Photos</NavLink>
        </nav>

    )
}