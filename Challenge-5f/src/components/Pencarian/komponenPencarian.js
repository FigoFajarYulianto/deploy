import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Button, Col, Row } from "reactstrap"


function SearchingForm(useButton, isDisabled) {
    const { driverType, date, pickUpTime, totalPassenger } = useParams()
    const navigate = useNavigate()
    const [ searchingCars, setSearchingCars] = React.useState({
        driverType: !driverType? "" : driverType,
        date: !date? "" : date,
        pickUpTime: !pickUpTime? "" : pickUpTime,
        totalPassenger: !totalPassenger? "" : totalPassenger
    })

    const redirectOnPageSearching = (driverType, date, pickUpTime, totalPassenger) => {
        if (!totalPassenger) {
            navigate(`/search-result/${driverType}/${date}/${pickUpTime}`)
        } else {
            navigate(`/search-result/${driverType}/${date}/${pickUpTime}/${totalPassenger}`)
        }
    }

    const buttonSubmit = () => {
        let bgColor = "#FFFFFF"
        let colorText = "#0D28A6"
        let borderBtn = "2px solid #0D28A6"
        if (!date) {
            bgColor = "#5CB85F"
            colorText = "#FFFFFF"
            borderBtn = "2px solid #5CB85F"
        }

        return(
            <Button style={{backgroundColor: bgColor, color: colorText, border: borderBtn}} className="w-75" onClick={() => {
                if (!searchingCars.driverType || !searchingCars.date || !searchingCars.pickUpTime) {
                    alert(`Isi Data Dengan Lengkap`)
                } else {
                    redirectOnPageSearching(searchingCars.driverType, searchingCars.date, searchingCars.pickUpTime, searchingCars.totalPassenger)
                }
                }}>{date? "Edit" : "Cari Mobil"}
            </Button>
        )
    }

    return (
        <Row className="align-items-end">
            <Col xs="lg" className="d-flex flex-column">
                <label htmlFor="">Tipe Driver</label>
                <select disabled={isDisabled} className="form-select form-select-md text-secondary" aria-label=".form-select-md example" onClick={(e) => {
                    setSearchingCars((prevState) => ({
                        ...prevState,
                        driverType: e.target.value
                    }))
                }} required>
                    <option value={searchingCars.driverType} selected disabled hidden>{`${!pickUpTime? "Pilih Tipe Driver" : searchingCars.driverType}`}</option>
                    <option value="Dengan Sopir">Dengan Sopir</option>
                    <option value="Tanpa Sopir (Lepas Kunci)">Tanpa Sopir (Lepas Kunci)</option>
                </select>
            </Col>
            <Col xs="lg" className="d-flex flex-column">
                <label htmlFor="">Tanggal</label>
                <input disabled={isDisabled} type="date" className="form-control text-secondary" value={searchingCars.date} onChange={(e) => {
                    setSearchingCars((prevState) => ({
                        ...prevState,
                        date: e.target.value
                    }))
                }} required/>
            </Col>
            <Col xs="lg" className="d-flex flex-column">
                <label htmlFor="">Waktu Jemput/Ambil</label>
                <select disabled={isDisabled} className="form-select form-select-md text-secondary" aria-label=".form-select-md example" onClick={(e) => {
                    setSearchingCars((prevState) => ({
                        ...prevState,
                        pickUpTime: e.target.value
                    }))
                }} required>
                    <option value={searchingCars.pickUpTime} selected disabled hidden>{`${!pickUpTime? "Pilih Waktu" : `${searchingCars.pickUpTime} WIB`}`}</option>
                    <option value="00:00">00.00 WIB</option>
                    <option value="01:00">01.00 WIB</option>
                    <option value="02:00">02.00 WIB</option>
                    <option value="03:00">03.00 WIB</option>
                    <option value="04:00">04.00 WIB</option>
                    <option value="05:00">05.00 WIB</option>
                    <option value="06:00">06.00 WIB</option>
                    <option value="07:00">07.00 WIB</option>
                    <option value="08:00">08.00 WIB</option>
                    <option value="09:00">09.00 WIB</option>
                    <option value="10:00">10.00 WIB</option>
                    <option value="11:00">11.00 WIB</option>
                    <option value="12:00">12.00 WIB</option>
                    <option value="13:00">13.00 WIB</option>
                    <option value="14:00">14.00 WIB</option>
                    <option value="15:00">15.00 WIB</option>
                    <option value="16:00">16.00 WIB</option>
                    <option value="17:00">17.00 WIB</option>
                    <option value="18:00">18.00 WIB</option>
                    <option value="19:00">19.00 WIB</option>
                    <option value="20:00">20.00 WIB</option>
                    <option value="21:00">21.00 WIB</option>
                    <option value="22:00">22.00 WIB</option>
                    <option value="23:00">23.00 WIB</option>
                </select>
            </Col>
            <Col xs="lg" className="d-flex flex-column">
                <label htmlFor="">Jumlah Penumpang (optional)</label>
                <input disabled={isDisabled} type="text" className="form-control text-secondary" placeholder="Jumlah Penumpang" value={searchingCars.totalPassenger} onChange={(e) => {
                        setSearchingCars((prevState) => ({
                            ...prevState,
                            totalPassenger: e.target.value
                        }))
                    }}/>
            </Col>
            {useButton? (
                <Col lg="2" className="d-flex flex-column justify-content-center align-items-center mt-4">
                    {buttonSubmit()}
                </Col>
            ) : ("")}
        </Row>
    )
}

export default SearchingForm;
