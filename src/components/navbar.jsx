import React, { Component } from 'react';

const NavBar = ({totalCounters}) => {

        return (
            <nav className="navbar navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand">Total Items <span className="badge badge-pill badge-secondary">{totalCounters}</span></a>
                </div>
            </nav>
        );
    
}
 
export default NavBar;