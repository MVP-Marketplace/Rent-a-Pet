import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Input, Space, Tooltip } from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  InfoCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
// import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
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
              placeholder="Enter your username"
              prefix={<UserOutlined className="site-form-item-icon" />}
              onChange={({ target }) => setUsername(target.value)}
              value={username}
            />

            <Input.Password
              placeholder="Password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
              onChange={({ target }) => setPassword(target.value)}
              value={password}
            />

            <button className="default-btn btn" type="submit">
              Get Started
            </button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
