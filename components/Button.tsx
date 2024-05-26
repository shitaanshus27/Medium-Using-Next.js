"use client";
import React from "react";
interface ButtonProps {
  Text: string;
}
const Button: React.FC<ButtonProps> = ({ Text }) => {
  function handler() {}

  return (
    <div>
      {" "}
      <button
        type="button"
        onClick={handler}
        className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
      >
        {Text}
      </button>
    </div>
  );
};

export default Button;
