import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import { useSelector } from "react-redux";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import GreenButton from "../../components/Tombol/kumpulanTombol";
import keyIcon from '../../assets/icons/Users_Icon.png';
import settingIcon from '../../assets/icons/Settings_Icon.png';
import calendarIcon from '../../assets/icons/tanggal.png';
import SearchingForm from "../../components/Pencarian/komponenPencarian";


function CarDetails() {
    const { data: item } = useSelector((state) => state.carById);

    return (
            <Container fluid>

                <Header/>

                <Container>
                    <div className="box-pencarian-without-header-text mx-5">

                        <h5 className="mb-3 fw-bold">Pencarianmu</h5>
                        {SearchingForm(false, true)}

                    </div>

                    <Row className="px-5">
                        <Col lg="8" className="d-flex flex-column px-2 mt-3">
                            <div className=" card-list w-100 m-0">
                                <h5 className="fw-bold mb-4">Tentang Paket</h5>
                                <p>Include</p>
                                <ul className="text-secondary mb-4">
                                    <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                                    <li>Sudah termasuk bensin selama 12 jam</li>
                                    <li>Sudah termasuk Tiket Wisata</li>
                                    <li>Sudah termasuk pajak</li>
                                </ul>
                                <p>Exclude</p>
                                <ul className="text-secondary mb-2">
                                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                    <li>Tidak termasuk akomodasi penginapan</li>
                                </ul>

                                <div className="accordion accordion-flush" id="accordionFlushExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="flush-headingOne">
                                        <button className="accordion-button collapsed px-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            <h5 className="fw-bold m-0">Refund, Reschedule, Overtime</h5>
                                        </button>
                                        </h2>
                                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                            <ul className="text-secondary m-0">
                                                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                                <li>Tidak termasuk akomodasi penginapan</li>
                                                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                                <li>Tidak termasuk akomodasi penginapan</li>
                                                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                                <li>Tidak termasuk akomodasi penginapan</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" d-flex align-items-end justify-content-end">
                                <Button type="button" className="btn choice-btn w-auto fw-bold mt-4 mb-1">
                                    Lanjutkan Pembayaran
                                </Button>
                            </div>
                        </Col>
                        <Col className="d-flex flex-column align-items-center p-0 mt-3 px-2" key={item.id}>
                            <div className="card-list w-100">
                                <div className="car-img">
                                    <img src={`${ item.image }`} className="car-size" alt="car"/>
                                </div>
                                <p className="m-0 fw-bold">{item.name}</p>
                                <div className="d-flex justify-content-start">
                                <p className="pe-3"><img src={keyIcon} className="pe-2" alt=""/>{`${ item.capacity }`} orang</p>
                                <p className="pe-3"><img src={settingIcon} className="pe-2" alt=""/>{`${ item.transmission }`}</p>
                                <p className="pe-3"><img src={calendarIcon} className="pe-2" alt=""/>Tahun {`${ item.year }`}</p>
                                </div>

                                <div className="d-flex justify-content-between align-items-center mt-3 mb-2">
                                    <p>Total</p>
                                    <h5 className="mt-2 mb-3 fw-bold">Rp {new Intl.NumberFormat('de-DE').format(parseInt(item.price))}</h5>
                                </div>

                                {GreenButton("Lanjutkan Pembayaran")}
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Footer />

            </Container>
        )
    }

export default CarDetails;
