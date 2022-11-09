import React from 'react';
import { Container, Row, Col } from "reactstrap";

const Steps = () => {
  const Stepss = [
    { title : "1ª", desc : "Escolha um assunto (ou conceito)" },
    { title : "2ª", desc : "Ensine a alguém" },
    { title : "3ª", desc : "Identifique as falhas na própria compreensão" },
    { title : "4ª", desc : "Revise, organize e simplifique" },
  ]
  
  return (
    <section className="section" id="steps">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-2">
              <h3 className="font-weight-normal text-dark"><span className="title font-bold mb-4 mt-5  text-3xl text-gray-900">Etapas</span></h3>
              <p className="text-muted">A técnica acontece em torno de 4 etapas</p>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {
            Stepss.map((Steps, key) =>
              <Col key={key} lg={6} md={6} className="text-center">
                <div>
                  <div className="mb-5">
                      <i className={Steps.icon}></i>
                  </div>
                  <h5 className="text-dark font-weight-bold pt-1 mb-4">{Steps.title}</h5>
                  <p className="font-bold mb-4">{Steps.desc}</p>
                </div>
              </Col>
            )
          }
        </Row>
      </Container>
    </section>
  );
}

export default Steps;