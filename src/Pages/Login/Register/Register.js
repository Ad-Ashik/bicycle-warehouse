import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loding from '../../../Shared/Loding/Loding';
import SocialLoging from '../SocialLoging/SocialLoging';
import { toast } from 'react-toastify';


const Register = () => {
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    if (user) {
        navigate('/')
    }

    const submitSingUp = async e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(name)

        if (email) {
            await createUserWithEmailAndPassword(email, password);
            toast.success('please check your email', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        else {
            toast.error('please entar your email', {
                position: toast.POSITION.TOP_RIGHT
            });
        }

    }

    return (
        <div className='w-50 mx-auto border p-4 rounded-3 my-5'>
            {
                loading && <Loding></Loding>
            }
            <h2 className='text-center text-color'>Please Sing Up</h2>
            <Form onSubmit={submitSingUp}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3 d-flex" controlId="formBasicCheck">
                    {/* <Form.Check onClick={() => setAgree(!agree)} className='mx-2' name="terms" /> */}
                    {/* <Form.Label className={agree ? 'text-primary' : 'text-danger'}>Accept Genius Car <Link to="">Terms & Conditions</Link></Form.Label> */}
                </Form.Group>
                <Button className='w-25 btn' variant="outline-success" type="submit">
                    SingUp
                </Button>

                <p className='text-center'>Already have an account? <Link to="/login" className='text-success text-decoration-underline'>
                    Please Login
                </Link>
                </p>
                <SocialLoging></SocialLoging>
            </Form>
        </div>
    );
};

export default Register;