// CirclePercentage.jsx
import React from 'react';

// Jordanian flag colors
const colors = {
  red: '#CE1126',
  white: '#FFFFFF',
  black: '#000000',
  green: '#007A3D',
};

const CirclePercentage = ({ percentage, title, subtitle }) => (
  <div className="flex flex-col items-center">
    <div className="relative w-24 h-24">
      <svg className="absolute inset-0 w-full h-full transform rotate-[-90deg]" viewBox="0 0 36 36">
        <path
          className="text-gray-200"
          fill="none"
          strokeWidth="4"
          strokeLinecap="round"
          d="M18 2.0845a16 16 0 0 1 0 31.8315A16 16 0 0 1 18 2.0845"
        />
        <path
          className="text-blue-500"
          fill="none"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={`${percentage} ${100 - percentage}`}
          d="M18 2.0845a16 16 0 0 1 0 31.8315A16 16 0 0 1 18 2.0845"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-semibold">{percentage}%</span>
      </div>
    </div>
    <div className="text-center mt-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-500">{subtitle}</p>
    </div>
  </div>
);

export default CirclePercentage;
