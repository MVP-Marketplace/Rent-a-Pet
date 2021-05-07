import enCA from "date-fns/esm/locale/en-CA/index.js";
import React, { useState } from "react";
import API from "../../utils/API";
import "./style.css";

export default function CreatePost({ userId, username }) {
  const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [comment, setComment] = useState("");

  // console.log(username);

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const modal = document.getElementById("myModal");

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    setSelectedFile(file);
    console.log(e.target.value);
    setFileInputState(e.target.value);
  };

  const uploadImage = async (userId, base64EncodedImage, comment, username) => {
    try {
      // Create a new post
      API.createPost({
        user_id: userId,
        username: username,
        media: base64EncodedImage,
        caption: comment,
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      // await fetch("/api/upload", {
      //   method: "POST",
      //   body: JSON.stringify({ data: base64EncodedImage, comment: comment }),
      //   headers: { "Content-Type": "application/json" },
      // });
      setFileInputState("");
      setPreviewSource("");
      setSuccessMsg("Image uploaded successfully");
      modal.style.display = "none";
    } catch (err) {
      console.error(err);
      setErrMsg("Something went wrong!");
    }
  };

  const handleSubmitFile = (e) => {
    e.preventDefault();
    if (!selectedFile) return;
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
      uploadImage(userId, reader.result, comment, username);
    };
    reader.onerror = () => {
      console.error("AHHHHHHHH!!");
      setErrMsg("something went wrong!");
    };
  };

  return (
    <div>
      {previewSource && (
        <img src={previewSource} alt="chosen" style={{ height: "300px" }} />
      )}
      <form className="form" onSubmit={handleSubmitFile}>
        <input
          aria-label="Add a comment"
          autoComplete="off"
          className="text-sm text-gray-base w-full mr-3 py-5 px-4"
          type="text"
          name="add-comment"
          placeholder="Add a comment..."
          value={comment}
          onChange={({ target }) => setComment(target.value)}
          // ref={commentInput}
        />
        <input
          id="fileInput"
          type="file"
          name="image"
          onChange={handleFileInputChange}
          value={fileInputState}
          className="form-input"
        />
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
