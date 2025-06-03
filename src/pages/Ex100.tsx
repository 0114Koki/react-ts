import React, { useState } from "react";

const Ex100: React.FC = () => {
  const [hobby, setHobby] = useState<string>("");
  const [triathlonType, setTriathlonType] = useState<string>("swim");
  const [otherHobby, setOtherHobbies] = useState<string>("");

  const handleHobbyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setHobby(event.target.value);
  };
  const handleTriathlonType = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTriathlonType(event.target.value);
  };
  const handleOtherHobbyChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setOtherHobbies(event.target.value);
  };

  return (
    <div>
      <p>趣味はなんですか？</p>
      <select value={hobby} onChange={(e) => handleHobbyChange(e)}>
        <option value="">未選択</option>
        <option value="triathlon">トライアスロン</option>
        <option value="other">その他</option>
      </select>
      {hobby === "" && <h2>趣味がありません</h2>}

      {hobby === "triathlon" && (
        <div>
          <p>好きな種目は？</p>
          <input
            type="radio"
            value="swim"
            checked={triathlonType === "swim"}
            onChange={(e) => handleTriathlonType(e)}
          />
          スイム
          <input
            type="radio"
            value="bike"
            checked={triathlonType === "bike"}
            onChange={handleTriathlonType}
          />
          バイク
          <input
            type="radio"
            value="run"
            checked={triathlonType === "run"}
            onChange={handleTriathlonType}
          />
          ラン
          <p>選択した種目: {triathlonType}</p>
        </div>
      )}
      {hobby === "other" && (
        <div>
          <p>それでは何が好きですか？</p>
          <input
            type="text"
            value={otherHobby}
            onChange={handleOtherHobbyChange}
          />
          <p>記述した趣味: {otherHobby}</p>
        </div>
      )}
    </div>
  );
};

export default Ex100;
