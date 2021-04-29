import React from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import "./Image.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFComponent = (props) => {
  const { file } = props;

  return (
    <div className="PDFStandard">
      <Document
        file={file}
        options={{ workerSrc: pdfjs.GlobalWorkerOptions.workerSrc }}
      >
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};
export default PDFComponent;
