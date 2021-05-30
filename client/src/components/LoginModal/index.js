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
import Google from "./../../assets/img/google.svg";
import "./style.css";

const provider = new firebase.auth.GoogleAuthProvider();

export default function SignUpModal(props) {
  // console.log(props.position);

  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");

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
        // API.createUser({
        //   email: user.email,
        //   display: user.displayName,
        //   uid: user.uid,
        //   username: user.displayName.split(" ").join(""),
        //   type: "Google",
        // })
        //   .then((res) => console.log(res))
        //   .catch((err) => console.log(err));

        console.log(token);
      })
      .catch(function (error) {
        let errorCode = error.code;
        let errorMessage = error.message;

        console.log(errorCode);
        console.log(errorMessage);
      });
  }

  // const changePasswordType = () => {
  //   if (type === "text") {
  //     setType("password");
  //   } else {
  //     setType("text");
  //   }
  // };

  async function handleSignUp(e) {
    e.preventDefault();
    try {
      await firebaseApp
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(({ user }) => {
          return user.getIdToken().then((idToken) => {
            console.log("User Token", idToken);
            // this token needs to be stored in state so it can be passed to any API calls in the http header.
            // Authentication: 'Bearer'+tokenValueHere
          });
        });

      // history.push("/");
    } catch (error) {
      alert(error);
    }
  }

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
            Log In with Google
          </button>
          <span className="seperator">OR</span>
          <Form onSubmit={handleSignUp} style={{ textAlign: "center" }}>
            <Input
              className="input-border"
              type="text"
              placeholder="Email"
              onChange={({ target }) => setEmail(target.value)}
              value={email}
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
              style={{ width: "150px", marginBottom: "10px" }}
            >
              LOG IN
            </button>
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
