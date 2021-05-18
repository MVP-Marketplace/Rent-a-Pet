import React, { useState } from "react";
import { Modal, Row } from "react-bootstrap";
import Paw from "./../../assets/img/paw.svg";
import Demo from "./../../assets/img/demoProfilePic.png";
import "./style.css";

export default function Step5(props) {
  console.log(props);

  const [preview, setPreview] = useState(Demo);

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreview(reader.result);
    };
  };

  return (
    <div>
      <Modal.Header closeButton>
        <Modal.Title>
          <img src={Paw} alt="Animal paw" />
          <button
            className="btn"
            style={{ border: "2px solid red" }}
            onClick={() => props.next()}
          >
            Skip for now
          </button>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Pick a Profile Photo</p>
        <Row style={{ justifyContent: "center" }}>
          {preview && (
            <img
              src={preview}
              alt="chosen"
              style={{
                height: "300px",
                width: "auto",
                borderRadius: "50%",
              }}
            />
          )}
        </Row>

        <input
          id="fileInput"
          type="file"
          name="image"
          onChange={(e) => {
            props.handleChange(e);
            previewFile(e.target.files[0]);
          }}
          value={props.getState("image", "")}
          className="custom-file-input"
        />

        <button
          className="btn"
          style={{ border: "2px solid red" }}
          onClick={() => props.next()}
        >
          Done
        </button>
      </Modal.Body>
    </div>
  );
}
