import React from "react";
import { Row, Col } from "react-bootstrap";
import cat from "./../../assets/img/cat.png";
import follow from "./../../assets/img/followBtn.svg";
import "./style.css";

export default function Suggested() {
  let users = [];

  for (let i = 0; i < 3; i++) {
    users.push("username " + i);
  }

  return (
    <>
      <Row>Suggested for you</Row>
      {/* Ready to map out people to follow */}
      {users.map((res, index) => {
        return (
          <Row key={index}>
            <Col>
              <img
                src={cat}
                alt="Grumpy Cat"
                style={{ borderRadius: "50%", padding: "10px" }}
              />
              <span id={index}>{res}</span>
            </Col>
            <Col style={{ textAlign: "right" }}>
              <button
                className="btn"
                onClick={() => {
                  console.log(document.getElementById(`${index}`).textContent);
                }}
              >
                <img src={follow} alt="Follow Button" />
              </button>
            </Col>
          </Row>
        );
      })}
      <Row>
        <a
          href="#"
          style={{ textAlign: "end" }}
          onClick={() => console.log("link")}
        >
          Discover more ...
        </a>
      </Row>
    </>
  );
}
