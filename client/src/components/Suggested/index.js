import React from "react";
import { Row, Col } from "react-bootstrap";
import cat from "./../../assets/img/cat.png";
import follow from "./../../assets/img/followBtn.svg";
import "./style.css";

export default function Suggested() {
  const username = "username";
  return (
    <>
      <Row>Suggested for you</Row>
      <Row>
        <Col>
          <img
            src={cat}
            alt="Grumpy Cat"
            style={{ borderRadius: "50%", padding: "10px" }}
          />
        </Col>
        <Col>
          <span>{username}</span>
        </Col>
        <Col style={{ textAlign: "right" }}>
          <button className="btn">
            <img src={follow} alt="Follow Button" />
          </button>
        </Col>
      </Row>
      <Row>
        <Col>
          <img
            src={cat}
            alt="Grumpy Cat"
            style={{ borderRadius: "50%", padding: "10px" }}
          />
        </Col>
        <Col>
          <span>{username}</span>
        </Col>
        <Col style={{ textAlign: "right" }}>
          <button className="btn">
            <img src={follow} alt="Follow Button" />
          </button>
        </Col>
      </Row>
      <Row>
        <Col>
          <img
            src={cat}
            alt="Grumpy Cat"
            style={{ borderRadius: "50%", padding: "10px" }}
          />
        </Col>
        <Col>
          <span>{username}</span>
        </Col>
        <Col style={{ textAlign: "right" }}>
          <button className="btn">
            <img src={follow} alt="Follow Button" />
          </button>
        </Col>
      </Row>
      <Row>
        <Col>
          <img
            src={cat}
            alt="Grumpy Cat"
            style={{ borderRadius: "50%", padding: "10px" }}
          />
        </Col>
        <Col>
          <span>{username}</span>
        </Col>
        <Col style={{ textAlign: "right" }}>
          <button className="btn">
            <img src={follow} alt="Follow Button" />
          </button>
        </Col>
      </Row>
      <div style={{ textAlign: "right" }}>Discover more ...</div>
    </>
  );
}
