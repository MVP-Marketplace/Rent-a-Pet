import React, { useState, useContext, useEffect } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { Image } from "cloudinary-react";
import { Upload, Button, message } from "antd";
// import { UploadOutlined, Icon } from "@ant-design/icons";
import { AuthContext } from "./../../Auth";
import API from "./../../utils/API";
import Icon from "@ant-design/icons";
import cover from "./../../assets/img/coverImage.png";
import edit from "./../../assets/img/editBtn.svg";
import profile from "./../../assets/img/profilePic.png";
import "./style.css";

export default function ProfileSetting(props) {
  const user = props.data;
  const [changeProfile, setChangeProfile] = useState(false);
  const [changeBackground, setChangeBackground] = useState(false);
  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [about, setAbout] = useState("");
  const [website, setWebsite] = useState("");
  const [backgroundSource, setBackgroundSource] = useState(cover);
  const [profileSource, setProfileSource] = useState(profile);
  const { currentUser } = useContext(AuthContext);

  const loadUser = async () => {
    try {
      setUsername(user?.username);
      setDisplayName(user?.display_name);
      setWebsite(user?.website);
      setAbout(user?.about);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  const backgroundFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setBackgroundSource(reader.result);
      setChangeBackground(true);
    };
  };

  const handleBackgroundInput = (e) => {
    const file = e.target.files[0];
    backgroundFile(file);
    // setSelectedFile(file);
    // console.log(e.target?.files[0]);
    // const reader = new FileReader();
    // reader.readAsDataURL(file);
    // reader.onloadend = () => {
    //   setFileInput(reader.result);
    // };
    // setFileInput(e.target.value);
  };
  const profileFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setProfileSource(reader.result);
      // API.updateAvatar({ _id: currentUser.uid, avatar: reader.result });
    };
  };

  const handleProfileInput = (e) => {
    const file = e.target.files[0];
    profileFile(file);
    setChangeProfile(true);
    // setSelectedFile(file);
    // console.log(e.target?.files[0]);
    // const reader = new FileReader();
    // reader.readAsDataURL(file);
    // reader.onloadend = () => {
    //   setFileInput(reader.result);
    // };
    // console.log(typeof file);
    // setSelectedFile(file);
  };

  const uploadFile = async (
    username,
    displayName,
    website,
    about,
    profileSource,
    backgroundSource
  ) => {
    try {
      // Create a new post
      API.updateUser({
        username: username,
        display_name: displayName,
        website: website,
        about: about,
        avatar: profileSource,
        background: backgroundSource,
        _id: currentUser.uid,
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      // await fetch("/api/upload", {
      //   method: "POST",
      //   body: JSON.stringify({ data: base64EncodedImage, comment: comment }),
      //   headers: { "Content-Type": "application/json" },
      // });
      // setFileInputState("");
      // setPreviewSource("");
      // setSuccessMsg("Image uploaded successfully");
      // modal.style.display = "none";
    } catch (err) {
      console.error(err);
      // setErrMsg("Something went wrong!");
    }
  };

  // const uploadAvatar = () => {};

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (displayName === "" || username === "") {
      console.log("Please input display name or username");
      return;
    }

    uploadFile(
      username,
      displayName,
      website,
      about,
      profileSource,
      backgroundSource
    );
    // const reader = new FileReader();
    // reader.readAsDataURL(selectedFile);
    // reader.onloadend = () => {
    //   uploadFile(username, displayName, website, about, reader.result);
    // };
    // reader.onerror = () => {
    //   console.error("AHHHHHHHH!!");
    //   // setErrMsg("something went wrong!");
    // };
    // API.updateUser({
    //   username: username,
    //   display_name: displayName,
    //   website: website,
    //   about: about,
    //   avatar: base64EncodedImage,
    //   _id: currentUser.uid,
    // })
    //   .then((res) => console.log(res.data))
    //   .catch((err) => console.log(err));
  };

  return (
    <>
      {/*  */}

      <Row>
        <span className="header-2">My Profile</span>
      </Row>
      <Row
        style={{
          backgroundImage: changeBackground
            ? `url(${backgroundSource})`
            : `url(${user.background})`,
          height: "300px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Col style={{ textAlign: "right" }}>
          <label className="btn">
            <img src={edit} alt="Edit Button" />
            <input
              type="file"
              name="image"
              style={{ display: "none" }}
              onChange={handleBackgroundInput}
              // value={fileInput}
            />
          </label>
        </Col>
      </Row>
      <Row style={{ marginTop: "-100px" }}>
        <Col>
          {changeProfile ? (
            <img
              src={profileSource}
              alt="Profile Pic"
              style={{
                borderRadius: "50%",
                border: "2px solid white",
                height: "250px",
                // width: "250px",
              }}
            />
          ) : (
            <Image
              cloudName="mvp-rent-a-pet-dev"
              // cloudName={process.env.cloud_name}
              publicId={user.avatar}
              width="250"
              crop="scale"
              style={{
                borderRadius: "50%",
                border: "2px solid white",
                height: "250px",
              }}
            />
          )}
          <label className="btn">
            <img
              src={edit}
              alt="Edit Button"
              style={{ marginLeft: "-100px", marginTop: "-170px" }}
            />
            <input
              type="file"
              name="image"
              style={{ display: "none" }}
              onChange={handleProfileInput}
              // value={fileInput}
            />
          </label>
        </Col>
      </Row>
      <Row>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              onChange={({ target }) => setUsername(target.value)}
              value={username}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Display Name</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              onChange={({ target }) => setDisplayName(target.value)}
              value={displayName}
            />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>About</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={({ target }) => setAbout(target.value)}
              value={about}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Website</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              onChange={({ target }) => setWebsite(target.value)}
              value={website}
            />
          </Form.Group>
          <button className="btn default-btn" type="submit">
            Save
          </button>
        </Form>
      </Row>
    </>
  );
}
