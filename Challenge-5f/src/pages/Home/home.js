import React from "react";
import { Link} from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Footer from "../../components/Footer/footer";
import carImage from '../../assets/images/img_car.png';
import logo from '../../assets/icons/logo.png';
import toggler from '../../assets/icons/Toggler.png';
import SearchingForm from "../../components/Pencarian/komponenPencarian";


function Home() {
    return (
            <React.Fragment>
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

                            {/* <!-- ---------- HERO SECTION BEGIN ---------- --> */}
                            <section className="hero-section">
                                <Row>
                                    <Col lg="6" md="12" sm="12" className="hero-desc">
                                        <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                                        <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga
                                            terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                                        <div>
                                            <Link to="/"><button className="btn-rent-now">Mulai Sewa Mobil</button></Link>
                                        </div>
                                    </Col>
                                    <Col lg="6" md="12" sm="12" className="text-center p-0">
                                        <img src={carImage} className="img-car" alt="Mobil"/>
                                    </Col>
                                </Row>
                            </section>
                            {/* <!-- ---------- HERO SECTION END ---------- --> */}
                        </Container>
                    </section>
                </Container>

                <Container>
                    <div className="box-pencarian mx-5">

                        {SearchingForm(true, false)}

                    </div>
                </Container>

                <Footer />

            </React.Fragment>
        )
    }

export default Home;
