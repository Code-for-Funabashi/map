import React, { FC } from "react";
import { Link } from "react-router-dom";

import classGen from "./../scripts/className";

const Header: FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-16 border-b-2 border-blue-500">
      <div className="inner flex h-full items-center">
        <h1 className="text-xl md:text-2xl font-bold mr-auto">
          船橋子育て地域マップ
        </h1>
        <LinkButton to="/map/kosodate">マップを見る</LinkButton>
      </div>
    </header>
  );
};
export default Header;

const LinkButton: FC<{ to: string; className?: string }> = (props) => {
  let { to, className = "", children } = props;
  const defaultClass =
    "inline-block px-2 py-1 border border-black rounded-md transition-colors duration-300";
  const hoverClass = "text-gray-900 border-gray-900 bg-gray-50";
  const activeClass = "text-gray-800 border-gray-800 bg-gray-100";
  className = classGen(defaultClass, hoverClass, activeClass) + " " + className;
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};
