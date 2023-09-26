import React from "react";
import { Outlet, NavLink } from "react-router-dom";


export default function HostLayout() {
    return (
        <>
        <nav className="host-nav">
            <NavLink style={({isActive}) => isActive ? {fontweight: 'bold', textDecoration: 'underline', color: '#161616'} : null} end to='.' >DashBoard</NavLink>
            <NavLink style={({isActive}) => isActive ? {fontweight: 'bold', textDecoration: 'underline', color: '#161616'} : null} to="income">Income</NavLink>
            <NavLink style={({isActive}) => isActive ? {fontweight: 'bold', textDecoration: 'underline', color: '#161616'} : null} to="reviews">Reviews</NavLink>
            <NavLink style={({isActive}) => isActive ? {fontweight: 'bold', textDecoration: 'underline', color: '#161616'} : null} to="host-vans">Vans</NavLink>

        </nav>
        <Outlet />
        </>
    )
}