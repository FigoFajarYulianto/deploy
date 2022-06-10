import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import facebookIcon from '../../assets/icons/icon_facebook.png'
import icon_instagram from '../../assets/icons/icon_instagram.png'
import icon_twitter from '../../assets/icons/icon_twitter.png'
import icon_mail from '../../assets/icons/icon_mail.png'
import icon_twitch from '../../assets/icons/icon_twitch.png'
import logo from '../../assets/icons/logo.png'


function Footer() {

    return (
            <Container>
                {/* <!-- ---------- FOOTER SECTION BEGIN ---------- --> */}
                <section className="footer-section">
                    <Row>
                        {/* <!-- Address --> */}
                        <Col lg="3" md="6" sm="12" className="mb-4">
                            <div className="address">
                                <h5>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</h5>
                                <h5>binarcarrental@gmail.com</h5>
                                <h5>081-233-334-808</h5>
                            </div>
                        </Col>
                        {/* <!-- Navigation --> */}
                        <Col lg="2" md="6" sm="12" className="mb-4">
                            <div className="navigation">
                                <ul>
                                    <li>
                                        <a href="/cari-mobil">Our services</a>
                                    </li>
                                    <li>
                                        <a href="/cari-mobil">Why Us</a>
                                    </li>
                                    <li>
                                        <a href="/cari-mobil">Testimonial</a>
                                    </li>
                                    <li>
                                        <a href="/cari-mobil">FAQ</a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        {/* <!-- Sosmed --> */}
                        <Col lg="3" md="6" sm="12" className="mb-4">
                            <div className="sosmed">
                                <h5>Connect with us</h5>
                                <ul>
                                    <li>
                                        <Link to="/"><img src={facebookIcon} alt=""/></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><img src={icon_instagram} alt=""/></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><img src={icon_twitter} alt=""/></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><img src={icon_mail} alt=""/></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><img src={icon_twitch} alt=""/></Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        {/* <!-- Copyright --> */}
                        <Col lg="4" md="6" sm="12" className="mb-4">
                            <div className="copyright">
                                <h5>Copyright Binar 2022</h5>
                                <img src={logo} alt="Binar Academy"/>
                            </div>
                        </Col>
                    </Row>
                </section>
                {/* <!-- ---------- FOOTER SECTION END ---------- --> */}
            </Container>
        )
    }

export default Footer;
