import React, { useState } from "react";
import CompYesOrNo from "../components/CompYesOrNo";
import CompYYYInput from "../components/CompYYYInput";

const Ex180: React.FC = () => {
  const [yesOrNo, setYesOrNo] = useState<string>("ボタンを押してください");
  const [inputText, setInputText] = useState<string>("");
  const [inputText2, setInputText2] = useState<string>("");

  const handleYesOrNo = (value: string) => {
    setYesOrNo(value);
  };

  const handleTextSubmit = (text1: string, text2: string) => {
    setInputText(text1);
    setInputText2(text2);
  };

  return (
    <div>
      <h3>押したボタン: {yesOrNo}</h3>
      <CompYesOrNo onYesOrNo={handleYesOrNo} />

      <h3>入力されたテキスト1: {inputText}</h3>
      <h3>入力されたテキスト2: {inputText2}</h3>
      <CompYYYInput
        onTextSubmit={(text1, text2) => {
          handleTextSubmit(text1, text2);
        }}
      />
    </div>
  );
};

export default Ex180;
