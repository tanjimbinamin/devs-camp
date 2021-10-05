
import React from 'react';
import { Card, Col,Button } from 'react-bootstrap';
import './ServiceDetails.css'

const ServiceDetails = (props) => {
    const {courseTitle, price, image, instructor}=props.detail;
    return (
        
        <Col>
                <Card>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                    <Card.Title>{courseTitle}</Card.Title>
                    <Card.Text>
                        <strong>Instructor:</strong> {instructor}
                    </Card.Text>
                    <Card.Text>
                        <strong>Price:</strong> ${price}
                    </Card.Text>
                         <Button className="btn btn-1"> Enroll Now</Button>
                    </Card.Body>
                </Card>
        </Col>
    );
};

export default ServiceDetails;