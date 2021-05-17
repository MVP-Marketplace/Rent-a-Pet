import React, { useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import "./style.css";

export default function CardDetails() {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };
  return (
    <>
      <Container>
        <div>Card Details</div>
        <Form onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First and Last Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group controlId="formGridAddress1">
              <Form.Label>Street</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group controlId="formGridCountry">
              <Form.Label>Country</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group controlId="formGridDate">
              <Form.Label>Card Details</Form.Label>
              <Form.Control placeholder="MM/DD/YYYY" />
            </Form.Group>
          </Form.Row>

          <Row>
            <Col md={6}>
              <Form.Group controlId="formGridCardNum">
                <Form.Label>Credit Card Number</Form.Label>
                <Form.Control placeholder="**** **** **** ****" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formGridExpDate">
                <Form.Label>Experation Date</Form.Label>
                <Form.Control placeholder="MM/YY" />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId="formGridCVC">
                <Form.Label>CVC</Form.Label>
                <Form.Control placeholder="***" />
              </Form.Group>
            </Col>
          </Row>

          <Row>Order Details</Row>

          <Button variant="primary" type="submit">
            Checkout
          </Button>
        </Form>
      </Container>
    </>
  );
}
