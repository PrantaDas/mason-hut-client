import React from 'react';
import Banner from './Banner';
import Review from './Review';
import Summary from './Summary';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Summary></Summary>
            <Tools></Tools>
            <Review></Review>
        </div>
    );
};

export default Home;