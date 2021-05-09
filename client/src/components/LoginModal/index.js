import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import Paw from "./../../assets/img/paw.svg";
import "./style.css";

export default function SignUpModal(props) {
  // console.log(props.position);
  const [show, setShow] = useState(false);
  const [login, setLogin] = useState("");

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
    console.log(login, password);
  };

  return (
    <>
      {props.position === "nav" ? (
        <button className="loginBtn" onClick={handleShow}>
          Log in
        </button>
      ) : (
        <>
          Already have an account?{" "}
          <a href="#" onClick={handleShow}>
            Log in
          </a>
        </>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <img src={Paw} alt="Animal paw" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSignUp}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email or Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Email"
                onChange={({ target }) => setLogin(target.value)}
                value={login}
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
              Log In
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
