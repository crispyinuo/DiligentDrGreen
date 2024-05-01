import * as React from "react";
import Edit from "../icons/edit.png";

function CircleButton() {
  return (
    <div className="flex justify-center items-center px-5 bg-lime-300 shadow-2xl h-[60px] rounded-[90px] w-[60px]">
      <img
        loading="lazy"
        src={Edit}
        className="w-full aspect-square"
      />
    </div>
  );
}

export default CircleButton;

