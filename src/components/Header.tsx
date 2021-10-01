import React, { FC } from "react";
import { Link } from "react-router-dom";

import Button from "./Button";

const Header: FC = () => {
  return (
    <header className="fixed top-0 left-0 bg-white w-full h-16 border-b-2 border-blue-500 z-40">
      <div className="inner flex h-full items-center">
        <h1 className="text-xl md:text-2xl font-bold mr-auto">
          船橋子育て地域マップ
        </h1>
        <Link to="/map/kosodate">
          <Button color="black">マップを見る</Button>
        </Link>
      </div>
    </header>
  );
};
export default Header;
