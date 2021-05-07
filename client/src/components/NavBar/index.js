import React, { useState } from "react";
import { Navbar, Nav, Col, Button, Dropdown } from "react-bootstrap";
import paw from "./../../assets/img/paw.svg";
import chat from "./../../assets/img/chat.svg";
import profileIcon from "./../../assets/img/profileIcon.svg";
import post from "./../../assets/img/post.svg";
import settings from "./../../assets/img/settings.svg";
import statement from "./../../assets/img/statement.svg";
import "./style.css";

export default function NavBar() {
  //Created a demo for login and logout
  //Todo
  //Make mobile friendly
  console.log(window.location.href);
  return (
    <Navbar
      style={{
        height: 60,
        backgroundColor: "#fff",
      }}
    >
      <Navbar.Brand href="/" style={{ paddingLeft: 100 }}>
        <img src={paw} />
      </Navbar.Brand>
      <Col className="mr-auto" style={{ textAlign: "right" }}>
        {window.location.href === "http://localhost:3000/" ? (
          <Button href="#hi" className="loginBtn">
            Log In
          </Button>
        ) : (
          <Nav
            className="mr-auto"
            style={{ justifyContent: "flex-end", paddingRight: 100 }}
          >
            <Nav.Link href="#home" style={{ paddingRight: 50 }}>
              <img src={post} />
            </Nav.Link>
            <Nav.Link href="#features" style={{ paddingRight: 50 }}>
              <img src={chat} />
            </Nav.Link>
            <Dropdown>
              <Dropdown.Toggle className="profile-menu" id="dropdown-basic">
                <img src={profileIcon} />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  <img src={profileIcon} style={{ paddingRight: 12 }} />
                  My Profile
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  <img src={statement} style={{ paddingRight: 12 }} />
                  Statements
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <img src={settings} style={{ paddingRight: 12 }} />
                  Settings
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        )}
      </Col>
    </Navbar>
  );
}
