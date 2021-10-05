import React from 'react';
import { Card,Col,Button } from 'react-bootstrap';
import './CardDetails.css'

const CardDetails = (props) => {

    const {courseTitle,image,price,instructor}=props.cd;
    return (
        <div>
            
            <Col>
                <Card className="card-size ">
                    <Card.Img variant="top" src={image} />
                    <Card.Body className="card-body ">
                    <Card.Title>{courseTitle}</Card.Title>
                    <Card.Text>
                                <strong>Instructor:</strong> {instructor}
                    </Card.Text>
                    <Card.Text>
                                <strong>Price:</strong> {price}
                    </Card.Text>
                        <Button className="btn btn-3">Enroll Now</Button>
                    </Card.Body>
                    
                </Card>
            </Col>
        
        </div>
);
}

export default CardDetails;