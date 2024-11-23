// src/pages/SuccessPage.tsx
import React from "react";

const SuccessPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-[#5D4A82] mb-4">Success!</h1>
        <p className="text-gray-600 mb-6">
          Your appointment has been successfully scheduled.
        </p>
        <a
          href="/"
          className="px-6 py-2 bg-[#5D4A82] text-white rounded-lg hover:bg-[#856BAE] transition-colors"
        >
          Go to Home
        </a>
      </div>
    </div>
  );
};

export default SuccessPage;