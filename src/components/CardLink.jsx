import React from "react";
import { OpenPdf } from "../utils/OpenPdf";

export const CardLink = ({ image, filePdf }) => {
  return (
    <div className="col-3">
      <img
        className="card-img-top"
        target="_blank"
        style={{
          cursor: "pointer",
          backgroundColor: "transparent",
        }}
        onClick={() => {
          OpenPdf({
            filePdf,
          });
        }}
        src={image}
        alt="Certificates"
      />
    </div>
  );
};
