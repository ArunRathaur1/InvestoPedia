import React from 'react';
import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/2BOGqgbhmcZSb0CH/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      {/* Overlay for Better Text Visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold">
          Your Gateway to Investment Insights
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl">
          Explore authentic resources on trading, investment strategies, and
          commerce trends to make informed financial decisions.
        </p>
        <div className="mt-6">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
            Get Started
          </button>
          <button className="ml-4 bg-white text-blue-600 px-6 py-3 rounded-lg shadow border border-blue-600 hover:bg-gray-200 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
