import React, { useState } from "react";

const Ex50: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState<boolean>(true);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const handleClick = () => {
    // isEnabled と isDisabled の値を反転させる
    setIsEnabled(!isEnabled);
    setIsDisabled(!isDisabled);
  };

  return (
    <div>
      <span>
        <button type="button" disabled={isDisabled}>
          押せるボタン
        </button>
      </span>
      <span>
        <button type="button" disabled={isEnabled}>
          押せないボタン
        </button>
      </span>
      <hr />
      <label>
        チェックされているラジオボタン：
        <input type="radio" checked={isEnabled} />
      </label>
      /
      <label>
        チェックされていないラジオボタン：
        <input type="radio" checked={isDisabled} />
      </label>
      <hr />
      <label>
        チェックされているチェックボックス：
        <input type="checkbox" checked={isEnabled} />
      </label>
      /
      <label>
        チェックされていないチェックボックス：
        <input type="checkbox" checked={isDisabled} />
      </label>
      <hr />
      <button type="button" onClick={handleClick}>
        振る舞いを反転させる
      </button>
    </div>
  );
};

export default Ex50;
