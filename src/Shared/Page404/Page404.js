import React from 'react';
import { Link } from 'react-router-dom';
import './Page404.css';

const Page404 = () => {
    return (
        <div class="card">
            <img src="https://i.ibb.co/FBjhWcN/error.webp" class="card-img" alt="..." />
            <div class="card-img-overlay text-center page404-text">
                <h5 class="card-title text-danger">Opps, Page Not Found</h5>
                <p class="card-text bg-dark text-white rounded py-1">Please try one of the following page.</p>
                <Link to="/">
                    <button className='btn btn-success'>Return home</button>
                </Link>
            </div>
        </div>
    );
};

export default Page404;