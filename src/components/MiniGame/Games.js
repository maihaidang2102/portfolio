import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Container, Row, Col,Form, ListGroup,Button  } from "react-bootstrap";

const Games = () => {
    const navigate = useNavigate();
    const games = [
        { name: "Cờ Caro", nav: "caro" },
        { name: "Khủng Long", nav: "null" },
        { name: "Đua xe", nav: "null" }
      ];
  const tools = [
    { name: "Gửi Email Hàng Loạt", nav: "sendEmail" },
    { name: "Ghi Chú", nav: "note" },
    { name: "Sửa lỗi chính tả", nav: "game3" }
  ];

  const [suggestion, setSuggestion] = useState("");

  const handleGameClick = (nav) => {
    if(nav !== "null"){
        navigate(`/${nav}`);
    }else{
        alert("Chức năng này đang được Mai Hải Đăng phát triển");
    }
  };

  const handleSuggestionSubmit = () => {
    // Xử lý logic khi người dùng nhấn nút Gửi
    console.log("Đề xuất của người dùng:", suggestion);
    // Gửi dữ liệu đề xuất đi hoặc xử lý theo nhu cầu của bạn ở đây
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
          <div style={{ marginTop: "20px", color: "white" }}>
              <p>Hãy đề xuất game hoặc tính năng cho Đăng:</p>
              <Form.Control
                type="text"
                placeholder="Nhập đề xuất của bạn"
                value={suggestion}
                onChange={(e) => setSuggestion(e.target.value)}
              />
              <Button className="mt-3" onClick={handleSuggestionSubmit}>Gửi</Button>
            </div>
        </Row>
      </Container>
    </Container>
  );
};

export default Games;
