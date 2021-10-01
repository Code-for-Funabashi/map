import React, { FC } from "react";

interface ButtonInterface {
  className?: string;
  color: "black";
}

const Button: FC<ButtonInterface> = ({ className = "", color, children }) => {
  const baseClass =
    "inline-block px-2 py-1 border rounded-md transition-colors duration-300";
  const colors = {
    black: classGen(
      "text-black border-black bg-white",
      "text-gray-900 border-gray-900 bg-gray-50",
      "text-gray-800 border-gray-800 bg-gray-100"
    ),
  };
  return (
    <div className={baseClass + " " + colors[color] + " " + className}>
      {children}
    </div>
  );
};
export default Button;

type classGenType = {
  (default_class: string, hover_class: string, active_class: string): string;
};

const classGen: classGenType = (default_class, hover_class, active_class) => {
  hover_class = hover_class
    .split(/\s/)
    .map((className) => "hover:" + className)
    .join(" ");
  active_class = active_class
    .split(/\s/)
    .map((className) => "active:" + className)
    .join(" ");
  return default_class + " " + hover_class + " " + active_class;
};
