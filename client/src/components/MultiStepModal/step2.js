import React from "react";
import { Modal } from "react-bootstrap";
import Paw from "./../../assets/img/paw.svg";
import "./style.css";

export default function Step2(props) {
  console.log(props);
  return (
    <div>
      <Modal.Header closeButton>
        <Modal.Title>
          <img src={Paw} alt="Animal paw" />
          <button
            className="btn"
            style={{ border: "2px solid red" }}
            onClick={() => props.next()}
          >
            Skip for now
          </button>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>What type of animals are you interested in?</p>
        <p>
          Select some desciptions below in order to help personalize your feed.
        </p>
        <p>Descriptions</p>
        <p>Add Buttons</p>

        <p>Animals</p>
        <p>Add Buttons</p>
        <button
          className="btn"
          style={{ border: "2px solid red" }}
          onClick={() => props.next()}
        >
          Done
        </button>
      </Modal.Body>
    </div>
  );
}
