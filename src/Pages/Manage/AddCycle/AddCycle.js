import React from 'react';
import { Button, Form } from 'react-bootstrap';

const AddCycle = () => {
    return (

        <div className='w-50 mx-auto border p-4 rounded-3 my-5'>
            <h4 className='text-color text-center mb-2'>Add New Cycle</h4>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="name" name="name" placeholder="name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPrice">
                    <Form.Control type="text" name="price" placeholder="Price" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicQuantity">
                    <Form.Control type="text" name="quantity" placeholder="Quantity" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicSupplierName">
                    <Form.Control type="text" name="supplierName" placeholder="SupplierName" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicImg">
                    <Form.Control type="text" name="img" placeholder="Photo URL" />
                </Form.Group>
                <Button variant="" type="submit" className='w-25 mx-auto text-center d-block btn btn-outline-success'>
                    Add cycle
                </Button>
            </Form>
        </div>
    );
};

export default AddCycle;