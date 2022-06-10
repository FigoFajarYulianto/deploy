import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Link, useParams } from "react-router-dom";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import keyIcon from '../../assets/icons/Users_Icon.png';
import settingIcon from '../../assets/icons/Settings_Icon.png';
import calendarIcon from '../../assets/icons/tanggal.png';
import SearchingForm from "../../components/Pencarian/komponenPencarian";
import { useDispatch, useSelector } from "react-redux";
import { getCars } from "../../redux/actions/postAction";
import { saveCarById } from "../../redux/actions/postByIDAction";
import GreenButton from "../../components/Tombol/kumpulanTombol";


function SearchingCars() {
    const { date, pickUpTime } = useParams();

    const dispatch = useDispatch();
    const { isLoading: loadingCars, data: dataCars } = useSelector((state) => state.cars);

    React.useEffect(() => {
        dispatch(getCars());
    }, []);

    return (
            <Container fluid>
                <Header/>

                <Container>
                    <div className="box-pencarian-without-header-text mx-5">

                        <h5 className="mb-3 fw-bold">Pencarianmu</h5>
                        {SearchingForm(true, false)}

                    </div>

                    <Row className="mx-4">
                        {loadingCars? (<div className="text-center my-5">Loading...</div>)
                        :
                        (dataCars.map((item) => {
                            let showCard = true
                            let bookingDate = new Date(date + " " + pickUpTime).toISOString()

                            if (item.status === true) {
                                if(bookingDate >= item.start_rent_at && bookingDate <= item.finish_rent_at) {
                                    showCard = false
                                }
                            }

                            if (showCard === true) {
                                return(
                                    <Col sm='12' md='6' lg='6' xl='4' className="mt-5 p-0 d-flex justify-content-center" key={item.id}>
                                        <div className="card-list">
                                            <div className="car-img">
                                                <img src={item.image} className="car-size" alt="car"/>
                                            </div>
                                            <p className="m-0 fw-bold">{item.name}</p>
                                            <h5 className="mt-2 mb-3 fw-bold">Rp {new Intl.NumberFormat('de-DE').format(parseInt(item.price))} / hari</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            <p><img src={keyIcon} className="pe-2" alt=""/>{`${ item.capacity }`} orang</p>
                                            <p><img src={settingIcon} className="pe-2" alt=""/>{`${ item.transmission }`}</p>
                                            <p className="mb-4"><img src={calendarIcon} className="pe-2" alt=""/>Tahun {`${ item.year }`}</p>

                                            <Link to={`/car/${item.id}`} onClick={() => {
                                                dispatch(saveCarById(item))
                                                }}>
                                                {GreenButton("Pilih Mobil")}
                                            </Link>
                                        </div>
                                    </Col>
                                )
                            }
                        }))}
                    </Row>
                </Container>

                <Footer />

            </Container>
        )
    }

export default SearchingCars;
