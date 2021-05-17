import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import "./style.css";

export default function BankingDetails() {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };
  return (
    <>
      <div>Banking Details</div>
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
          <Form.Group as={Col} controlId="formGridCountry">
            <Form.Label>Country</Form.Label>
            <Form.Control />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group controlId="formGridDate">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control placeholder="MM/DD/YYYY" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group controlId="formGridBankName">
            <Form.Label>Banking Name</Form.Label>
            <Form.Control placeholder="Bank/Institution Name" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group controlId="formGridRoutingNumber">
            <Form.Label>Routing Number</Form.Label>
            <Form.Control placeholder="Routing Number" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group controlId="formGridAccountNumber">
            <Form.Label>Account Number</Form.Label>
            <Form.Control placeholder="Account Number" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group controlId="formGridConfirmAccountNumber">
            <Form.Label>Confirm Account Number</Form.Label>
            <Form.Control placeholder="Confirm Account Number" />
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
