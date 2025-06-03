import React, { useState } from "react";

const Ex90: React.FC = () => {
  const [isRobot, setIsRobot] = useState<boolean>(false);
  const handleRobot = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsRobot(event.target.checked);
  };

  return (
    <div>
      私はロボットではありません。
      <input type="checkbox" onChange={handleRobot} />/{" "}
      {isRobot ? "true" : "false"}
      {isRobot ? (
        <div>
          <h1>ロボットではありません</h1>
          <p>人間です。</p>
        </div>
      ) : (
        <div>
          <h1>人間ではありません</h1>
          <p>ロボットです。</p>
        </div>
      )}
      ;
    </div>
  );
};

export default Ex90;
