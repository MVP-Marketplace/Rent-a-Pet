import React from "react";
import { Modal } from "react-bootstrap";
import Paw from "./../../assets/img/paw.svg";
import "./style.css";

export default function Step3(props) {
  console.log(props);
  return (
    <div>
      <Modal.Header closeButton>
        <Modal.Title>
          <img src={Paw} alt="Animal paw" />
          <a className="btn" style={{ border: "2px solid red" }} href="/feed">
            Skip for now
          </a>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Suggestions for you to follow</p>
        <p>Add follow creatures</p>
        <a className="btn" style={{ border: "2px solid red" }} href="/feed">
          Done
        </a>
      </Modal.Body>
    </div>
  );
}
