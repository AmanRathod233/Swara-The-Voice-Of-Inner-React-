import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <header className="header_section common_header">
            <div className="container">
                <div className="row justify-content-between align-items-center m-0">
                    <div className="col-xl-5 col-md-6 col-6">
                        <Link to="/">
                            <img src="public/assets/Images/swaralogo.svg" alt="logo" />
                        </Link>
                    </div>

                    <div className="col-xl-7 col-md-6 col-6 d-flex justify-content-end flex-grow-1">
                        <nav className="navbar navbar-expand-xl">
                            <button className="navbar-toggler d-xl-none" type="button" data-bs-toggle="offcanvas"
                                data-bs-target="#mobileNav">
                                <i className="fa fa-bars" aria-hidden="true"></i>
                            </button>

                            <div className="collapse navbar-collapse d-none d-xl-flex">
                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item">
                                        <Link className={`nav-link ${currentPath === "/" ? "active" : ""}`} to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={`nav-link ${currentPath === "/Aboutus" ? "active" : ""}`} to="/Aboutus">About Us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={`nav-link ${currentPath === "/Service" ? "active" : ""}`} to="/Service">Services</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={`nav-link ${(currentPath === "/Resource" || currentPath === "/SingleBlog") ? "active" : ""}`} to="/Resource">
                                            Resource
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={`nav-link ${currentPath === "/Contact" ? "active" : ""}`} to="/Contact">Contact</Link>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="tel:1-333-345-6868">
                                            <i className="fa fa-phone" aria-hidden="true"></i> 1-333-345-6868
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>

                        <div className="offcanvas offcanvas-start" tabIndex="-1" id="mobileNav">
                            <div className="offcanvas-header">
                                <Link to="/">
                                    <img src="public/assets/Images/swaralogo.svg" alt="logo" />
                                </Link>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav">
                                    <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="/Aboutus">About Us</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="/Service">Services</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="/Expert">Expert</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="/Resource">Resource</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="/Contact">Contact</Link></li>
                                </ul>
                                <div className="nav_contact">
                                    <p className="nav_phone_number">
                                        <a href="tel:1-333-345-6868">
                                            <i className="fa fa-phone" aria-hidden="true"></i> 1-333-345-6868
                                        </a>
                                    </p>
                                    <p className="nav_email">
                                        <a href="mailto:swara@gmail.com">
                                            <i className="fa fa-envelope"></i> swara@gmail.com
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
