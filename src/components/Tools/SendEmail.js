import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function SendEmail() {
  const [email, setEmail] = useState("");
  const [emailList, setEmailList] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");

  const handleSendEmail = () => {
    console.log("Email:", email);
    console.log("Email List:", emailList);
    console.log("Subject:", subject);
    console.log("Content:", content);
  };

  return (
    <Container fluid className="project-section">
      <Container>
        <Row>
          <Col md={4}>
            <h3>Đăng nhập email</h3>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Nhập email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Đăng nhập
              </Button>
            </Form>
          </Col>
          <Col md={4}>
            <h3>Danh sách email cần gửi</h3>
            <Form>
              <Form.Group controlId="formBasicEmailList">
                <Form.Label>Danh sách email</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Nhập danh sách email cần gửi, mỗi email cách nhau bằng dấu phẩy hoặc xuống dòng"
                  rows={5}
                  value={emailList}
                  onChange={(e) => setEmailList(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Col>
          <Col md={4}>
            <h3>Nội dung email</h3>
            <Form>
              <Form.Group controlId="formBasicSubject">
                <Form.Label>Chủ đề</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nhập chủ đề"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicContent">
                <Form.Label>Nội dung</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Nhập nội dung email"
                  rows={5}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <Button variant="primary" onClick={handleSendEmail}>
              Gửi Email Hàng Loạt
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default SendEmail;
