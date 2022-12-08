import React from "react";

const Button = (props) => {
  return (
    <button
      className="bg-green-700 px-5 py-2 text-lg font-semibold rounded-lg hover:bg-green-600 text-white"
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
