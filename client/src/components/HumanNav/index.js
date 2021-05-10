import React from "react";
import { Nav, Col } from "react-bootstrap";
import "./style.css";

export default function HumanNav() {
  return (
    <>
      <Col lg="4">
        <Nav justify defaultActiveKey="1">
          <Nav.Item>
            <Nav.Link eventKey="1">Posts</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="2">Videos</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="3">Bookmarks</Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
    </>

    //   <>
    //     <Nav
    //       variant="tabs"
    //       className="justify-content-center"
    //       // style={{ borderBottom: "2px solid black" }}
    //       activeKey="/"
    //     >
    //       <Nav.Item>
    //         <Nav.Link className="demo" href="#">
    //           Post
    //         </Nav.Link>
    //       </Nav.Item>
    //       <Nav.Item>
    //         <Nav.Link eventKey="active">Videos</Nav.Link>
    //       </Nav.Item>
    //       <Nav.Item>
    //         <Nav.Link eventKey="#">Bookmarks</Nav.Link>
    //       </Nav.Item>
    //     </Nav>
    //   </>
  );
}
