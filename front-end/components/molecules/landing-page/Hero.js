import React from "react"
import { Container, Row, Col } from "reactstrap"
import Router from "next/router"
import { Button } from "../input"

const Hero = () => {
  return (
    <section className="section position-relative">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              <p className="font-weight-medium f-14 mb-1 font-bold text-5xl text-gray-900">
                Language Notes
              </p>
              <h1 className="mb-4 font-weight-normal line-height-1_4 mb-5">
                aprenda lendo
              </h1>
              <p className="text-muted mb-4 pb-2">
                Uma aplicação web para que estudantes de linguagens possam
                postar artigos, infográficos e mapas mentais dos tópicos que
                estão aprendendo, recebendo feedback de erros e acertos, as
                anotações ficam disponíveis para outros estudantes.
              </p>
              <Button
                name2={`Login`}
                onClick2={() => Router.push("/login-page")}
                icon="&#8594;"
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className=" mt-lg-0">
              <img
                src="/assets/img/home.jpg"
                alt=""
                className="img-fluid mx-auto d-block"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
