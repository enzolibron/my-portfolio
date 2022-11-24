import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Lorenzo Libron. </span>
            I'm a software developer that has experience building web services 
            with Rest APIs using Spring Boot (JAVA). I'm currently learning Javascript 
            to pursue a front end developer role.
            <br />
            <br />
            Apart from coding, here are some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Play Video Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Make beats music 📻
            </li>
            <li className="about-activity">
              <ImPointRight /> Watch food videos on youtube 🍕
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Sometimes life hits you in the head with a brick. Don't lose faith."{" "}
          </p>
          <footer className="blockquote-footer">Steve Jobs</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
