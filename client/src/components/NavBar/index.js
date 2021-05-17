import React from "react";
import { Navbar, Nav, Col, Dropdown } from "react-bootstrap";
import LoginModal from "./../LoginModal";
import CreatePost from "./../PostModal";
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
  // console.log(window.location.href);
  return (
    <Navbar
      style={{
        height: 60,
        backgroundColor: "#fff",
      }}
    >
      <Navbar.Brand href="/" style={{ paddingLeft: 100 }}>
        <img src={paw} alt="Animal paw" />
      </Navbar.Brand>
      <Col className="mr-auto" style={{ textAlign: "right" }}>
        {window.location.href === "http://localhost:3000/" ? (
          <LoginModal position="nav" />
        ) : (
          <Nav
            className="mr-auto"
            style={{ justifyContent: "flex-end", paddingRight: 100 }}
          >
            {/* <Nav.Link href="#home" style={{ paddingRight: 50 }}>
              <img src={post} alt="Post button" />
            </Nav.Link> */}
            <CreatePost />
            <Nav.Link href="#features" style={{ paddingRight: 50 }}>
              <img src={chat} alt="Chat bubble" />
            </Nav.Link>
            <Dropdown>
              <Dropdown.Toggle className="profile-menu" id="dropdown-basic">
                <img src={profileIcon} alt="Profile icon" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/profile">
                  <img
                    src={profileIcon}
                    style={{ paddingRight: 12 }}
                    alt="Profile icon"
                  />
                  My Profile
                </Dropdown.Item>
                <Dropdown.Item href="/statements">
                  <img
                    src={statement}
                    style={{ paddingRight: 12 }}
                    alt="Money graph"
                  />
                  Statements
                </Dropdown.Item>
                <Dropdown.Item href="/setting">
                  <img src={settings} style={{ paddingRight: 12 }} alt="Gear" />
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
