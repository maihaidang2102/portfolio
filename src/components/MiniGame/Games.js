import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

const Games = () => {
    const navigate = useNavigate();
    const games = [
        { name: "Cờ Caro", nav: "caro" },
        { name: "Game 2", nav: "game2" },
        { name: "Game 3", nav: "game3" }
      ];
  const tools = [
    { name: "Gửi Email Hàng Loạt", nav: "sendEmail" },
    { name: "Ghi Chú", nav: "note" },
    { name: "Game 3", nav: "game3" }
  ];

  const handleGameClick = (nav) => {
    navigate(`/${nav}`);
  };

  return (
    <Container fluid className="project-section">
      <Container>
        <Row>
          <Col md={6}>
            <h2 style={{ color: 'white' }}>Games</h2>
            <ListGroup>
              {games.map((game, index) => (
                <ListGroup.Item 
                  key={index} 
                  style={{ backgroundColor: '#623686', color: 'white', borderColor: '#000' ,cursor: 'pointer'}}
                  onClick={() => handleGameClick(game.nav)}
                >
                  {game.name}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col md={6}>
            <h2 style={{ color: 'white' }}>Tools</h2>
            <ListGroup>
              {tools.map((game, index) => (
                <ListGroup.Item 
                  key={index} 
                  style={{ backgroundColor: '#623686', color: 'white', borderColor: '#000' ,cursor: 'pointer'}}
                  onClick={() => handleGameClick(game.nav)}
                >
                  {game.name}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Games;
