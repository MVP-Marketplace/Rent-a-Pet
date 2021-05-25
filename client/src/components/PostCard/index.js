import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRegCommentDots, FaShareSquare } from "react-icons/fa";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { IoPaperPlaneOutline } from "react-icons/io5";
import picture from "./../../assets/img/profilePic.png";
import demo from "./../../assets/img/demoPic.png";
import follow from "./../../assets/img/followBtn.svg";
import settingDots from "./../../assets/img/settingDots.svg";
import "./style.css";

export default function PostCard(props) {
  console.log(props);
  const [like, setLike] = useState(false);
  const [bookmark, setBookmark] = useState(false);
  const [comment, setComment] = useState("");

  const username = "username";

  const handleLike = () => {
    if (like) {
      setLike(false);
    } else {
      setLike(true);
    }
  };

  const handleBookmark = () => {
    if (bookmark) {
      setBookmark(false);
    } else {
      setBookmark(true);
    }
  };

  const handleComment = () => {
    console.log(comment);
  };

  return (
    <div>
      <Container
        style={{
          border: "1px solid #E1E1E1",
          padding: "0px",
          borderRadius: "8px",
          marginBottom: "50px",
        }}
      >
        <Row style={{ margin: "5px" }}>
          <Col>
            <img
              src={picture}
              alt="Profile Pic"
              style={{
                borderRadius: "50%",
                width: "50px",
              }}
            />
            <span style={{ paddingLeft: "10px" }}>{props.data}</span>
          </Col>
          <Col style={{ textAlign: "right" }}>
            <button className="btn">
              <img src={follow} alt="Follow Button" />
            </button>
            <button className="btn">
              <img src={settingDots} alt="Post Setting Dots Button" />
            </button>
          </Col>
        </Row>
        <Row style={{ margin: "5px 10px" }}>
          Tardar continues to inspire! Her adorable visage was relatable to so
          many and brought smiles to their faces. Thank you @ArtistOftheYear for
          your amazing artwork!
        </Row>
        <Image src={demo} alt="Demo Pic of Cats" style={{ width: "100%" }} />
        <Row style={{ margin: "0" }}>
          <Col>
            {" "}
            <button className="btn" onClick={handleLike}>
              {like ? (
                <AiFillHeart style={{ color: "red" }} />
              ) : (
                <AiOutlineHeart />
              )}
            </button>{" "}
            <button
              className="btn"
              onClick={() => console.log("Under Construction")}
            >
              <FaRegCommentDots />
            </button>
          </Col>
          <Col style={{ textAlign: "right" }}>
            <button className="btn" onClick={handleBookmark}>
              {bookmark ? <BsFillBookmarkFill /> : <BsBookmark />}
            </button>
            <button
              className="btn"
              onClick={() => console.log("Under Construction")}
            >
              <FaShareSquare />
            </button>
          </Col>
        </Row>
        <Row style={{ margin: "0" }}>
          <Col style={{ textAlign: "right" }}>
            <button
              className="btn"
              onClick={() => console.log("Under Construction")}
            >
              Sort
            </button>
          </Col>
        </Row>
        <Row style={{ margin: "0" }}>
          <Col style={{ textAlign: "left" }}>Comment Section</Col>
        </Row>
        <Row style={{ margin: "0" }}>
          <InputGroup className="mb-3">
            <img
              src={picture}
              alt="Profile Pic"
              style={{
                borderRadius: "50%",
                height: "40px",
              }}
            />
            <FormControl
              aria-label="Comment"
              style={{
                background: "#EFEFF5",
                borderRadius: "25px 0px 0px 25px",
                marginLeft: "10px",
                border: "none",
              }}
              placeholder="Write a comment..."
              value={comment}
              onChange={({ target }) => {
                setComment(target.value);
              }}
            />
            <InputGroup.Append
              style={{
                background: "#EFEFF5",
                borderRadius: " 0px 25px 25px 0px ",
              }}
            >
              <button className="btn" onClick={handleComment}>
                <IoPaperPlaneOutline />
              </button>
            </InputGroup.Append>
          </InputGroup>
        </Row>
      </Container>
    </div>
  );
}
