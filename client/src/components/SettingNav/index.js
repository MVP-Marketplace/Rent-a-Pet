import React from "react";
import { Nav } from "react-bootstrap";
import gear from "./../../assets/img/settings.svg";
import follow from "./../../assets/img/followBtn.svg";
import "./style.css";

export default function SettingNav() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <span>Setting</span>
        <img src={gear} alt="Gear" style={{ padding: "10px" }} />
      </div>
      <Nav defaultActiveKey="1" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="1">Account</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="2">My Profile</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav
            eventKey="3"
            style={{ padding: "8px 16px", justifyContent: "space-between" }}
          >
            <span>My Critter's Profile</span>
            <button className="btn">
              <img src={follow} alt="Follow Button" />
            </button>
          </Nav>
        </Nav.Item>
      </Nav>
    </>
  );
}
