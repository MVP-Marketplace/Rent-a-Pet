import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
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

    console.log(emailAddress, username, newPassword, confirmPassword);
  };
  return (
    <>
      <span>Account</span>
      <Form onSubmit={handleSignUp}>
        {" "}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            onChange={({ target }) => setUsername(target.value)}
            value={username}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            onChange={({ target }) => setEmailAddress(target.value)}
            value={emailAddress}
          />
        </Form.Group>
        <span>Change Password</span>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>
            <button className="btn" href="#" onClick={changePasswordType}>
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
            placeholder="Old Password"
            onChange={({ target }) => setOldPassword(target.value)}
            value={oldPassword}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>
            <button className="btn" href="#" onClick={changePasswordType}>
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
            placeholder="New Password"
            onChange={({ target }) => setNewPassword(target.value)}
            value={newPassword}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>
            <button className="btn" href="#" onClick={changePasswordType}>
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
            placeholder="Confirm Password"
            onChange={({ target }) => setConfirmPassword(target.value)}
            value={confirmPassword}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
    </>
  );
}
