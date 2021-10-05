import React, { useState,useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import CardDetails from '../CardDetails/CardDetails';



const Cards = () => {

    const [details, setDetails]=useState([])

    useEffect(()=>{
        fetch('./HomeData.json')
        .then(res=>res.json())
        .then(data=>setDetails(data))
    },[])

    return (

        <div>
            <div className=" mb-3">
                <h1 style={{borderBottom:"7px dotted black",width:"10%",margin:"auto",marginTop:"100px"}}></h1>
            </div>
            <h1 className="text-center  mt-5 pt-3 pb-5">Our Courses</h1>
            <Container>
                    <Row xs={1} md={2} className="g-5">
                        {
                            
                            details.map(cd=><CardDetails cd={cd}></CardDetails>)
                        }
                    </Row>
            </Container>
        </div>
    );
};

export default Cards;