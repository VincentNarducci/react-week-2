import React, { useState } from "react";
import {
    Form,
    Button
   } from "react-bootstrap";

 
const LogInForm = () => {

 
 return (
     <div className="col p-4">
         <h3 id='header'>Log In</h3>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label><i className="fa fa-user"></i>  Username</Form.Label>
      <Form.Control type="text" placeholder="Username" />
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label><i className="fa fa-lock"></i>  Password</Form.Label>
      <Form.Control type="password" placeholder="•••••••••••••••" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  </div>
 );
};
export default LogInForm;