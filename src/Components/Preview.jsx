import { useState, useRef } from "react";

const Preview = () => {
    const pages = [
        "/preview/preview1_page-0001.jpg",
        "/preview/preview1_page-0002.jpg",
        "/preview/preview1_page-0003.jpg",
        "/preview/preview1_page-0004.jpg",
        "/preview/preview1_page-0005.jpg",
        "/preview/preview1_page-0006.jpg",
        "/preview/preview1_page-0007.jpg",
        "/preview/preview1_page-0008.jpg",
        "/preview/preview1_page-0009.jpg",
        "/preview/preview1_page-0010.jpg",
        "/preview/preview1_page-0011.jpg",
        "/preview/preview1_page-0012.jpg",
        "/preview/preview1_page-0013.jpg",
        "/preview/preview1_page-0014.jpg",
        "/preview/preview1_page-0015.jpg",
        "/preview/preview1_page-0016.jpg",
        "/preview/preview1_page-0017.jpg",
    ];

    const [currentPage, setCurrentPage] = useState(0);
    const containerRef = useRef(null);

    const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, pages.length - 1));
    const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 0));

    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Preview Your eBook
                </h2>
                <p className="text-gray-600 mb-10 text-lg">
                    Flip through a few pages and see what you’ll get before purchasing.
                </p>

                {/* PDF as Image */}
                <div
                    ref={containerRef}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 flex justify-center items-center"
                    style={{ height: "600px" }}
                >
                    <img
                        src={pages[currentPage]}
                        alt={`Page ${currentPage + 1}`}
                        style={{
                            height: "100%", // always fit container height
                            width: "auto",
                            maxWidth: "100%",
                        }}
                    />
                </div>

                {/* Page Navigation */}
                <div className="mt-6 flex justify-center gap-4 flex-wrap">
                    <button
                        onClick={prevPage}
                        disabled={currentPage === 0}
                        className="px-6 py-2 bg-indigo-500 text-white rounded-lg shadow hover:bg-indigo-600 disabled:opacity-50 transition"
                    >
                        Previous
                    </button>
                    <button
                        onClick={nextPage}
                        disabled={currentPage === pages.length - 1}
                        className="px-6 py-2 bg-indigo-500 text-white rounded-lg shadow hover:bg-indigo-600 disabled:opacity-50 transition"
                    >
                        Next
                    </button>
                </div>

                <p className="mt-2 text-gray-500">
                    Page {currentPage + 1} of {pages.length}
                </p>
            </div>
        </section>
    );
};

export default Preview;
