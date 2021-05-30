import React, { useState, useContext, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AuthContext } from "./../Auth";
import API from "./../utils/API";
import SettingNav from "./../components/SettingNav";
import AccountSetting from "./../components/AccountSetting";
import ProfileSetting from "./../components/ProfileSetting";
import NavBar from "../components/NavBar";

export default function Setting() {
  const [activeKey, setActiveKey] = useState("2");
  const { currentUser } = useContext(AuthContext);
  const [user, setUser] = useState({});

  const loadUser = async () => {
    try {
      await API.getCurrentUser(currentUser.uid)
        .then((res) => {
          setUser(res.data);
          // setUsername(res.data?.username);
          // setDisplayName(res.data?.display_name);
          // setWebsite(res.data?.website);
          // setAbout(res.data?.about);
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

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
            <SettingNav
              handleSettingChange={handleSettingChange}
              // activeKey={activeKey}
            />
          </Col>
          <Col lg={6}>
            {activeKey === "2" ? (
              <ProfileSetting data={user} />
            ) : (
              <AccountSetting />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
