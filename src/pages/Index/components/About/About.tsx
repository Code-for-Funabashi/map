import React, { FC, useState } from "react";

import scss from "./About.module.scss";

const About: FC = () => {
  const [check, setCheck] = useState<boolean>(false);

  return (
    <>
      <input
        type="checkbox"
        id="about"
        className={scss.check}
        checked={check}
        onChange={(e) => setCheck(e.target.checked)}
      />
      <label className={scss.button} htmlFor="about">
        当サイトについて
      </label>
      <div className={scss.about + " " + (check ? scss.view : "")}>
        <section>
          <h3>Googleアナリティクスの利用について</h3>
          <p>
            当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を使用しています。
            <br />
            このGoogleアナリティクスはデータの収集のためにCookieを使用しています。
            <br />
            このデータは匿名で収集されており、個人を特定するものではありません。
          </p>
          <p>
            この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。
            <br />
            この規約に関しての詳細は
            <a
              href="https://marketingplatform.google.com/about/analytics/terms/jp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Googleアナリティクスサービス利用規約
            </a>
            や
            <a
              href="https://policies.google.com/technologies/ads?hl=ja"
              target="_blank"
              rel="noopener noreferrer"
            >
              ポリシーと規約ページ
            </a>
            をご覧ください。
          </p>
        </section>
      </div>
      <label
        className={scss.black + " " + (check ? scss.view : "")}
        htmlFor="about"
      />
    </>
  );
};
export default About;
