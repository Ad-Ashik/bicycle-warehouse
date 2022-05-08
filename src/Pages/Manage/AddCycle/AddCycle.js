import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './AddCycle.css';

const AddCycle = () => {
    const addCycle = e => {
        e.preventDefault();
    }
    return (
        <div className='w-50 mx-auto border p-4 rounded-3 my-5'>
            <h4 className='text-color text-center mb-2'>Add New Cycle</h4>
            <Form onSubmit={addCycle}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" name="email" placeholder="Email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="name" name="name" placeholder="name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPrice">
                    <Form.Control type="text" name="price" placeholder="Price" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicQuantity">
                    <Form.Control type="text" name="quantity" placeholder="Quantity" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicSupplierName">
                    <Form.Control type="text" name="supplierName" placeholder="SupplierName" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicTextarea">
                    <textarea className='form-control' name="description" cols="50" rows="2" placeholder='Description' required></textarea>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicImg">
                    <Form.Control type="text" name="img" placeholder="Photo URL" required />
                </Form.Group>
                <Button variant="" type="submit" className=' mx-auto text-center d-block btn btn-outline-success responsive-button'>
                    Add cycle
                </Button>
            </Form>
        </div>
    );
};

export default AddCycle;