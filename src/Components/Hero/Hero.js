import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import './Hero.css'
import img1 from './img1.svg';
import img2 from './img2.svg';
import img3 from './img3.svg';
import img4 from './img4.svg';

const Hero = () => {
    return (

        <div className="bg-image">
            <Container>
            <Row >
                <Col xs={10} md={6} className="mt-5 hero1 pt-5"><h1 className="fonts pe-5 text-white "><strong>We Provide the Best Course to become</strong></h1>
                    <br/>
                    <h2 className="fonts"><span style={{color:"coral"}}>a successful developer</span></h2></Col>
                <Col xs={12} md={6} className="mt-5 pt-5" >
                    <Carousel className="bg" >
                        <Carousel.Item className="carousel-item">
                            <img
                                 className="d-block w-100"
                                    src={img1}
                                alt="First slide"
                            />
                            <Carousel.Caption><h5 className="text-black">React Developer</h5></Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className="carousel-item">
                            <img
                                className="d-block w-100"
                                src={img2}
                                alt="Second slide"
                            />

                                <Carousel.Caption>
                                                    <h5 className="text-black">App Developer</h5>
                                </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className="carousel-item">
                                <img
                                    className="d-block w-100"
                                    src={img3}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                                    <h5 className="text-black">Cyber Security Expert</h5>
                                </Carousel.Caption>
                           
                        </Carousel.Item>
                        <Carousel.Item className="carousel-item">
                                <img
                                    className="d-block w-100"
                                    src={img4}
                                    alt="Fourth slide"
                                />
                                <Carousel.Caption>
                                                    <h5 className="text-black">Machine Learning Engineer</h5>
                                </Carousel.Caption>
                           
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
            
        </Container>
        
        </div>
    );
};

export default Hero;