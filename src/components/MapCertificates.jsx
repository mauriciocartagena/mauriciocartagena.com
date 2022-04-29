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
import basicoJava from "../asset/certificados-image/basicojavase.webp";
import en from "../asset/certificados-image/en.webp";
import inglesPrincipiante from "../asset/certificados-image/ingles-para-principiantes.webp";
import configuracionEntornoMac from "../asset/certificados-image/prework-configuracion-entorno-mac-.webp";
import desarrolloHabitosCrecimientoPersonal from "../asset/certificados-image/desarrollo-habitos-crecimiento-personal-5739b7cc-6340-439a-aa4a-f9bb3a32058d.webp"
import pooJavaSe from "../asset/certificados-image/poo-java-se.webp"

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
import EstrategiaAprenderInglesPdf from "../asset/certificates/diploma-estrategias-ingles.pdf";
import InglesPrincipiantesPdf from "../asset/certificates/diploma-ingles-principiantes.pdf";
import JavaBasicoPdf from "../asset/certificates/diploma-java-basico.pdf";
import PreworkMacosPdf from "../asset/certificates/diploma-prework-macos.pdf";
import CreacionHabitosPdf from "../asset/certificates/diploma-creacion-habitos.pdf"
import JavaOopPdf from "../asset/certificates/diploma-java-oop.pdf"

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
    {
      image: en,
      pdf: EstrategiaAprenderInglesPdf,
    },
    {
      image: inglesPrincipiante,
      pdf: InglesPrincipiantesPdf,
    },
    {
      image: basicoJava,
      pdf: JavaBasicoPdf,
    },
    {
      image: configuracionEntornoMac,
      pdf: PreworkMacosPdf,
    },
    {
      image: desarrolloHabitosCrecimientoPersonal,
      pdf: CreacionHabitosPdf
    },
    {
      image: pooJavaSe,
      pdf: JavaOopPdf
    }
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
