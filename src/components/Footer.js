import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/profile.jpeg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          <div>
            <img src={logo} alt="Logo" style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              objectFit: 'cover',
              objectPosition: 'center 35%', 
            }}/>
          </div>
            
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/turgutefe-aksit-ceng/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="" /></a>
              <a href="https://github.com/Turgutefe-Aksit" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="" /></a>
              <a href="https://www.instagram.com/tur.unki/" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
