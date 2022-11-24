import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pianojs from "../../Assets/Projects/pianojs.png";
import myportfolio from "../../Assets/Projects/myportfolio.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pianojs}
              isBlog={false}
              title="Piano JS"
              description="Play piano on a web page that is made using html, css, and, javascript."
              ghLink="https://github.com/enzolibron/piano-js"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myportfolio}
              isBlog={false}
              title="My Portfolio"
              description="My personal portfolio that is made using React JS."
              ghLink="https://github.com/enzolibron/my-portfolio"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
