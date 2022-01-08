import React from "react";
import { Col, Card, Image } from "react-bootstrap";

export const ColProjects = ({
  number,
  nameProject,
  description,
  linkImage,
}) => {
  return (
    <Col>
      <Card
        className="text-center col-md-12"
        style={{ backgroundColor: "transparent" }}
      >
        <Card.Body>
          <h1
            style={{
              color: "white",
              fontFamily: `Montserrat,sans-serif`,
              fontWeight: 600,
              fontSize: "2.5rem",
            }}
          >
            Project {number}
          </h1>
          <h2
            style={{
              color: "white",
              fontFamily: `Montserrat,sans-serif`,
              fontWeight: 500,
              fontSize: "2.23286rem",
            }}
          >
            {nameProject}
          </h2>
          <Image
            style={{
              objectFit: "cover",
              width: "100%",
              height: "22vw",
            }}
            rounded={true}
            src={
              linkImage
                ? linkImage
                : "https://history-computer.com/ModernComputer/Software/images/linus.jpg"
            }
          />
          <Card.Text
            style={{
              fontFamily: `Merriweather,Georgia, sans-serif`,
              fontWeight: 400,
              fontSize: "1.6rem",
              color: "white",
            }}
          >
            {description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};
