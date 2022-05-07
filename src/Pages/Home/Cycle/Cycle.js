import React from 'react';
import { useParams } from 'react-router-dom';
import useSingleCycle from '../../../hooks/useSingleCycle';
import './Cycle.css';

const Cycle = () => {
    const { cycleId } = useParams();
    const [cycle] = useSingleCycle(cycleId);
    const { name, price, description, quantity, supplierName, img } = cycle;

    return (
        <>
            <div className='container text-center my-5'>
                <h2 className='text-color'>CycleId: {cycleId}</h2>
            </div>
            <div className="card mb-3 container single-cycle">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title py-3">Cycle Name: <span className='text-color'>{name}</span></h5>
                            <div className='fw-bold d-flex justify-content-between'>
                                <p className='btn btn-success'>Q: {quantity}</p>
                                <p>Pirce: ${price}</p>
                                <p>Supplier: {supplierName}</p>
                            </div>
                            <p className="card-text"><span className='fw-bold'>Description: </span>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

};

export default Cycle;