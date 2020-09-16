import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Slider.css'

const Slider = (props) => {
    const {name, description, image, id} = props.place;

    return (
        <div className="main-slider">
            <Row>                
                <Col xs={12}>
                <Card style={{ width: '18rem', borderRadius: '20px', border: '3px solid yellow' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <button className="head-button">Book Now</button>
                </Card.Body>
                </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Slider;