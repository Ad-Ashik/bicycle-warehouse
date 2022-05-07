import { faCartPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useSingleCycle from '../../../hooks/useSingleCycle';
import './Cycle.css';

const Cycle = () => {
    const { cycleId } = useParams();
    const [cycle] = useSingleCycle(cycleId);
    const { name, price, description, quantity, supplierName, img } = cycle;

    return (
        <>
            <div className='container text-center'>
                <h2 className='text-color'>CycleId: {cycleId}</h2>
            </div>
            <div className="card mb-3 container single-cycle">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h3 className="card-title text-color">
                                Cycle Name: {name}
                            </h3>
                            <h4 className='text-secondary mb-4'>Pirce: <span className='fw-bold'>${price}.00</span></h4>
                            <div className='fw-bold d-md-flex justify-content-between align-items-center'>
                                <form className='d-flex align-items-center'>
                                    <Form.Group className="mb-3 d-flex align-items-center" controlId="formBasicQuantity">
                                        <Form.Label className='m-0' >QTY</Form.Label>
                                        <Form.Control className='qut-input rounded-pill' type="number" name='quantity' value="2" />
                                        <button className='btn btn-outline-success rounded-pill'>
                                            Add QTY <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
                                        </button>
                                    </Form.Group>
                                </form>
                                <p className='supplier'>Supplier: {supplierName}</p>
                            </div>
                            <p className="card-text"><span className='fw-bold'>Description: </span>{description}</p>

                            <div className='text-center mt-4'>
                                <button className='btn btn-outline-success'>Q: {quantity}</button>
                                <button className='btn btn-outline-danger mx-3'>
                                    Quantity <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                </button>
                                <button className='btn btn-danger'>
                                    Product <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

};

export default Cycle;