import React from 'react';
import './Navbar.scss';

export default function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Struggle</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">career crack</a>
                        </li>
                        <li className="nav-item">
                            <button className="nav-button">job juggler</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-button">fierce founder</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-button">agenda</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}