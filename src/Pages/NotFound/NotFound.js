import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../assets/images/notfound.svg'

const NotFound = () => {
    return (
        <div className='max-w-screen'>
            <div className='justify-center'>
                <div>
                    <img className='max-h-[60vh] max-w-6xl mx-auto' src={notfound} alt="" />
                </div>
                <div>
                    <h4 className=''>Sorry the content are you looking for is not found...</h4>
                </div>
                <div className='py-3'>
                    <Link className='btn btn-large' to='/'>Go Back to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;