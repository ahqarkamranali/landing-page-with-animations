import Carousel from 'react-multi-carousel';
import { Container, Row, Col } from 'react-bootstrap';
import 'react-multi-carousel/lib/styles.css';
import meter1 from '../assets/img/meter1.png';
import meter2 from '../assets/img/meter2.png';
import meter3 from '../assets/img/meter3.png';
import meter4 from '../assets/img/meter4.png';
import meter5 from '../assets/img/meter5.png';
import colorSharp from '../assets/img/color-sharp.png';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container fluid="true">
        <Row>
          <Col>
            <div className="skill-bx">
              <h2> Skills</h2>
              <p>
                lorem ipsum is simply a dummy text for printing and typesetting
                industry. <br /> lorem ipsum is simply a dummy text for printing
                and typesetting industry.
              </p>
              <Carousel
                responsive={responsive}
                infinite="true"
                className=""
                skill-slider
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </div>

                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Brad Development</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Guest Posting</h5>
                </div>

                <div className="item">
                  <img src={meter4} alt="Image" />
                  <h5>Graphic Designing</h5>
                </div>

                <div className="item">
                  <img src={meter5} alt="Image" />
                  <h5>React Web Development</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-left" src={colorSharp} /> */}
    </section>
  );
};
