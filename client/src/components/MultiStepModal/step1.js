import React from "react";
import { Modal } from "react-bootstrap";
import Paw from "./../../assets/img/paw.svg";
import "./style.css";

export default function Step1(props) {
  console.log(props);
  return (
    <div>
      <Modal.Header closeButton>
        <Modal.Title >
          <img src={Paw} alt="Animal paw" />{" "}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>What are you looking to do first? </p>
        <p>
          Remember only Animals can post pictures! But both people and animals
          can follow other friends!
        </p>
        <p>Animal Owners Only!</p>
        <p>
          Remember only Animals can post pictures! But both people and animals
          can follow other friends!
        </p>
        <button
          className="btn"
          style={{ border: "2px solid red" }}
          onClick={() => props.jump(2)}
        >
          Start Posting
        </button>
        <p>Anyone can make an account!</p>
        <p>
          Remember only Animals can post pictures! But both people and animals
          can follow other friends!
        </p>
        <button
          className="btn"
          style={{ border: "2px solid red" }}
          onClick={() => props.jump(4)}
        >
          Start Browsing
        </button>
        <button
          className="btn"
          style={{ border: "2px solid red" }}
          onClick={() => props.jump(5)}
        >
          Jump to 5
        </button>
      </Modal.Body>
    </div>
  );
}
