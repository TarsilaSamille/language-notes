import React from 'react';
import { Container, Row, Col } from "reactstrap";


const History = () => {

  return (
    <section className="section" id="history">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="title font-bold mb-4 mt-5  text-3xl text-gray-900">História</h3>
              <p className="text-muted">Conheça mais sobre a Técnica</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h2 className="font-weight-light line-height-1_6 text-dark mb-4">A Técnica de Feynman é um modelo mental para compartilhamento de informações de maneira simples, coerente e direta que até uma criança entende</h2>
          </Col>
          <Col md={{ size:7, offset :1 }}>
            <Row>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-3">Richard Phillips Feynman</h6>
                <p className="text-muted font-weight-light">Richard Phillips Feynman (Nova Iorque, 11 de maio de 1918 — Los Angeles, 15 de fevereiro de 1988) foi um físico teórico norte-americano do século XX.</p>
              </Col>
              <Col md={6}>
                <p className="text-muted font-weight-light">“Se você se escutar dizendo: ‘Acho que entendi isso’, significa que não entendeu.” </p>
                <h6 className="text-dark text-right font-weight-light f-20 mb-3">- Richard Feynman</h6>

              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default History;