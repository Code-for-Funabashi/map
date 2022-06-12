import React, { FC, useEffect, useState, useRef } from "react";
import L from "leaflet";
import { useMap } from "react-leaflet";

import Layers from "pages/Index/components/Layers";
import Location from "pages/Index/components/Location/Location";
import About from "pages/Index/components/About/About";

import scss from "./Navigation.module.scss";

const Navigation: FC = () => {
  const map = useMap();

  const [className, setClassName] = useState<string>("");
  const [openMenu, setOpenMenu] = useState<boolean>(true);
  const [navHeight, setNavHeight] = useState<number>(300);
  const Nav = useRef<HTMLDivElement>(null);

  const getNavHeight = () => {
    if (!Nav.current) return 200;
    console.log(Nav.current.getBoundingClientRect());
    return Nav.current.getBoundingClientRect().height;
  };

  useEffect(() => {
    setNavHeight(getNavHeight());

    window.addEventListener("resize", () => setNavHeight(getNavHeight()));
    return () =>
      window.removeEventListener("resize", () => setNavHeight(getNavHeight()));
  }, []);

  useEffect(() => {
    L.DomEvent.disableClickPropagation(
      document.getElementsByClassName(scss.navigation)[0] as HTMLElement
    );

    map.on("dragstart", () => {
      setClassName(scss.transparent);
    });

    map.on("dragend", () => {
      setClassName("");
    });
  }, [map]);

  return (
    <>
      <input
        id={scss.checkbox}
        type="checkbox"
        checked={openMenu}
        onChange={(e) => setOpenMenu(e.target.checked)}
      />
      <div
        className={scss.navigation + " " + className}
        style={{ top: -1 * navHeight }}
        ref={Nav}
      >
        <div className={scss.app_name}>
          <span>船橋市子育て</span>
          <span>地域マップ</span>
        </div>

        <div className={scss.layers}>
          <Layers onChange={() => setNavHeight(getNavHeight())} />
        </div>

        <div className={scss.location}>
          <Location />
        </div>

        <div className={scss.about}>
          <About />
        </div>

        <label className={scss.label} htmlFor={scss.checkbox}>
          {openMenu ? "▲" : "▼"}Menu
        </label>
      </div>
    </>
  );
};
export default Navigation;
