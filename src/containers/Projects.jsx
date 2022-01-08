import React from "react";
import { Container } from "react-bootstrap";
import CardsProjects from "../components/CardsProjects";
import acsyos from "../asset/projects/acsyos.png";
import cosmos from "../asset/projects/cosmos.png";
import steven from "../asset/projects/steven.png";
import journal from "../asset/projects/journal.png";

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
      nameProject: "STEVEN",
      linkImage: steven,
      description:
        "A web application for the management of questions and anwers of patients and more.",
    },
    {
      number: 4,
      nameProject: "JOURNAL",
      linkImage: journal,
      description: "A web application for the write your tasks during year.",
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
