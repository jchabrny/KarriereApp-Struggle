import React from 'react';
import './Navbar.scss';

export default function Navbar() {

return(
    <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <nav className="container-fluid">
                <a className="navbar-brand" href="#">Struggle</a>
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
                            <a className="nav-link" href="#">job juggler</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">fierce founder</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/agenda">agenda</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </nav>
    </div>
)
}