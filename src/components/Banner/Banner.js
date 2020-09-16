import React, { useState } from 'react';
import background from '../../resources/Image/Rectangle 1.png'
import Slider from '../Slider/Slider';
import './Banner.css'
import fakeData from '../../fakeData';

const Banner = () => {
    const destinationList = fakeData;
    const [places, setplaces] = useState(destinationList);

    return (
        <div>
            <img className="main-banner" src={background} alt=""/>
            {
                places.map(place => <Slider place={place}></Slider>)
            }
        </div>
    );
};

export default Banner;