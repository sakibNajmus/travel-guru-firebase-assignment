import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Carousel.css'

const Carousel = () => {
    return (
        <div className="carousel-content">
            <Row>
                <Col xs={6} md={4}>
                xs=12 md=8
                </Col>
                <Col xs={12} md={8}>
                    
                </Col>
            </Row>
        </div>
    );
};

export default Carousel;