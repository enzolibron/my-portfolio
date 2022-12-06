import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pianojs from "../../Assets/Projects/pianojs.png";
import myportfolio from "../../Assets/Projects/myportfolio.png";
import facebookclone from "../../Assets/Projects/facebook-clone.png";

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
              imgPath={facebookclone}
              isBlog={false}
              title="Facebook Clone React JS"
              description="Recreating Facebook using React JS. This is a course project of a react js course that i took. 
              I didn't made it from scratch, it is more of studying the codebase and getting familiar with the libraries 
              used on one of the biggest applications used out there"
              ghLink="https://github.com/enzolibron/facebook-clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={facebookclone}
              isBlog={false}
              title="Facebook Clone ExpressJS"
              description="Together with the facebook frontend is the backend made using express js."
              ghLink="https://github.com/enzolibron/facebook-clone-express"
            />
          </Col>

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
