import React from "react"
import { Container, Row, Col } from "reactstrap"

const FeatureBox = (props) => {
  return (
    <>
      {props.features.map((feature, key) =>
        feature.id % 2 !== 0 ? (
          <Row
            key={key}
            className={
              feature.id === 1
                ? "align-items-center"
                : "align-items-center mt-5"
            }
          >
            <Col md={3}>
              <div>
                <img
                  src={feature.img}
                  alt=""
                  className="img-fluid d-block mx-auto rounded-circle"
                />
              </div>
            </Col>
            <Col md={{ size: 8, offset: 1 }}>
              <div className="mt-5 mt-sm-0 mb-4">
                <div className="my-4">
                  <i className={feature.icon}></i>
                </div>
                <h5 className="text-dark font-weight-normal mb-3 pt-3">
                  {feature.title}
                </h5>
                <p className="text-muted mb-3 f-15">{feature.desc}</p>
                <a href={feature.link} className="f-16">
                  Saiba mais <span className="right-icon ml-2">&#8594;</span>
                </a>
              </div>
            </Col>
          </Row>
        ) : (
          <Row key={key} className="align-items-center mt-5">
            <Col md={8}>
              <div className="mb-4">
                <div className="my-4">
                  <i className="mdi mdi-account-group"></i>
                </div>
                <h5 className="text-dark font-weight-normal mb-3 pt-3">
                  {feature.title}
                </h5>
                <p className="text-muted mb-3 f-15">{feature.desc}</p>
                <a href={feature.link} className="f-16">
                  Saiba mais <span className="right-icon ml-2">&#8594;</span>
                </a>
              </div>
            </Col>
            <Col md={{ size: 3, offset: 1 }} className="mt-5 mt-sm-0">
              <div>
                <img
                  src={feature.img}
                  alt=""
                  className="img-fluid d-block mx-auto rounded-circle"
                />
              </div>
            </Col>
          </Row>
        ),
      )}
    </>
  )
}

const Team = () => {
  const features = [
    {
      id: 1,
      img: "/assets/img/tarsila.jpg",
      title: "Társila Samille",
      desc: "Estudante do BTI desde 2019",
      link: "https://github.com/tarsilasamille",
    },
  ]

  return (
    <section className="section" id="team">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-3">
              <h3 className="font-weight-normal text-dark">
                <span className="title font-bold mb-4 mt-5  text-3xl text-gray-900">
                  Equipe
                </span>
              </h3>
              <p className="text-muted">Oi</p>
            </div>
          </Col>
        </Row>
        <FeatureBox features={features} />
      </Container>
    </section>
  )
}

export default Team
