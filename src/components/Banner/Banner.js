import React from 'react';
import background from '../../resources/Image/Rectangle 1.png'
import Carousel from '../Carousel/Carousel';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <img className="main-banner" src={background} alt=""/>
            <Carousel></Carousel>
        </div>
    );
};

export default Banner;