import React, { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { Input, Space, Tooltip } from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  UserOutlined,
} from "@ant-design/icons";
import Google from "./../../assets/img/google.svg";
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
          <p>
            Already have an account?{" "}
            <a href="#" onClick={handleShow}>
              Log in
            </a>
          </p>
        </>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Row>
            <div className="header-1" style={{ textAlign: "center" }}>
              LOG IN
            </div>
          </Row>
          <button className="default-btn btn" style={{ width: "100%" }}>
            <img
              src={Google}
              alt="Google Logo"
              style={{ paddingRight: "20px" }}
            />
            Log In with Google
          </button>
          <span className="seperator">OR</span>
          <Form onSubmit={handleSignUp} style={{ textAlign: "center" }}>
            <Input
              className="input-border"
              type="text"
              placeholder="Email"
              onChange={({ target }) => setLogin(target.value)}
              value={login}
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
              href="/feed"
              style={{ width: "150px", marginBottom: "10px" }}
            >
              LOG IN
            </a>
          </Form>
          <div style={{ textAlign: "center" }}>
            <p>
              Don't have an account? <a href="#">Sign up</a>
            </p>
            <p>
              Forgot your password? <a href="#">Recover password</a>
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
