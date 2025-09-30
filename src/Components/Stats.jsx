import React from "react";

const Stats = () => {
  return (
    <div>
      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                50+
              </div>
              <p className="text-gray-400">Model Essays</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                30+
              </div>
              <p className="text-gray-400">Practice Tasks</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                500+
              </div>
              <p className="text-gray-400">Success Stories</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                7+
              </div>
              <p className="text-gray-400">Band Score</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stats;
