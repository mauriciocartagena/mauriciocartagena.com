import React from "react";
import { Container } from "react-bootstrap";
import CardsProjects from "../components/CardsProjects";
import acsyos from "../asset/projects/acsyos.png";
import cosmos from "../asset/projects/cosmos.png";

const Projects = () => {
  const myProjects = [
    {
      number: 1,
      nameProject: "ACSYOS",
      linkImage: acsyos,
      description:
        "A web application for the management entry and exit of visitors and vehicles and more.",
    },
    {
      number: 2,
      nameProject: "COSMOS",
      linkImage: cosmos,
      description:
        "A web application for the management of the products, partners,videos and more.",
    },
    {
      number: 3,
      nameProject: "Name Project 3",
      linkImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlZSLcwBcc0jNAUzTfU-WdAu3RL9K-v2xj1Q&usqp=CAU",
      description: "Description",
    },
    {
      number: 4,
      nameProject: "Name Project 4",
      linkImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlZSLcwBcc0jNAUzTfU-WdAu3RL9K-v2xj1Q&usqp=CAU",
      description: "Description",
    },
    {
      number: 5,
      nameProject: "Name Project 5",
      linkImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlZSLcwBcc0jNAUzTfU-WdAu3RL9K-v2xj1Q&usqp=CAU",
      description: "Description",
    },
  ];

  return (
    <Container fluid="sm">
      <Container className="text-center col-md-12">
        <h1
          style={{
            color: "white",
            fontFamily: `Montserrat,sans-serif`,
            fontWeight: 600,
            fontSize: "2.5rem",
          }}
        >
          MY PROJECTS
        </h1>

        <h3
          style={{
            fontStyle: "italic",

            fontFamily: `Merriweather,Georgia,serif`,

            color: "white",
          }}
        >
          A showcase of my projects and my abilities.
        </h3>
      </Container>

      <CardsProjects data={myProjects} />
    </Container>
  );
};
export default Projects;
