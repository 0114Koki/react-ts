import React from "react";

interface props {
  myName?: string;
  myAge?: number;
  myHobby?: string;
}

const CompSelfIntroduction: React.FC<props> = ({
  myName = "名無し",
  myAge = -1,
  myHobby = "無趣味",
}) => {
  return (
    <div>
      <p>私の名前は{myName}です。</p>
      <p>私の年齢は{myAge}です。</p>
      <p>私の趣味は{myHobby}です。</p>
    </div>
  );
};

export default CompSelfIntroduction;
