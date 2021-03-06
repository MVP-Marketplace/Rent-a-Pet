import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import StatementNav from "./../components/StatementNav";
import CardDetails from "./../components/CardDetails";
import BankingDetails from "./../components/BankingDetails";
import NavBar from "../components/NavBar";

export default function Statements() {
  const [activeKey, setActiveKey] = useState("1");
  const handleSettingChange = (e) => {
    setActiveKey(e.target.dataset.rbEventKey);
  };
  console.log(activeKey);
  return (
    <>
      <NavBar />
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col lg={3} style={{ border: "1px solid red" }}>
            <StatementNav handleSettingChange={handleSettingChange} />
          </Col>
          <Col lg={6}>
            {activeKey === "1" ? <CardDetails /> : <BankingDetails />}
          </Col>
        </Row>
      </Container>
    </>
  );
}
