import React from 'react';
import Advertise from './Advertise';
import Banner from './Banner';
import Review from './Review';
import Subscribe from './Subscribe';
import Summary from './Summary';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Summary></Summary>
            <Tools></Tools>
            <Advertise></Advertise>
            <Review></Review>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;