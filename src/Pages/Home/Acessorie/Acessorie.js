import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Acessorie = ({ acessorie }) => {
    const { img, pirce, name } = acessorie;
    return (
        <div className="col p-4">
            <div className="card h-100">
                <div className='p-3'>
                    <img src={img} className="card-img-top" alt="..." />
                    <div className='d-flex align-items-center'>
                        <div className="card-body p-3">
                            <h5 className="card-title">{name}</h5>
                            <span className='fw-bolder'>$ {pirce}.00</span>
                        </div>
                        <div>
                            <button className='btn btn-outline-success'><FontAwesomeIcon icon={faCartArrowDown} /> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Acessorie;