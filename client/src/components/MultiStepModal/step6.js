import React from "react";
import { Modal } from "react-bootstrap";
import Paw from "./../../assets/img/paw.svg";
import "./style.css";

export default function Step6(props) {
  console.log(props);
  return (
    <div>
      <Modal.Header closeButton>
        <Modal.Title>
          <img src={Paw} alt="Animal paw" />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Do you want to receive donations or sponsorships for your animal?</p>
        <p>If so, we will need to setup your banking information.</p>

        <a
          className="btn"
          style={{ border: "2px solid red" }}
          href="/statements"
        >
          Receive Donations
        </a>
        <p>Do you just want to post to raise awareness or for fun? </p>
        <p>
          We will not need any additional information, but you will not be able
          to collect contributions or donations.
        </p>
        <a className="btn" style={{ border: "2px solid red" }} href="/profile">
          Free Posts Only
        </a>
      </Modal.Body>
    </div>
  );
}
