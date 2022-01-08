import React from "react";
import { Row } from "react-bootstrap";
import { ColProjects } from "./ColProjects";

const CardsProjects = ({ data }) => {
  const row = [];

  const Rows = ({ children, key }) => {
    return (
      <Row key={key}>
        {children.map((child, index) => (
          <ColProjects
            key={index}
            number={child.number}
            nameProject={child.nameProject}
            linkImage={child.linkImage}
            description={child.description}
          />
        ))}
      </Row>
    );
  };

  const createRows = (dataCol) => {
    const result = (dataCol.length / 2).toFixed();

    for (let index = 0; index < result; index++) {
      row.push(
        Rows({ children: dataCol.slice(index * 2, index * 2 + 2), key: index })
      );
    }
    return row;
  };

  return createRows(data);
};

export default CardsProjects;
