import axios from 'axios';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loding from '../../../Shared/Loding/Loding';
import './AddCycle.css';

const AddCycle = () => {
    const [user, lodding] = useAuthState(auth);
    const navigate = useNavigate();


    const addCycle = e => {
        e.preventDefault();

        const addCycle = {
            name: e.target.name.value,
            price: e.target.price.value,
            description: e.target.description.value,
            quantity: e.target.quantity.value,
            supplierName: e.target.supplierName.value,
            img: e.target.img.value,
            email: user.email,
        }

        axios.post('https://frozen-taiga-96489.herokuapp.com/cycle', addCycle)
            .then(respons => {
                const { data } = respons;
                if (data.insertedId) {
                    toast.success('Your Cycle Added..', {
                        position: toast.POSITION.TOP_CENTER
                    });
                    e.target.reset();
                    navigate('/cycles')
                }
            })


    }
    return (
        <div className='w-50 mx-auto border p-4 rounded-3 my-5'>
            <h4 className='text-color text-center mb-2'>Add New Cycle</h4>
            <Form onSubmit={addCycle}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" value={user?.email} name="email" placeholder="Email" disabled />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="name" name="name" placeholder="name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicTextarea">
                    <textarea className='form-control' name="description" cols="50" rows="2" placeholder='Description' required></textarea>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPrice">
                    <Form.Control type="text" name="price" placeholder="Price" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicSupplierName">
                    <Form.Control type="text" name="supplierName" placeholder="SupplierName" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicQuantity">
                    <Form.Control type="text" name="quantity" placeholder="Quantity" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicImg">
                    <Form.Control type="text" name="img" placeholder="Photo URL" required />
                </Form.Group>
                {
                    lodding && <Loding></Loding>
                }
                <Button variant="" type="submit" className=' mx-auto text-center d-block btn btn-outline-success responsive-button'>
                    Add cycle
                </Button>
            </Form>
        </div>
    );
};

export default AddCycle;