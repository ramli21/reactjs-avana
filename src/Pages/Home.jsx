import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <Container>
      <Row>
        <Col md={3}>
          <span className="dummy-content"></span>
        </Col>
        <Col md={{ span: 3, offset: 4 }}>
          <span className="dummy-content"></span>
        </Col>
        <Col md={2}>
          <span className="dummy-content"></span>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={4}>
          <span className="dummy-content"></span>
        </Col>
        <Col md={{ span: 3, offset: 2 }}>
          <span className="dummy-content"></span>
        </Col>
        <Col md={3}>
          <span className="dummy-content"></span>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md={6}>
          <span className="dummy-content"></span>
        </Col>
        <Col md={6}>
          <Row>
            <Col md={6}>
              <span className="dummy-content square"></span>
            </Col>
            <Col md={6}>
              <span className="dummy-content square"></span>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col md={6}>
              <span className="dummy-content square"></span>
            </Col>
            <Col md={6}>
              <span className="dummy-content square"></span>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md={6}>
          <span className="dummy-content h-lg"></span>
        </Col>
        <Col md={6}>
          <span className="dummy-content h-lg"></span>
        </Col>
      </Row>
    </Container>
  )
}

export default Home;
