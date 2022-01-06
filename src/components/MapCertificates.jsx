import React from "react";
import computacionBasica from "../asset/certificados-image/computacion-basica.webp";
import desingForDevelopers from "../asset/certificados-image/desing-para-programadores.webp";
import gestionTiempo from "../asset/certificados-image/gestion-tiempo.webp";
import hablarPublico from "../asset/certificados-image/hablar-publico.webp";
import marcaPersonal from "../asset/certificados-image/marca-personal.webp";
import portafolio from "../asset/certificados-image/portafolio-cv.webp";
import postgreSql from "../asset/certificados-image/postgresql.webp";
import configuracionEntornoWindows from "../asset/certificados-image/prework-configuracion-entorno-windows.webp";
import configuracionLinux from "../asset/certificados-image/prework-linux.webp";
import productividad from "../asset/certificados-image/productividad.webp";
import reactRedux from "../asset/certificados-image/react-redux.webp";
import reactAvanzado from "../asset/certificados-image/reactjs-avanzado.webp";
import ComputerBasicPdf from "../asset/certificates/diploma-computacion-basica.pdf";
import DesignForDevelopersPdf from "../asset/certificates/diploma-desing-programadores.pdf";
import GestionTiempoPdf from "../asset/certificates/diploma-gestion-tiempo.pdf";
import HablarPublicoPdf from "../asset/certificates/diploma-hablar-en-publico.pdf";
import MarcaPersonalPdf from "../asset/certificates/diploma-marca-personal.pdf";
import PortafolioPdf from "../asset/certificates/diploma-portafolios.pdf";
import PostgreSqlPdf from "../asset/certificates/diploma-postgresql.pdf";
import ConfiguracionLinuxPdf from "../asset/certificates/diploma-prework-linux.pdf";
import ConfiguracionEntornoWindowsPdf from "../asset/certificates/diploma-prework-windows.pdf";
import ProductividadPdf from "../asset/certificates/diploma-productividad.pdf";
import ReactAvanzadoPdf from "../asset/certificates/diploma-react-avanzado.pdf";
import ReactReduxPdf from "../asset/certificates/diploma-react-router-redux.pdf";
import "../asset/styles/components/Medals.scss";
import { CardLink } from "./CardLink";

export const MapCertificates = () => {
  const data = [
    {
      image: computacionBasica,
      pdf: ComputerBasicPdf,
    },
    {
      image: desingForDevelopers,
      pdf: DesignForDevelopersPdf,
    },
    {
      image: gestionTiempo,
      pdf: GestionTiempoPdf,
    },
    {
      image: hablarPublico,
      pdf: HablarPublicoPdf,
    },
    {
      image: marcaPersonal,
      pdf: MarcaPersonalPdf,
    },
    {
      image: portafolio,
      pdf: PortafolioPdf,
    },
    {
      image: postgreSql,
      pdf: PostgreSqlPdf,
    },
    {
      image: configuracionEntornoWindows,
      pdf: ConfiguracionEntornoWindowsPdf,
    },
    {
      image: configuracionLinux,
      pdf: ConfiguracionLinuxPdf,
    },
    {
      image: productividad,
      pdf: ProductividadPdf,
    },
    {
      image: reactRedux,
      pdf: ReactReduxPdf,
    },
    {
      image: reactAvanzado,
      pdf: ReactAvanzadoPdf,
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <h2 className="col medals">Certificates</h2>

        <div className="row">
          {data.map((resp, key) => (
            <CardLink key={key} image={resp.image} filePdf={resp.pdf} />
          ))}
        </div>
      </div>
    </div>
  );
};
