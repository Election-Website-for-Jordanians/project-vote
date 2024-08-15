import React from 'react';

export const Card = ({ children }) => (
  <div className="border rounded-lg shadow-md p-4 bg-white">
    {children}
  </div>
);

export const CardHeader = ({ children, className }) => (
  <div className={`border-b pb-2 mb-2 ${className}`}>
    {children}
  </div>
);

export const CardContent = ({ children }) => (
  <div className="pt-2">
    {children}
  </div>
);

export const CardTitle = ({ children, className }) => (
  <h2 className={`text-lg font-semibold ${className}`}>
    {children}
  </h2>
);
