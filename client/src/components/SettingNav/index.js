import React from "react";
import { Nav } from "react-bootstrap";
import gear from "./../../assets/img/settings.svg";
import follow from "./../../assets/img/followBtn.svg";
import "./style.css";

export default function SettingNav(props) {
  // console.log(props);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <span className="header-2" style={{ padding: "10px" }}>
          Setting
        </span>
        <img src={gear} alt="Gear" style={{ padding: "10px" }} />
      </div>
      <Nav defaultActiveKey="1" className="flex-column">
        <Nav.Item>
          <Nav.Link
            className="header-3"
            eventKey="1"
            onClick={(e) => props.handleSettingChange(e)}
          >
            Account
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className="header-3"
            eventKey="2"
            onClick={(e) => props.handleSettingChange(e)}
          >
            My Profile
          </Nav.Link>
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
