import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/NavBar.css'

function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand"><img src="images/logo1.png" alt="LogoSg" width="100" height="100" className="LogoSg"/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/"><i className="bi bi-house-fill"></i> Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="about"><i className="bi bi-building-fill"></i> About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="contact"><i className="bi bi-envelope-at-fill"></i> Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="team"><i className="bi bi-microsoft-teams"></i> Team</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="cart"><i className="bi bi-cart4"></i> Cart</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
