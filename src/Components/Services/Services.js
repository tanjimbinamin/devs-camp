import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const Services = () => {
    const [cardDetails, setCardDetails]=useState([])

    useEffect(()=>{
        fetch('./HomeDataDetails.json')
        .then(res=>res.json())
        .then(data=>setCardDetails(data))
    },[])
    return (
        <div>
            <h1 className="text-center mt-4 mb-5">Our Services</h1>
            <Container>
                <Row  xs={1} md={3} className="g-5 m-1 p-1">
                    {
                        cardDetails.map(detail=><ServiceDetails detail={detail}></ServiceDetails>)
                    }
                </Row>
            </Container>
            
        </div>
    );
};

export default Services;