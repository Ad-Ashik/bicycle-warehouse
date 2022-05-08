import { faRefresh, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useBicycle from '../../../hooks/useBicycle';
import './Bicycle.css';

const Bicycle = ({ cycle }) => {
    const [bicycles, setBicycles] = useBicycle();
    const { _id, name, price, description, quantity, supplierName, img } = cycle;
    const navigate = useNavigate();

    const updateCycle = id => {
        navigate(`/cycles/${id}`);
    }

    // deleteCycle
    const deleteCycle = id => {
        const removeCycle = window.confirm("you want to delete?");
        if (removeCycle === true) {
            toast.error('Permanently delete this product?', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        if (removeCycle) {
            const url = `https://frozen-taiga-96489.herokuapp.com/cycles/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .than(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = bicycles.filter(cycle => cycle._id !== id);
                    setBicycles(remaining);
                })
        }

    }

    return (

        <div className="col p-4">
            <div className="card h-100">
                <div className='p-3'>
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body p-3">
                        <h5 className="card-title text-center my-3">{name}</h5>
                        <p className="card-text cycle-descript">{description}</p>
                        <small className='d-flex justify-content-between'>
                            <span className='fw-bolder'>${price}.00</span>
                            <span className='text-end'><span className='fw-bolder'>Supplier:</span> {supplierName}</span>
                        </small>
                    </div>
                </div>
                <div className="d-flex border-top p-3 justify-content-between">
                    <button className='btn btn-outline-success'>Q: {quantity}</button>
                    <button onClick={() => updateCycle(_id)} className='btn btn-outline-success w-50' >
                        <FontAwesomeIcon icon={faRefresh}></FontAwesomeIcon> update
                    </button>
                    <butto className='btn btn-outline-danger' onClick={() => deleteCycle(_id)} >
                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                    </butto>
                </div>
            </div>
        </div>

    );
};

export default Bicycle;