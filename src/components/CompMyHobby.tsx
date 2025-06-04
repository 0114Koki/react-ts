import React, { useState } from "react";

const CompMyHobby: React.FC = () => {
  const [myHobby, setMyHobby] = useState<string>("トライアスロン");

  const changeHobby = () => {
    setMyHobby("マラソン");
  };

  return (
    <div className="sample">
      <div>
        私の趣味は{myHobby}です。
        <button type="button" onClick={changeHobby}>
          趣味変更
        </button>
      </div>
    </div>
  );
};

export default CompMyHobby;
