import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { DiDocker, DiWindows } from "react-icons/di";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
} from "react-icons/si";

function Toolstack() {
  const [description, setDescription] = useState(""); 

  const handleIconClick = (iconName, iconDescription) => {
    setDescription(iconDescription);
  };

  return (
    <div>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <div onClick={() => handleIconClick("DiWindows", "Windows")}>
            <DiWindows />
          </div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <div onClick={() => handleIconClick("SiVisualstudiocode", "VS Code")}>
            <SiVisualstudiocode />
          </div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <div onClick={() => handleIconClick("DiDocker", "Docker")}>
            <DiDocker />
          </div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <div onClick={() => handleIconClick("SiPostman", "Postman")}>
            <SiPostman />
          </div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <div onClick={() => handleIconClick("SiSlack", "Slack")}>
            <SiSlack />
          </div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <div onClick={() => handleIconClick("SiVercel", "Vercel")}>
            <SiVercel />
          </div>
        </Col>
      </Row>
      {/* Display the description */}
      {description && (
        <div style={{ textAlign: "center" }}>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
}

export default Toolstack;
