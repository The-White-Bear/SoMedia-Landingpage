import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Projects | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="backgroundvideo">
          <video autoPlay loop style={{ width: '100%', height: '170%', objectFit: 'cover', position: 'absolute', zIndex: '-1' }}>
            <source src="/TVC.mp4" type="video/mp4" />
          </video>
        </div>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Our Projects </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div>
          <br></br><br>
          </br></div>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt="" />
                <div className="content">
                  <p>{data.description}</p>
                  <a href={data.link}>View Project</a>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
