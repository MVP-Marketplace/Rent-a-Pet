import React, { useState, useEffect, useContext } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import { AuthContext } from "./../Auth";
import NavBar from "./../components/NavBar";
import SignUp from "./../components/SignUp";
import Shiba from "./../assets/img/Shiba.png";
import CrittrMobile from "./../assets/img/CrittrMobile.png";
import KittyTreat from "./../assets/img/Kittytreat.png";
import Tiger from "./../assets/img/tiger.png";
import API from "./../utils/API";

export default function Home() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  // const [user, setUser] = useState(null);
  // Get users
  const loadPost = async () => {
    try {
      await API.getUsers()
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadPost();
  }, []);

  return (
    <>
      <NavBar />
      <Container fluid="md">
        <Row className="justify-content-md-center row-spacing">
          <Col>
            <p className="header-1">Do you love animals?</p>{" "}
            <p style={{ fontWeight: "400", fontSize: "24px" }}>
              Share pics and videos of your animals on our new social media
              platform!
            </p>
            <SignUp />
          </Col>
          <Col>
            <Image style={{ maxWidth: "100%" }} src={Shiba} alt="Dog" />
          </Col>
        </Row>
        <Row className="justify-content-md-center row-spacing align-items-center">
          <Col>
            <Image
              style={{ maxWidth: "100%" }}
              src={CrittrMobile}
              alt="Cell Phone"
            />
          </Col>
          <Col>
            <p className="header-2">Engage with other animal lovers!</p>
            <p className="body-text">
              You can like, comment, and follow the same as any other social
              media app, but Crittr wants to help animal owners with the care of
              their crittrs. This is why Crittr allows animal owners to create
              premium content for fans. Fans can request shout-outs, or
              personalized videos, from their favorite animals or become a
              sponsor and gift a small amount each month for the care and upkeep
              of our favorite crittrs.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-md-center row-spacing align-items-center">
          <Col>
            <p className="header-2">
              Raise up to $2,000 a month with your pet!
            </p>
            <div className="body-text">
              <ol>
                <li>Create profiles for both you and your pet.</li>
                <li>
                  Choose whether you would like to monetize your posts. You can
                  do this 2 ways:
                </li>
                <ol style={{ listStyleType: "lower-latin" }}>
                  <li>
                    Offer monthly sponsorships. This allows fans to donate a
                    small amount for premium content from your animal on a
                    monthly basis.
                  </li>
                  <li>
                    {" "}
                    Offer shout-outs. Shout-outs are short 1-3 minute videos
                    where a fan can request a personalized video from you and
                    your animal.
                  </li>
                </ol>
                <li>Share your animals with others!</li>
              </ol>
            </div>
          </Col>
          <Col>
            <Image
              style={{ maxWidth: "100%" }}
              src={KittyTreat}
              alt="Kitty getting a treat"
            />
          </Col>
        </Row>
        <Row className="justify-content-md-center row-spacing align-items-center">
          <Col>
            <Image style={{ maxWidth: "100%" }} src={Tiger} alt="Cell Phone" />
          </Col>
          <Col>
            <p className="header-2">Zoos and Non-Profits Welcome!</p>
            <p className="body-text">
              We encourage zoos and non-profit organizations to sign up as well!
              Due to the nature of these organizations, you can host a number of
              animals under one organization’s profile! This way, each animal’s
              profile can be customized for sponsorships and shout-outs.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
