import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import Paw from "./../../assets/img/paw.svg";
import "./style.css";

export default function SignUpModal() {
  const [show, setShow] = useState(false);
  const [emailAddress, setEmailAddress] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const changePasswordType = () => {
    if (type === "text") {
      setType("password");
    } else {
      setType("text");
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(emailAddress, username, password);
  };

  return (
    <>
      <button className="sign-up-btn" onClick={handleShow}>
        Sign Up with Email
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <img src={Paw} alt="Animal paw" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSignUp}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                onChange={({ target }) => setEmailAddress(target.value)}
                value={emailAddress}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Username"
                onChange={({ target }) => setUsername(target.value)}
                value={username}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>
                Password
                <button href="#" onClick={changePasswordType}>
                  {type === "password" ? (
                    <>
                      <BsFillEyeFill />
                      Show
                    </>
                  ) : (
                    <>
                      <BsFillEyeSlashFill />
                      Hide
                    </>
                  )}
                </button>
              </Form.Label>
              <Form.Control
                type={type}
                placeholder="Password"
                onChange={({ target }) => setPassword(target.value)}
                value={password}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Get Started
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
