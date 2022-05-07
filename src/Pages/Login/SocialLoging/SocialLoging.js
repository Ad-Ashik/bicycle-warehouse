import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loding from '../../../Shared/Loding/Loding';

const SocialLoging = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading] = useSignInWithGoogle(auth);

    if (user) {
        navigate('/');
    }

    return (
        <div className='mx-auto w-50 '>
            {
                loading && <Loding></Loding>
            }
            <div className="d-flex align-items-center">
                <div style={{ height: '1px' }} className='w-50 bg-secondary'></div>
                <p className='mt-2 mx-2'>or</p>
                <div style={{ height: '1px' }} className='w-50 bg-secondary'></div>
            </div>
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-outline-success w-100 p-2'>
                    <img style={{ width: '35px' }} src="https://accounts.scdn.co/sso/images/google-icon.1cdc8fce9609d07f0e9d8d0bc4b61f8f.svg" alt="" />
                    <span className='px-1'>Google Sing In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLoging;