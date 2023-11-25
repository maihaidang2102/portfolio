import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./MiniGame.css";

function CaroGame() {
  const [board, setBoard] = useState(() => {
    const initialBoard = Array.from({ length: 15 }, () => Array(20).fill(null));
    return initialBoard;
  });
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const handleRestart = () => {
    setBoard(Array.from({ length: 15 }, () => Array(20).fill(null)));
    setCurrentPlayer("X");
    setWinner(null);
    setGameOver(false);
  };
  

  useEffect(() => {
    checkWinner();
  }, [board]);

  useEffect(() => {
    checkWinner();
    if (winner) {
      setGameOver(true);
    }
  }, [board, winner]);

  const handleClick = (row, col) => {
    if (!board[row][col] && !winner) {
      const newBoard = board.map((rowArray, rowIndex) =>
        rowArray.map((cell, colIndex) =>
          rowIndex === row && colIndex === col ? currentPlayer : cell
        )
      );
      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  const checkWinner = () => {
    // Logic kiểm tra người chơi thắng
    for (let i = 0; i < 15; i++) {
      for (let j = 0; j < 15; j++) {
        if (
          board[i][j] &&
          ((board[i][j] === board[i][j + 1] &&
            board[i][j] === board[i][j + 2] &&
            board[i][j] === board[i][j + 3] &&
            board[i][j] === board[i][j + 4]) ||
            (board[i][j] === board[i + 1]?.[j] &&
              board[i][j] === board[i + 2]?.[j] &&
              board[i][j] === board[i + 3]?.[j] &&
              board[i][j] === board[i + 4]?.[j]) ||
            (board[i][j] === board[i + 1]?.[j + 1] &&
              board[i][j] === board[i + 2]?.[j + 2] &&
              board[i][j] === board[i + 3]?.[j + 3] &&
              board[i][j] === board[i + 4]?.[j + 4]) ||
            (board[i][j] === board[i + 1]?.[j - 1] &&
              board[i][j] === board[i + 2]?.[j - 2] &&
              board[i][j] === board[i + 3]?.[j - 3] &&
              board[i][j] === board[i + 4]?.[j - 4]))
        ) {
          setWinner(board[i][j]);
        }
      }
    }
  };

  const renderBoard = () => {
    return board.map((row, rowIndex) => (
      <Row key={rowIndex}>
        {row.map((cell, colIndex) => (
          <Col className="maihaidang" key={colIndex}>
            <Button
              className="cell maihaidang"
              onClick={() => handleClick(rowIndex, colIndex)}
              disabled={cell !== null || winner !== null}
            >
              {cell}
            </Button>
          </Col>
        ))}
      </Row>
    ));
  };

  return (
    <Container fluid className="project-section">
      <Container>
        <h1 style={{ color: 'white' }}>Cờ Caro</h1>
        {renderBoard()}
        <div className="game-over">
        {winner && <p>{`${winner} thắng!`}</p>}
        {gameOver && (
        <div>
          <p>Trò chơi kết thúc!</p>
          <Button onClick={handleRestart}>Chơi lại</Button>
        </div>
      )}
      </div>
      </Container>
    </Container>
  );
}

export default CaroGame;
