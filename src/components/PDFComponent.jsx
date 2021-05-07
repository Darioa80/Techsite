import React from "react";

import { Document, Page } from "react-pdf";

import { pdfjs } from "react-pdf";
import "./Image.css";

/*const styles = StyleSheet.create({
  page: {
    borderColor: "#212529",
    "@media max-width: 500": {
      width: "90%",
    },
  },
});*/

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFComponent = (props) => {
  const { file } = props;

  return (
    <div className="PDFDiv">
      <Document
        file={file}
        options={{ workerSrc: pdfjs.GlobalWorkerOptions.workerSrc }}
      >
        <Page pageNumber={1} className="PDFPage" />
      </Document>
    </div>
  );
};
export default PDFComponent;
