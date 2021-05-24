import React, { useState } from "react";
import { Form, Button, Row, Container, Col } from "react-bootstrap";
import { Input, Space, Tooltip } from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  UserOutlined,
} from "@ant-design/icons";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import "./style.css";

export default function AccountSetting() {
  const [show, setShow] = useState(false);
  const [emailAddress, setEmailAddress] = useState("");
  const [username, setUsername] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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

    console.log(
      emailAddress,
      username,
      oldPassword,
      newPassword,
      confirmPassword
    );
  };
  return (
    <>
      <Row>
        <span className="header-2">Account</span>
      </Row>
      <Row>
        <Form>
          <Form.Label>Username</Form.Label>
          <Input
            className="input-border"
            placeholder="Enter your username"
            prefix={<UserOutlined className="site-form-item-icon" />}
            onChange={({ target }) => setUsername(target.value)}
            value={username}
          />
          <Form.Label>Email</Form.Label>
          <Input
            className="input-border"
            type="email"
            placeholder="Email"
            onChange={({ target }) => setEmailAddress(target.value)}
            value={emailAddress}
          />
          <Form.Label>Change Password</Form.Label>
          <Input.Password
            className="input-border"
            placeholder="Old Password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            onChange={({ target }) => setOldPassword(target.value)}
            value={oldPassword}
          />
          <Input.Password
            className="input-border"
            placeholder="New Password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            onChange={({ target }) => setNewPassword(target.value)}
            value={newPassword}
          />
          <Input.Password
            className="input-border"
            placeholder="Confirm Password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            onChange={({ target }) => setConfirmPassword(target.value)}
            value={confirmPassword}
          />
        </Form>
      </Row>
      <Row>
        <Col style={{ textAlign: "end" }}>
          <button
            className="default-btn btn justify-content-end"
            type="submit"
            style={{ width: "150px" }}
            onClick={handleSignUp}
          >
            Save
          </button>
        </Col>
      </Row>
    </>
  );
}
