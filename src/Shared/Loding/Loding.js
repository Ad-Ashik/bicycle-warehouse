import React from 'react';

const Loding = () => {
    return (
        <div className="text-center">
            <div className="spinner-border text-success" role="status">
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loding;