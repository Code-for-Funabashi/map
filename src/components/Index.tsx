import React, { FC } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";
import Button from "./Button";

const Index: FC = () => {
  return (
    <div>
      <Header />
      <main className="mt-16">
        <section className="relative py-4 overflow-hidden">
          <img
            alt="子育てマップ"
            className="absolute inset-1/2 block min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2 filter blur"
            src="https://code4funabashi.org/application/files/2316/2250/8137/2021-06-01_094147.png"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40" />
          <div className="relative inner">
            <div className="text-center py-16">
              <h2 className="inline-block text-left text-xl md:text-2xl font-bold">
                届け
                <br />
                船橋で子育てをする人、したい人へ
              </h2>
              <div className="mt-4">
                <Link to="/map/kosodate">
                  <Button color="black">マップを見る</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
export default Index;
