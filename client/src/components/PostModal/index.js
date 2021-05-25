import React, { useState } from "react";
import { Modal, Row, Col } from "react-bootstrap";
import { Input, Tooltip } from "antd";
import post from "./../../assets/img/post.svg";
import PicIcon from "./../../assets/img/picIcon.svg";
import ProfileIcon from "./../../assets/img/profileIcon.svg";
// import API from "../../utils/API";
import "./style.css";

export default function CreatePost() {
  const [show, setShow] = useState(false);
  const [fileInput, setFileInput] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [comment, setComment] = useState("");

  const username = "username";

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setSelectedFile(reader.result);
    };
    console.log(file);
    console.log(typeof e.target.value);
    setFileInput(e.target.value);
  };

  const uploadImage = async (userId, base64EncodedImage, comment, username) => {
    try {
      // // Create a new post
      // API.createPost({
      //   user_id: userId,
      //   username: username,
      //   media: base64EncodedImage,
      //   caption: comment,
      // })
      //   .then((res) => console.log(res))
      //   .catch((err) => console.log(err));
      // setFileInput("");
      // setPreviewSource("");
      // setSuccessMsg("Image uploaded successfully");
    } catch (err) {
      console.error(err);
      // setErrMsg("Something went wrong!");
    }
  };

  const handleSubmitFile = (e) => {
    e.preventDefault();

    console.log(comment, fileInput);

    if (!fileInput) return;
    // const reader = new FileReader();
    // reader.readAsDataURL(selectedFile);
    // reader.onloadend = () => {
    //   uploadImage(userId, reader.result, comment, username);
    // };
    // reader.onerror = () => {
    //   console.error("AHHHHHHHH!!");
    //   setErrMsg("something went wrong!");
    // };
    setFileInput("");
    setComment("");
    handleClose();
  };

  return (
    <>
      <button
        className="btn"
        onClick={handleShow}
        style={{ padding: "8px 50px 8px 8px" }}
      >
        <img src={post} alt="Post button" />
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Create a Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <img
                src={ProfileIcon}
                alt="Profile Icon"
                style={{ height: "24px" }}
              />
              <span style={{ paddingLeft: "10px" }}>{username}</span>
            </Col>
          </Row>
          <form
            className="form"
            onSubmit={handleSubmitFile}
            style={{ marginTop: "10px" }}
          >
            <Row>
              <Col>
                <Input
                  aria-label="Add a comment"
                  autoComplete="off"
                  type="text"
                  name="add-comment"
                  placeholder="What would you like to share?"
                  value={comment}
                  onChange={({ target }) => setComment(target.value)}
                  suffix={
                    <Tooltip title="Add Picture">
                      <label className="btn" style={{ padding: "0px" }}>
                        <img
                          src={PicIcon}
                          alt="Pic Icon"
                          style={{ height: "24px" }}
                        />
                        <input
                          type="file"
                          name="image"
                          style={{ display: "none" }}
                          onChange={handleFileInputChange}
                          value={fileInput}
                        />
                      </label>
                    </Tooltip>
                  }
                />
              </Col>
            </Row>
            <Row style={{ textAlign: "end" }}>
              <Col>
                <button
                  className="btn"
                  type="submit"
                  style={{
                    border: "1px solid white",
                    marginTop: "10px",
                    width: "100px",
                    background: "#5998A6",
                    color: "white",
                  }}
                >
                  Post
                </button>
              </Col>
            </Row>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
