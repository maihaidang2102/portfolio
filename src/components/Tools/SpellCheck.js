import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { spellCheck } from "wink-nlp-utils";

function SpellCheck() {
  const [inputText, setInputText] = useState("");
  const [errors, setErrors] = useState([]);
  const [correctedText, setCorrectedText] = useState("");

  const handleCheckSpell = () => {
    const words = inputText.split(/\s+/);
    const sampleErrors = words.filter((word) => !spellCheck(word, "vi"));

    if (sampleErrors.length === 0) {
      setCorrectedText("Tuyệt vời! Văn bản bạn không có lỗi chính tả.");
      setErrors([]);
    } else {
      setErrors(sampleErrors);
      setCorrectedText("Nội dung cần sửa lại sau khi kiểm tra:");
    }
  };

  return (
    <Container fluid className="project-section">
      <Container>
        <Row>
          <Col>
            <Form.Group>
              <Form.Control
                as="textarea"
                rows={5}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Nhập văn bản cần kiểm tra..."
              />
            </Form.Group>
            <Button onClick={handleCheckSpell}>Check</Button>
            {errors.length > 0 && (
              <div>
                <p>Lỗi chính tả:</p>
                <ul>
                  {errors.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </div>
            )}
            <div>
              <p>{correctedText}</p>
              <Form.Control
                as="textarea"
                rows={5}
                value={correctedText}
                readOnly
              />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default SpellCheck;
