import React, { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { Upload, Button, message } from "antd";
// import { UploadOutlined, Icon } from "@ant-design/icons";
import Icon from "@ant-design/icons";
import cover from "./../../assets/img/coverImage.png";
import edit from "./../../assets/img/editBtn.svg";
import profile from "./../../assets/img/profilePic.png";
import "./style.css";

export default function ProfileSetting() {
  const [fileInput, setFileInput] = useState("");
  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [about, setAbout] = useState("");
  const [website, setWebsite] = useState("");
  const [backgroundSource, setBackgroundSource] = useState(cover);
  const [profileSource, setProfileSource] = useState(profile);

  const backgroundFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setBackgroundSource(reader.result);
    };
  };

  const handleBackgroundInput = (e) => {
    const file = e.target.files[0];
    backgroundFile(file);
    // setSelectedFile(file);
    // console.log(e.target?.files[0]);
    // const reader = new FileReader();
    // reader.readAsDataURL(file);
    // reader.onloadend = () => {
    //   setFileInput(reader.result);
    // };
    // setFileInput(e.target.value);
  };
  const profileFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setProfileSource(reader.result);
    };
  };

  const handleProfileInput = (e) => {
    const file = e.target.files[0];
    profileFile(file);
    // setSelectedFile(file);
    // console.log(e.target?.files[0]);
    // const reader = new FileReader();
    // reader.readAsDataURL(file);
    // reader.onloadend = () => {
    //   setFileInput(reader.result);
    // };
    // setFileInput(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(username);
  };

  return (
    <>
      {/*  */}

      <Row>
        <span className="header-2">My Profile</span>
      </Row>
      <Row
        style={{
          backgroundImage: `url(${backgroundSource})`,
          height: "300px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Col style={{ textAlign: "right" }}>
          <label className="btn">
            <img src={edit} alt="Edit Button" />
            <input
              type="file"
              name="image"
              style={{ display: "none" }}
              onChange={handleBackgroundInput}
              value={fileInput}
            />
          </label>
        </Col>
      </Row>
      <Row style={{ marginTop: "-100px" }}>
        <Col>
          <img
            src={profileSource}
            alt="Profile Pic"
            style={{
              borderRadius: "50%",
              border: "2px solid white",
              height: "250px",
              // width: "250px",
            }}
          />
          <label className="btn">
            <img
              src={edit}
              alt="Edit Button"
              style={{ marginLeft: "-100px", marginTop: "-170px" }}
            />
            <input
              type="file"
              name="image"
              style={{ display: "none" }}
              onChange={handleProfileInput}
              value={fileInput}
            />
          </label>
        </Col>
      </Row>
      <Row>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              onChange={({ target }) => setUsername(target.value)}
              value={username}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Display Name</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              onChange={({ target }) => setDisplayName(target.value)}
              value={displayName}
            />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>About</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={({ target }) => setAbout(target.value)}
              value={about}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Website</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              onChange={({ target }) => setWebsite(target.value)}
              value={website}
            />
          </Form.Group>
          <button className="btn default-btn" type="submit">
            Save
          </button>
        </Form>
      </Row>
    </>
  );
}
