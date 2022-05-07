import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='container py-5 text-center'>
            <p>Copyright © <span className='fw-bolder'>bicycle</span> {year} - All Rights Reserved.</p>
        </div>
    );
};

export default Footer;