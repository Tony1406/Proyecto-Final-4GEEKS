import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Image, ModalDialog } from "react-bootstrap";
import ModalHeader from "react-bootstrap";
import ModalFooter from "react-bootstrap";
import ModalBody from "react-bootstrap";
import ModalTitle from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const GaleriaTours = () => {
	const {id} = useParams()
	const [show, setShow] = useState(false)
	const [item, setItem] = useState({})
	const {actions, store} = useContext(Context)

	const handleShow = (item) => {
		setShow(true)
		setItem(item)
	}
	const handleClose = () => setShow(false)
	const handleGuardar = (item) => {
		
	}

	useEffect(() => {
		actions.getRutasPorCiudad(id)
	}, [])
	return (
		<div className="bg-black">
			<p className="RUTAS menu text-light">RUTAS DISPONIBLES</p>

			{/* <div className="d-flex justify-content-end px-5 mx-5">
				<p className="ordenar bg-light">
					<i class="fa-solid fa-list"></i>
					ORDENAR
				</p>
			</div> */}

			<div className="card-group row menu mx-auto py-5">
				{store.tours.map((item, id) => (
					<div key={id} className="col-4 d-flex RUTA">
						<div className="card bg-black" onClick={() => handleShow(item)} >
							<img src={item.imagen} className="card-img-top border border-white" alt={item.nombre_de_ruta} />
							<div className="card-body">
								<h4 className="card-title text-center text-light">{item.nombre_de_ruta}</h4>
								<p className="card-text text-light pt-4">Distancia: {item.distancia} </p>
								<p className="card-text text-light">Tiempo: {item.tiempo_de_recorrido}</p>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* MODAL */}

			<Modal show={show} onHide={handleClose} className="row">
				<Modal.Header>
					<Modal.Title >{item.nombre_de_ruta}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Row>
						<Col>
							<p>{item.descripcion}</p>
						</Col>
						<Col className="d-flex justify-content-center">
							<div>
								<div className="bg-white carrusel">
									<Image src={item.imagen} alt={item.nombre_de_ruta} width={"100%"} height={"100%"} />
								</div>
								<div className="iconos d-flex align-items-center justify-content-center">
									<svg onClick={handleGuardar()} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-bookmark-fill" viewBox="0 0 16 16">
										<path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2"/>
									</svg>
									{/* <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-geo-fill" viewBox="0 0 16 16">
										<path fillRule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.3 1.3 0 0 0-.37.265.3.3 0 0 0-.057.09V14l.002.008.016.033a.6.6 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.6.6 0 0 0 .146-.15l.015-.033L12 14v-.004a.3.3 0 0 0-.057-.09 1.3 1.3 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465s-2.462-.172-3.34-.465c-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411"/>
									</svg> */}
								</div>
							</div>
						</Col>
					</Row>
				</Modal.Body>
				<Modal.Footer className="d-flex justify-content-center">
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};
