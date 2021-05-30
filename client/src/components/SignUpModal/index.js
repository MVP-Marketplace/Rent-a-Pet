import React, { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { Input, Space, Tooltip } from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  UserOutlined,
} from "@ant-design/icons";
import API from "./../../utils/API";
import firebaseApp from "./../../firebase/firebase.utils";
import firebase from "firebase/app";
import Login from "./../LoginModal";
import Google from "./../../assets/img/google.svg";
import "./style.css";

const provider = new firebase.auth.GoogleAuthProvider();

export default function SignUpModal() {
  const [show, setShow] = useState(false);
  const [emailAddress, setEmailAddress] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function googleSignin() {
    await firebaseApp
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        let token = result.credential.accessToken;
        let user = result.user;
        console.log(user);

        API.createUser({
          email: user.email,
          display: user.displayName,
          uid: user.uid,
          username: user.displayName.split(" ").join(""),
          type: "Google",
        })
          .then((res) => console.log(res))
          .catch((err) => console.log(err));

        console.log(token);
      })
      .catch(function (error) {
        let errorCode = error.code;
        let errorMessage = error.message;

        console.log(errorCode);
        console.log(errorMessage);
      });
  }

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(emailAddress, username, password);
    API.createUser({
      email: emailAddress,
      password: password,
      username: username,
      type: "Email",
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
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
          <button
            className="default-btn btn"
            style={{ width: "100%" }}
            onClick={googleSignin}
          >
            <img
              src={Google}
              alt="Google Logo"
              style={{ paddingRight: "20px" }}
            />
            Sign up with Google
          </button>
          <span className="seperator">OR</span>
          <Form onSubmit={handleSignUp} style={{ textAlign: "center" }}>
            <Input
              className="input-border"
              type="email"
              placeholder="Email"
              onChange={({ target }) => setEmailAddress(target.value)}
              value={emailAddress}
            />

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

            <button
              className="default-btn btn"
              type="submit"
              style={{ width: "150px" }}
              href="/setting"
            >
              SIGN UP
            </button>
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
