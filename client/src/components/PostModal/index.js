import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import post from "./../../assets/img/post.svg";
// import API from "../../utils/API";
import "./style.css";

export default function CreatePost() {
  const [show, setShow] = useState(false);
  const [fileInput, setFileInput] = useState("");
  const [comment, setComment] = useState("");

  const username = "username";

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleFileInputChange = (e) => {
    // const file = e.target.files[0];
    // previewFile(file);
    // setSelectedFile(file);
    console.log(e.target.value);
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

      setFileInput("");
      // setPreviewSource("");
      // setSuccessMsg("Image uploaded successfully");
    } catch (err) {
      console.error(err);
      // setErrMsg("Something went wrong!");
    }
  };

  const handleSubmitFile = (e) => {
    e.preventDefault();

    console.log(fileInput);

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
          <form className="form" onSubmit={handleSubmitFile}>
            {username}
            <div>
              <input
                aria-label="Add a comment"
                autoComplete="off"
                className="form-control"
                type="text"
                name="add-comment"
                placeholder="What would you like to share?"
                value={comment}
                onChange={({ target }) => setComment(target.value)}
              />

              <input
                id="fileInput"
                type="file"
                name="image"
                onChange={handleFileInputChange}
                value={fileInput}
                className="custom-file-input"
              />

              <button
                className="btn"
                type="submit"
                style={{ border: "1px solid black" }}
              >
                Post
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
