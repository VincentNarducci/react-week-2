import React, { useState } from "react";
import LogInForm from './loginform';
import {
    Card,
    Container,
    Row,
    Col
   } from "react-bootstrap";

 
const LogInBox = () => {

 
 return (
    <Container className='log-in-card'>
     <Row>
         <Col lg={4}>
        </Col>
         <Col lg={4}>
            <Card>
                <Card.Body><LogInForm /></Card.Body>
            </Card>
        </Col>
        <Col lg={4}>
        </Col>
    </Row>
    </Container>
 );
};
export default LogInBox;