import { Container, Row, Col } from 'react-bootstrap';
import { MailChimpForm } from './MailChimpForm';
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.png';
import navIcon2 from '../assets/img/nav-icon2.png';
import navIcon3 from '../assets/img/nav-icon3.png';

export const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row className="align-items-center">
          <MailChimpForm />
          <Col sm={6}>
            <img src={logo} alt="footer-img" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="www.linkedin.com">
                <img src={navIcon1} alt="" />
              </a>
              <a href="www.facebook.com">
                <img src={navIcon2} alt="" />
              </a>
              <a href="www.instagram.com">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <p>Copyright @ 2024 All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
