import React from "react";

const Title = ({ title }) => {
  return (
    <div>
      <div className="py-2 px-3 gap-3 rounded-full bg-buttonBlue flex justify-center items-center  w-fit">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <circle cx="20" cy="20" r="20" fill="#F4CB3C" />
          </svg>
        </div>
        <h1 className="text-white font-medium text-lg">{title}</h1>
      </div>
    </div>
  );
};

export default Title;
