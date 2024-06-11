import React from "react";
import logo from "../images/globe.png"

export default function Navbar() {
    return (
        <nav>
            <div className="nav--container">
                <img src={logo} className="nav--logo" />
                <div className="nav--title">my travel journal</div>
            </div>
        </nav>
    )
}