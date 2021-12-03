import React, { useState } from "react";
import {
    Form,
    FloatingLabel,
    Button
   } from "react-bootstrap";

   const ReviewForm = () => {

    return (
        
    <div class="review-form">
        <h3>Submit a Review</h3>
        <Form>
        <Form.Group className="mb-3" controlId="username">
    <Form.Label>Username</Form.Label>
    <Form.Control type="text" placeholder="username" />
  </Form.Group>
        <FloatingLabel controlId="reviewtextarea" label="Review">
    <Form.Control
      as="textarea"
      placeholder="Leave a comment here"
      style={{ height: '100px' }}
    />
  </FloatingLabel>
  <br />
  <Button variant="primary" type="submit">
    Submit
  </Button>
  </Form>

        
    </div>
  
    );
   };

export default ReviewForm;