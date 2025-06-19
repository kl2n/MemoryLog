import React from "react";
import logo from './../images/memlog.png'
import {NavLink} from "react-router-dom";

export default function Navbar({menu}) {
    const items = Array.isArray(menu) ? menu : [];
    const classList = ({isActive}) => "nav-link" + (isActive ? " active" : "");
    return (
        <>
            <nav className="navbar navbar-expand-md row align-items-center border-bottom border-light-subtle">
                <div className="container-fluid">
                    <div className="navbar-brand d-flex align-items-center gap-2 col">
                        <img className="logo" src={logo} alt="logo" />
                        <span className="fs-4 text-pink mb-0">MemoryLog</span>
                    </div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse col" id="navbarNav">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5">
                            {items.map((item, index) => (
                                <li key={index} >
                                    <NavLink to={item.to} className={classList}>
                                        {item.label}
                                    </NavLink>
                                </li>
                            ))}

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
