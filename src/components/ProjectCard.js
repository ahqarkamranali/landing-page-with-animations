import { Col } from 'react-bootstrap';

export const ProjectCard = ({ title, description, imgUrl }) => {
  console.log(imgUrl);
  return (
    <Col sm={12} md={6} lg={6}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="project description" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
