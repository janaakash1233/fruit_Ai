import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen bg-pink-100">
      <div className="rounded-lg shadow-lg bg-gradient-to-b from-cyan-200 to-purple-100 w-11/12 sm:w-96 mt-10 mb-8 p-4 sm:p-6 h-[90vh] sm:h-[85vh] overflow-hidden">
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-4xl font-bold text-white">Fruit.Ai</h1>
          <p className="text-base sm:text-lg pb-8 font-bold text-white">"Be Healthy!"</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <button
            className="bg-yellow-200 rounded-lg shadow-lg px-4 sm:px-6 py-3 h-[12vh] sm:h-[16vh] text-lg sm:text-2xl font-bold text-purple-600"
            onClick={() => navigate('/chatbot')} 
          >
            Chat
          </button>
          <button className="bg-purple-400 rounded-lg shadow-lg blur-md px-4 sm:px-6 py-3 h-[12vh] sm:h-[16vh] text-lg sm:text-2xl font-bold"></button>
          <button className="bg-pink-200 rounded-lg shadow-lg blur-md px-4 sm:px-6 py-3 h-[12vh] sm:h-[16vh] text-lg sm:text-2xl font-bold text-purple-600"></button>
          <button className="bg-green-100 rounded-lg shadow-lg px-4 sm:px-6 py-3 h-[12vh] sm:h-[16vh] text-lg sm:text-2xl font-bold text-cyan-700 flex items-center justify-center"
          onClick={() => navigate('/translator')} 
          >
            Translate
          </button>
          <button className="bg-yellow-100 rounded-lg shadow-lg px-4 sm:px-6 py-3 h-[12vh] sm:h-[16vh] text-lg sm:text-2xl font-bold text-blue-800"
          onClick={() => navigate('/faq')}
          >
            FAQs
          </button>
          <button className="bg-pink-100 rounded-lg shadow-lg px-4 sm:px-6 py-3 h-[12vh] sm:h-[16vh] text-lg sm:text-2xl font-bold text-pink-700"
          onClick={() => navigate('/about')}
          >
            About
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
