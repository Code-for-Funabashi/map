import React, { ReactElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";

import A from "pages/Index/components/A";

const Attribution = (): string => {
  const Attributions: ReactElement[] = [
    <>
      &copy; <A href="https://osm.org/copyright">OpenStreetMap</A> contributors
    </>,
    <>
      <A href="https://www.city.funabashi.lg.jp/shisei/toukei/002/opendata.html">
        船橋データカタログ（船橋市作成）使用
      </A>
      （
      <A href="https://creativecommons.org/licenses/by/4.0/deed.ja">
        CC BY 4.0
      </A>
      ）
    </>,
    <A href="https://code4funabashi.org/">Code for Funabashi</A>,
  ];

  return Attributions.map((El) => renderToStaticMarkup(El)).join(" | ");
};
export default Attribution;
