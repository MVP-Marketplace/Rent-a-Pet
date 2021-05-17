import React from "react";
import { Nav } from "react-bootstrap";
import statment from "./../../assets/img/statement.svg";
import "./style.css";

export default function StatementNav(props) {
  // console.log(props);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <span>Statements</span>
        <img src={statment} alt="Graph" style={{ padding: "10px" }} />
      </div>
      <Nav defaultActiveKey="1" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="1" onClick={(e) => props.handleSettingChange(e)}>
            Payments
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="2" onClick={(e) => props.handleSettingChange(e)}>
            Earnings
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}
