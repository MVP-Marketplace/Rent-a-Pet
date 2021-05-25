import React, { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { Input, Space, Tooltip } from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  UserOutlined,
} from "@ant-design/icons";
import Login from "./../LoginModal";
import Google from "./../../assets/img/google.svg";
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
        <Modal.Body>
          <Row>
            <div className="header-1" style={{ textAlign: "center" }}>
              SIGN UP
            </div>
          </Row>
          <button className="default-btn btn" style={{ width: "100%" }}>
            <img
              src={Google}
              alt="Google Logo"
              style={{ paddingRight: "20px" }}
            />
            Sign up with Google
          </button>
          <span className="seperator">OR</span>
          <Form onSubmit={handleSignUp} style={{ textAlign: "center" }}>
            {/* <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                onChange={({ target }) => setEmailAddress(target.value)}
                value={emailAddress}
              />
            </Form.Group> */}
            <Input
              className="input-border"
              type="email"
              placeholder="Email"
              onChange={({ target }) => setEmailAddress(target.value)}
              value={emailAddress}
            />
            {/* <Form.Group controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Username"
                onChange={({ target }) => setUsername(target.value)}
                value={username}
              />
            </Form.Group> */}
            <Input
              className="input-border"
              placeholder="Enter your username"
              prefix={<UserOutlined className="site-form-item-icon" />}
              onChange={({ target }) => setUsername(target.value)}
              value={username}
            />

            <Input.Password
              className="input-border"
              placeholder="Password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
              onChange={({ target }) => setPassword(target.value)}
              value={password}
            />

            <a
              className="default-btn btn"
              type="submit"
              style={{ width: "150px" }}
              href="/setting"
            >
              SIGN UP
            </a>
          </Form>
          <div style={{ textAlign: "center" }}>
            <p>
              Already have an account? <a href="#">Log In</a>
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
