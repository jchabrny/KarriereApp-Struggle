import React from 'react';
import './Footer.scss';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h5>archive</h5>
                        <ul>
                            <li>
                                <button className="footer-button">2020</button>
                            </li>
                            <li>
                                <button className="footer-button">2021</button>
                            </li>
                            <li>
                                <button className="footer-button">2022</button>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5>signed in as: <span>USERNAME</span></h5>
                        <ul>
                            <li>
                                <button className="footer-button">account settings</button>
                            </li>
                            <li>
                                <button className="footer-button">log out</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}