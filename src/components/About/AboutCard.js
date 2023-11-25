import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I'm <span className="purple">Mai Hai Dang  </span>
            residing in <span className="purple"> Ho Chi Minh City</span>
            <br /> Currently in my final year, I'm passionately pursuing a degree in Information Technology at Ho Chi Minh City University of Technology and Education.
            <br />
            Alongside my academic journey, I am actively engaged as a software developer at <span className="purple">La Nha</span>. 
            <br />
            <br />
            Beyond the world of coding, I find joy in a variety of activities !
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Sport (football, swimming)
            </li>
            <li className="about-activity">
              <ImPointRight /> Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Feel free to follow your heart's desires!"{" "}
          </p>
          <footer className="blockquote-footer">Hai Dang</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
