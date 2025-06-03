import React, { useState } from "react";

const Ex80: React.FC = () => {
  const [isRobot, setIsRobot] = useState<boolean>(false);
  const handleRobot = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsRobot(event.target.checked);
  };
  return (
    <div>
      私はロボットではありません。
      <input type="checkbox" onChange={handleRobot} />/{" "}
      {isRobot ? "false" : "true"}
      {isRobot && (
        <div>
          <h1>ロボットではありません</h1>
          <p>人間です。</p>
        </div>
      )}
      ;
    </div>
  );
};

export default Ex80;
