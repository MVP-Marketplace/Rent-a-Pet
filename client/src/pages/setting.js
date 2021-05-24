import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SettingNav from "./../components/SettingNav";
import AccountSetting from "./../components/AccountSetting";
import ProfileSetting from "./../components/ProfileSetting";
import NavBar from "../components/NavBar";

export default function Setting() {
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
            <SettingNav handleSettingChange={handleSettingChange} />
          </Col>
          <Col lg={6}>
            {activeKey === "1" ? <AccountSetting /> : <ProfileSetting />}
          </Col>
        </Row>
      </Container>
    </>
  );
}
