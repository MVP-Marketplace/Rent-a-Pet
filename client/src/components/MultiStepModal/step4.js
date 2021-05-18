import React from "react";
import { Modal, Form } from "react-bootstrap";
import Paw from "./../../assets/img/paw.svg";
import "./style.css";

export default function Step4(props) {
  console.log(props);
  return (
    <div>
      <Modal.Header closeButton>
        <Modal.Title>
          <img src={Paw} alt="Animal paw" />
          <button
            className="btn"
            style={{ border: "2px solid red" }}
            onClick={() => props.next()}
          >
            Skip for now
          </button>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>About your Animal</p>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Type of Animal</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Bio</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>

        <button
          className="btn"
          style={{ border: "2px solid red" }}
          onClick={() => props.next()}
        >
          Done
        </button>
      </Modal.Body>
    </div>
  );
}
