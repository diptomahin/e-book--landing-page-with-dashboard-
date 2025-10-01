import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

// Worker for pdfjs-dist v5.x
import pdfWorker from "pdfjs-dist/build/pdf.worker.mjs?url";
pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;
import { useState } from "react";
const Preview = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  // Example: preview book1.pdf from backend
  const pdfUrl = "http://localhost:5000/api/ebooks/preview/preview1.pdf";

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <section id="preview" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl text-black md:text-5xl font-bold text-center mb-4">
          Preview the eBook
        </h2>
        <p className="text-center text-black mb-12">
          Flip through a few pages before purchasing
        </p>

        <div className="bg-slate-800 rounded-2xl overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4">
            <div className="flex items-center justify-between text-white">
              <span className="font-semibold">
                Page {pageNumber} of {numPages || "…"}
              </span>
              <span className="text-sm">Preview Version</span>
            </div>
          </div>

          {/* PDF Preview */}
          <div className="flex justify-center bg-white p-4 min-h-[500px]">
            <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
              <Page pageNumber={pageNumber} width={600} />
            </Document>
          </div>

          {/* Controls */}
          <div className="bg-slate-800 p-4 flex justify-between items-center">
            <button
              onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}
              disabled={pageNumber === 1}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600 transition"
            >
              Previous
            </button>
            <div className="flex gap-2">
              {Array.from(new Array(numPages), (el, index) => (
                <button
                  key={index}
                  onClick={() => setPageNumber(index + 1)}
                  className={`w-3 h-3 rounded-full transition ${
                    index + 1 === pageNumber ? "bg-blue-500" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setPageNumber(Math.min(numPages, pageNumber + 1))}
              disabled={pageNumber === numPages}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600 transition"
            >
              Next
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <a href="#checkout">
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-3 rounded-full font-bold text-white hover:shadow-lg hover:shadow-blue-500/50 transition transform hover:scale-105">
              Get Full Access Now
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Preview;
