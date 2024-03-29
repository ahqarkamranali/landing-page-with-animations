import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import '../App.css';
import colorSharp2 from '../assets/img/color-sharp2.png';
import projImg1 from '../assets/img/proj-img1.jpg';
import projImg2 from '../assets/img/proj-img2.jpg';
import projImg3 from '../assets/img/proj-img3.jpg';
import projImg4 from '../assets/img/proj-img4.jpg';
import projImg5 from '../assets/img/proj-img5.jpg';
import projImg6 from '../assets/img/proj-img6.jpg';

export const Projects = () => {
  const projects = [
    {
      title: 'Business Title',
      description: 'Design & Development',
      imgUrl: projImg1,
    },
    {
      title: 'Business Title',
      description: 'Design & Development',
      imgUrl: projImg2,
    },
    {
      title: 'Business Title',
      description: 'Design & Development',
      imgUrl: projImg3,
    },
    {
      title: 'Business Title',
      description: 'Design & Development',
      imgUrl: projImg4,
    },
    {
      title: 'Business Title',
      description: 'Design & Development',
      imgUrl: projImg5,
    },
    {
      title: 'Business Title',
      description: 'Design & Development',
      imgUrl: projImg6,
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              lorem ipsum is simply a dummy text for printing and typesetting
              industry. <br /> lorem ipsum is simply a dummy text for printing
              and typesetting industry.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="second">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="#pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      console.log(project);
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Lorem ipsum</Tab.Pane>
                <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      {/* <img
        src={colorSharp2}
        className="background-image-right"
        alt="background for projects"
      /> */}
    </section>
  );
};
