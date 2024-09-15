import React, { useState } from "react";

function About() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAbout = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative bg-white rounded-lg shadow-lg bg-gradient-to-tl from-cyan-300 to-purple-200 w-11/12 sm:w-96 mt-10 mb-8 p-4 sm:p-6 h-[90vh] sm:h-[85vh] overflow-hidden flex flex-col items-center justify-center">
        {!isOpen && (
          <button
            className="bg-black text-white text-2xl mt-4 h-12 font-bold py-2 px-6 rounded-lg cursor-pointer transition-colors duration-300 hover:bg-gray-700"
            onClick={toggleAbout}
          >
            Click Me
          </button>
        )}

        <div
          className={`absolute inset-0 flex items-center h-full mt-72 justify-center bg-white rounded-3xl shadow-lg transition-transform duration-500 ease-in-out flex-col p-5 ${
            isOpen
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          }`}
        >
          <div className="flex flex-col items-center justify-center w-full h-full p-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Fruit.Ai
            </h2>
            <p className="text-gray-700 text-sm">
              Whether you're looking to discover new fruits, understand their
              nutritional values, or find the perfect fruit for your diet, our
              AI-driven chatbot is here to assist. We provide personalized fruit
              recommendations tailored to your health needs, making it easier
              for you to integrate the best fruits into your daily routine.
            </p>
            <button
              className="bg-black text-white mb-72 py-2 px-4 rounded-xl mt-4 text-lg transition-colors duration-300 hover:bg-gray-700"
              onClick={toggleAbout}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
