import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loding from '../../../Shared/Loding/Loding';
import SocialLoging from '../SocialLoging/SocialLoging';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const from = location.state?.from?.pathname || "/";

    let checkError;
    if (error) {
        checkError = <p className='text-danger text-center'>Please Check: {error?.message} </p>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const loginSubmited = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInWithEmailAndPassword(email, password);
    }



    return (
        <div className='w-50 mx-auto border p-4 rounded-3 my-5'>
            {
                loading && <Loding></Loding>
            }
            <h2 className='text-center text-color'>Please Login</h2>
            <Form onSubmit={loginSubmited}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                {checkError}
                <p>Forget your password? <Link to="" className='text-success text-decoration-underline'>
                    Reset Password
                </Link>
                </p>
                <Button className='w-25 btn' variant="outline-success" type="submit">
                    Login
                </Button>
                <p className='text-center'>New to Bicycel? <Link to="/sing-up" className='text-success text-decoration-underline' >
                    Please Sing Up
                </Link>
                </p>
                <SocialLoging></SocialLoging>
            </Form>
        </div>
    );
};

export default Login;