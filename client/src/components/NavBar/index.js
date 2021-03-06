import React, { useContext } from "react";
import { Navbar, Nav, Col, Dropdown } from "react-bootstrap";
import { AuthContext } from "./../../Auth";
import LoginModal from "./../LoginModal";
import CreatePost from "./../PostModal";
import paw from "./../../assets/img/paw.svg";
import chat from "./../../assets/img/chat.svg";
import profileIcon from "./../../assets/img/profileIcon.svg";
import firebaseApp from "./../../firebase/firebase.utils";
// import post from "./../../assets/img/post.svg";
import settings from "./../../assets/img/settings.svg";
import statement from "./../../assets/img/statement.svg";
import "./style.css";

export default function NavBar() {
  const { currentUser } = useContext(AuthContext);
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
      <Navbar.Brand href="/" style={{ marginLeft: 100 }}>
        <img src={paw} alt="Animal paw" />
      </Navbar.Brand>
      <Col className="mr-auto" style={{ textAlign: "right" }}>
        {currentUser ? (
          <Nav
            className="mr-auto"
            style={{ justifyContent: "flex-end", marginRight: 100 }}
          >
            {/* <Nav.Link href="#home" style={{ paddingRight: 50 }}>
             <img src={post} alt="Post button" />
           </Nav.Link> */}
            <CreatePost />
            <Nav.Link
              href="#"
              style={{ marginRight: 50 }}
              onClick={() => alert("Under Construction")}
            >
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
                <Dropdown.Item onClick={() => firebaseApp.auth().signOut()}>
                  Log Out
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        ) : (
          <LoginModal position="nav" />
        )}
      </Col>
    </Navbar>
  );
}
