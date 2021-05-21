import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import SignUpModal from "./../SignUpModal";
import LoginModal from "./../LoginModal";
import MultiStepModal from "./../MultiStepModal";
import Logo from "./../../assets/img/Logo.svg";
import "./style.css";

export default function SignUp() {
  return (
    <div className="sign-up-component">
      <Row className="justify-content-md-center">
        <p className="header-2">JOIN CRITTER TODAY!</p>

        <SignUpModal />

        <MultiStepModal />

        <LoginModal position="signUp" />
      </Row>
    </div>
  );
}
