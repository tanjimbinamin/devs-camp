import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img1 from './img1.svg'
import img2 from './img2.svg'

const About = () => {
    
    return (
        <div>
            <h1 className="text-center mt-5 pt-2 "><strong>What will you gain by Joining our Bootcamp</strong></h1>
            <br />
            <h1  style={{borderBottom:"7px dotted rgb(24, 185, 185)",width:"7%",margin:"auto",marginBottom:"7rem"}}/>
            <Container>
                <Row className="mb-5 shadow" style={{borderRadius:"13px"}}>
                    <Col className="mx-5 px-5 pt-5"><img style={{width:"280px"}} src={img1} alt="" /></Col>
                    <Col className="ms-5 ps-5 mt-5 mb-5" >
                        <h1>Learn to code, on your schedule</h1>
                        <br />
                        <h4>Our comprehensive courses have 600+ hours (and counting) of lessons available 24/7. You’ll learn everything from beginner programming fundamentals to the most advanced concepts.</h4>
                    </Col>
                </Row>
                <Row className="mb-5 mt-5 pt-5 shadow" style={{borderRadius:"13px"}}>
                    <Col className="mx-1 ">
                        <h1>Build your portfolio</h1>
                        <br />
                        <h4>Unlike most online courses and free tutorials, you’ll be using everything you learn to build complex, professional, real-world projects and your own professional portfolio website.</h4>
                    </Col>
                    <Col className="ms-5 ps-5 mb-5 "><img className="ms-5 " style={{width:"450px"}} src={img2} alt="" /></Col>
                </Row>
                
            </Container>
        </div>
    );
};

export default About;