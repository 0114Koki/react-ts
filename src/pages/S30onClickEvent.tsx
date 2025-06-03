import React, { useState } from "react";

const S30onClickEvent: React.FC = () => {
  const [myName, setMyName] = useState<string>("");
  const handleClick = () => {
    setMyName("くりはらこうき");
  };
  return (
    <div className="sample">
      <button type="button" onClick={handleClick}>
        名前を表示する
      </button>
      <p>{myName}</p>
    </div>
  );
};

export default S30onClickEvent;
