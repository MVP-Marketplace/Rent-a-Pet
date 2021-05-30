import React, { useContext, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Image } from "cloudinary-react";
import { AuthContext } from "./../Auth";
import API from "./../utils/API";
import Navbar from "./../components/NavBar";
import HumanNav from "./../components/HumanNav";
import Star from "./../assets/img/star.svg";
import Share from "./../assets/img/share.svg";

export default function HumanProfile() {
  const { currentUser } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [about, setAbout] = useState("");
  const [website, setWebsite] = useState("");
  const [user, setUser] = useState({});

  const loadUser = async () => {
    try {
      await API.getCurrentUser(currentUser.uid)
        .then((res) => {
          setUser(res.data);
          console.log(res.data);
          // setUsername(res.data?.username);
          // setDisplayName(res.data?.display_name);
          // setWebsite(res.data?.website);
          // setAbout(res.data?.about);
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);
  // const name = "First and Last Name";
  // const username = "@" + `username`;
  // const website = "Website";
  // const description = "Description";
  // console.log(user);
  return (
    <>
      <Navbar />
      <div
        style={{
          backgroundImage: `url(${user.background})`,
          height: "50vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          textAlign: "right",
        }}
      >
        <a
          type="button"
          href="/setting"
          style={{
            background: "white",
            margin: "10px 50px 0px 0px",
            padding: "10px",
          }}
        >
          Edit Profile
        </a>
      </div>
      <Container>
        <Row
          className="justify-content-md-center"
          style={{ marginTop: "-50px" }}
        >
          <Col lg={2}>
            <Image
              cloudName="mvp-rent-a-pet-dev"
              // cloudName={process.env.cloud_name}
              publicId={user.avatar}
              // width="250"
              crop="scale"
              style={{
                borderRadius: "50%",
                border: "2px solid white",
                height: "150px",
                width: "100%",
              }}
            />
            {/* <Image
              src={ProfilePic}
              alt="Profile Picture"
              roundedCircle
              style={{ width: "100%" }}
            ></Image> */}
          </Col>
          <Col lg={6}>
            <div style={{ color: "white", fontSize: "20px" }}>
              {user?.display_name}
            </div>
            <br />
            <div className="header-3">@{user?.username}</div>
            <div className="header-3">{user?.website}</div>
          </Col>
          <Col lg={2}>
            <button className="btn">
              <img src={Star} alt="star" />
            </button>
            <button className="btn">
              <img src={Share} alt="share" />
            </button>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col lg={10}>
            <div
              className="header-2"
              style={{ borderBottom: "2px solid black", padding: "5px" }}
            >
              About
            </div>
            <p>{user?.about}</p>
          </Col>
        </Row>
      </Container>
      <div style={{ background: "#EFEFF5", height: "300px", width: "100%" }}>
        <Container>
          <Row className="justify-content-md-center">
            <Col
              lg="10"
              style={{
                background: "pink",
                borderBottom: "2px solid black",
              }}
            >
              My Critter
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col lg="10" style={{ background: "red" }}>
              Critter card
            </Col>
          </Row>
        </Container>
      </div>{" "}
      <div style={{ height: "300px" }}>
        <Container>
          <Row className="justify-content-md-center">
            <HumanNav />
          </Row>
          <Row className="justify-content-md-center">
            <Col lg="10" style={{ background: "red" }}>
              Post Cards Components
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
