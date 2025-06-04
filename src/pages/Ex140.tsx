import React from "react";
import CompSelfIntroduction from "../components/CompSelfIntroduction";

const Ex140: React.FC = () => {
  return (
    <div>
      <CompSelfIntroduction myName="くりはらこうき" />
      <CompSelfIntroduction
        myName="栗原昂希"
        myAge={25}
        myHobby="サッカー観戦"
      />
    </div>
  );
};

export default Ex140;
