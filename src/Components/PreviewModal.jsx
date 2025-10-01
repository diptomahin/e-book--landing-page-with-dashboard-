import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { X } from "lucide-react";
import { useState } from "react";

// fix worker for pdfjs
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const PreviewModal = ({ showPreview, setShowPreview }) => {
  const [numPages, setNumPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    // limit preview to first 5 pages
    setNumPages(Math.min(numPages, 5));
  };

  return (
    <>
      {showPreview && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-6 flex justify-between items-center">
              <h3 className="text-2xl font-bold">eBook Preview</h3>
              <button
                onClick={() => setShowPreview(false)}
                className="hover:bg-white/20 p-2 rounded-lg transition"
              >
                <X size={24} />
              </button>
            </div>

            {/* PDF Content */}
            <div className="flex-1 overflow-y-auto p-6 bg-white text-gray-800 flex justify-center">
              <Document
                file={`http://localhost:5000/api/ebooks/preview/preview1.pdf`}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={<p>Loading PDF...</p>}
              >
                <Page pageNumber={currentPage} renderTextLayer renderAnnotationLayer />
              </Document>
            </div>

            {/* Footer Navigation */}
            <div className="bg-slate-800 p-4 flex justify-between items-center border-t border-slate-700">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-6 py-2 bg-blue-500 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600 transition"
              >
                Previous
              </button>
              <span className="font-semibold">
                Page {currentPage} / {numPages}
              </span>
              <button
                onClick={() =>
                  setCurrentPage(Math.min(numPages, currentPage + 1))
                }
                disabled={currentPage === numPages}
                className="px-6 py-2 bg-blue-500 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600 transition"
              >
                Next
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default PreviewModal;
