import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import cover from "./../../assets/img/coverImage.png";
import edit from "./../../assets/img/editBtn.svg";
import profile from "./../../assets/img/profilePic.png";
import "./style.css";

export default function ProfileSetting() {
  return (
    <>
      <Row>My Profile</Row>
      <Row style={{ backgroundImage: `url(${cover})`, height: "300px" }}>
        <Col style={{ textAlign: "right" }}>
          <button className="btn">
            <img src={edit} alt="Edit Button" />
          </button>
        </Col>
      </Row>
      <Row style={{ marginTop: "-100px" }}>
        <Col>
          <img
            src={profile}
            alt="Profile Pic"
            style={{ borderRadius: "50%" }}
          />
          <button className="btn">
            <img src={edit} alt="Edit Button" />
          </button>
        </Col>
      </Row>
      <Row>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Display Name</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>About</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Website</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Save
          </Button>
        </Form>
      </Row>
    </>
  );
}
