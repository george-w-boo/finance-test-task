import React, { useEffect } from 'react';
import { io } from "socket.io-client";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Main.scss';


export const Main = (props) => {
  useEffect(() => {
    const newSocket = io(`http://localhost:4000`);
    newSocket.emit('start');
    newSocket.on('ticker', response => console.log(response))
  });

  return (
    <main className="main">
      <Container className="main__wrapper">
        <Row>
          <Col sm>Apple</Col>
          <Col sm>Alphabet</Col>
          <Col sm>Microsoft</Col>
        </Row>
        <Row>
          <Col sm>Amazon</Col>
          <Col sm>Facebook</Col>
          <Col sm>Tesla</Col>
        </Row>
      </Container>
    </main>
  );
};
