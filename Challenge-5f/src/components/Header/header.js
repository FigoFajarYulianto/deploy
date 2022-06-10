import React from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import logo from '../../assets/icons/logo.png'
import toggler from '../../assets/icons/Toggler.png'


function Header() {

    return (
            <Container fluid>
                <section className="header-section">
                    <Container>
                        {/* <!-- ---------- NAVIGATION SECTION BEGIN ---------- --> */}
                        <section className="navigation-section">
                            <nav className="navbar navbar-expand-lg justify-content-end">
                                <div className="container fixed-position p-0">
                                    {/* <!-- Logo --> */}
                                    <Link className="navbar-brand nav-position ms-2" to="/"><img src={logo} alt="Logo"/></Link>
                                    {/* <!-- Toggle Navigate Interface Mobile --> */}
                                    <button className="navbar-toggler mt-5" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#mynavbar">
                                        <img src={toggler} alt=""/>
                                    </button>
                                    {/* <!-- Navbar List --> */}
                                    <div className="collapse navbar-collapse justify-content-end" id="mynavbar">
                                        <ul className="navbar-nav nav ms-auto navbar-right">
                                            <li className="nav-item ms-4">
                                                <a className="nav-link nav-position" href="#our-services-section"><p>Our Services</p></a>
                                            </li>
                                            <li className="nav-item ms-4">
                                                <a className="nav-link nav-position" href="#why-us-section">Why Us</a>
                                            </li>
                                            <li className="nav-item ms-4">
                                                <a className="nav-link nav-position" href="#testimony-section">Testimonial</a>
                                            </li>
                                            <li className="nav-item ms-4">
                                                <a className="nav-link nav-position" href="#faq-section">FAQ</a>
                                            </li>
                                            <li className="nav-item ms-4">
                                                <Link className="nav-link nav-position p-0" to="/">
                                                    <button className="btn-register">Register</button>
                                                </Link>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            </nav>
                        </section>
                        {/* <!-- ---------- NAVIGATION SECTION END ---------- --> */}
                    </Container>
                </section>
            </Container>
        )
    }

export default Header;
