import React from "react";
import { Card } from "react-bootstrap";
import ape from "./../../assets/img/ape.png";
import "./style.css";

export default function DiscoverCard() {
  const name = "name";
  const petUsername = "@" + "AnimalUsername";
  const ownerUsername = "@" + "OwnerUsername";
  return (
    <>
      <Card style={{ width: "200px" }}>
        <Card.Img variant="top" src={ape} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <p>{petUsername}</p>
            <p>{ownerUsername}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
