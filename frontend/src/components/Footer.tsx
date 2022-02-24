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
                            <li><a href="#">2020</a></li>
                            <li><a href="#">2021</a></li>
                            <li><a href="#">2022</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5>signed in as: <span>USERNAME</span></h5>
                        <ul>
                            <li><a href="#">account settings</a></li>
                            <li><a href="#">log out</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}