function ResumePage() {
  return (
    <a
      href="/public/Adam_Nguyen_Resume_2024.pdf"
      download="Adam_Nguyen_Resume_2024"
    >
      Download the pdf
    </a>
  );
}
export default ResumePage;

// import { Document, Page } from "react-pdf";
// import { pdfjs } from "react-pdf";

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   "pdfjs-dist/build/pdf.worker.min.js",
//   import.meta.url
// ).toString();
// function NotWorking() {
//   // The path is relative to the public directory
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);
//   function onDocumentSuccess() {
//     setNumPages(numPages);
//   }
//   return (
//     <div>
//       <Document
//         file="./Adam_Nguyen_Resume_2024.pdf"
//         onLoadSuccess={onDocumentSuccess}
//       >
//         <Page pageNumber={pageNumber} />
//       </Document>
//     </div>
//   );
// }
