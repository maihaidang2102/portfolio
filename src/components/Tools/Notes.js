import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "./Notes.css";

function Notes() {
  const [notes, setNotes] = useState([
    {
      content: "Nội dung ghi chú 1",
      date: new Date().toLocaleDateString(),
      completed: false,
    },
  ]);

  const addNote = () => {
    const newNote = {
      content: "",
      date: new Date().toLocaleDateString(),
      completed: false,
    };
    setNotes([...notes, newNote]);
  };

  const handleNoteChange = (index, e) => {
    const updatedNotes = [...notes];
    updatedNotes[index].content = e.target.value;
    setNotes(updatedNotes);
  };

  const handleSave = () => {
    // Ở đây, bạn có thể lưu 'notes' vào local storage hoặc store của bạn
    console.log("Dữ liệu ghi chú:", notes);
  };

  return (
    <Container fluid className="project-section">
      <Container>
        {notes.map((note, index) => (
          <Row key={index} className="mb-3">
            <Col sm={4}>
              <Form.Control
                as="textarea"
                rows={3}
                value={note.content}
                onChange={(e) => handleNoteChange(index, e)}
              />
            </Col>
            <Col sm={3} style={{ color: 'white' }}>
              <p>{note.date}</p>
            </Col>
            <Col sm={3} style={{ color: 'white' }}>
              <Form.Check
                type="checkbox"
                label="Hoàn thành"
                checked={note.completed}
                onChange={() => {
                  const updatedNotes = [...notes];
                  updatedNotes[index].completed = !updatedNotes[index]
                    .completed;
                  setNotes(updatedNotes);
                }}
              />
            </Col>
          </Row>
        ))}
        <Row>
          <Col>
            <Button className="button-add" onClick={addNote}>+</Button>
          </Col>
          <Col>
            <Button onClick={handleSave}>Lưu</Button>
          </Col>
          <Col>
            <Button onClick={handleSave}>Xóa tất cả</Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Notes;
