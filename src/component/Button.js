import React from "react";

const Button = ({ button }) => {
  return (
    <div>
      <button className="px-2 py-1 bg-slate-100 mx-1 rounded-lg">
        {button}
      </button>
    </div>
  );
};

export default Button;
