import React from "react";
import assetsImageUrl from "../assets/react.svg";

const S20attributesChange: React.FC = () => {
  const url = "https://www.google.com";
  const publicImageUrl = "/vite.svg";
  const canNotClick = true;
  return (
    <div>
      <div>
        リンク：<a href={url}>Googleへ飛ぶ</a>
      </div>
      <div>
        publicディレクトリ内の画像:
        <img src={publicImageUrl} />
      </div>
      <div>
        assetsディレクトリ内の画像:
        <img src={assetsImageUrl} />
      </div>
      <div>
        <button type="button" disabled={canNotClick}>
          押せないボタン
        </button>
      </div>
    </div>
  );
};

export default S20attributesChange;
