import React from "react";
import { Container } from "react-bootstrap";
import CardsProjects from "../components/CardsProjects";

const Projects = () => {
  const myProjects = [
    {
      number: 1,
      nameProject: "Name Project 1",
      linkImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlZSLcwBcc0jNAUzTfU-WdAu3RL9K-v2xj1Q&usqp=CAU",
      description: "Description",
    },
    {
      number: 2,
      nameProject: "Name Project 2",
      linkImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlZSLcwBcc0jNAUzTfU-WdAu3RL9K-v2xj1Q&usqp=CAU",
      description: "Description",
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
