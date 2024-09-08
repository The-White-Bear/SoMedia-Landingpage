// Import React and necessary hooks
import React, { useEffect, useState } from "react";
// Import necessary components and styles
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css"; // Make sure this includes the CSS for animations
import { FaArrowCircleRight } from "react-icons/fa";
import home9 from "../../assets/images/home9.jpg";
// Import your data or any other components you need
import { dataabout, meta, departments } from "../../content_option";
import FocusRing from "../../components/focusring"; // Import the FocusRing component
// Define the About component
export const About = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const background = document.querySelector('.backgroundvideo img');
      const blur = scrollPosition * 0.015; // Làm mờ ảnh
      background.style.filter = `blur(${blur}px) brightness(0.6)`; // Làm mờ ảnh
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // State to control when animations are added
  const [isAnimated, setIsAnimated] = useState(false);

  // Use useEffect to trigger animations when component mounts
  useEffect(() => {
    setIsAnimated(true);
  }, []);

  return (
    <HelmetProvider>
      <FocusRing />

      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <div className="backgroundvideo grain">
          <img loading="lazy" src={home9} alt="background" />

        </div>
        <Row className={`mb-0 mt-3 pt-md-3 ${isAnimated ? "slide-in-left" : ""}`} style={{ alignItems: 'baseline' }}>
          <Col lg="6">
            <h1 className="display-4 mb-4" style={{ textAlign: "left" }}>About us</h1>
          </Col>
          <Col lg="6" className="text-right">
            <Link to="/traditionalroom" className="text_2">
              <div id="button_p" className="ac_btn btn d-flex justify-content-end">
                <div className="ring one"></div>
                <div className="ring two"></div>
                <div className="ring three"></div>
                <span className="buttontext">To Traditional Room <FaArrowCircleRight /></span>
              </div>
            </Link>
          </Col>
        </Row>
        <hr className="mt-3"></hr>
        {/* Additional content sections with animations */}
        <Row className={`sec_sp ${isAnimated ? "slide-in-right" : ""}`} style={{ marginTop: '10px', marginBottom: '20px' }}>
          <Col lg="4">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="8" className="d-flex align-items-center">
            <div>
              <p className="breakword">{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <Row className={`sec_sp ${isAnimated ? "slide-in-left" : ""}`} style={{ marginTop: '10px', marginBottom: '20px' }}>
          <Col lg="4">
            <h3 className="color_sec py-4">Goals</h3>
          </Col>
          <Col lg="8">
            <p className="breakword">{dataabout.goals}</p>
          </Col>
        </Row>
        <Row className={`sec_sp ${isAnimated ? "slide-in-right" : ""}`}>
          <Row>
            <h3 className="color_sec py-4">4 Department</h3>
          </Row>
          <Row>
            <Col lg="6">
              <Card>
                <Card.Img variant="top" src={departments[0].image} />
                <Card.Body>
                  <Card.Title>{departments[0].title}</Card.Title>
                  <Card.Text>{departments[0].description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Row>
      </Container>
    </HelmetProvider>
  );
};