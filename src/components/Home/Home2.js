import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineYoutube,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I like programming 👨‍💻
              <br />
              <br />I code
              <i>
                <b className="purple"> Java or JavaScript </b>
              </i>
              stuff ☕
              <br />
              <br />
              I make
              <i>
                <b className="purple"> beats music </b>
              </i>
              or play
              <i>
                <b className="purple"> valorant </b>
              </i> 
              on my free time. 🔫
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h2>FIND ME ON</h2>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.github.com/enzolibron"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.youtube.com/channel/UCFznI9H8YZ98FKE3kQvJmvA"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineYoutube />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/lblibron/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
