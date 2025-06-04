import React from "react";

interface Props {
  onTextSubmit: (text1: string, text: string) => void;
}

const CompYYYInput: React.FC<Props> = ({ onTextSubmit }) => {
  const [inputValue, setInputValue] = React.useState("");
  const [inputValue2, setInputValue2] = React.useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };
  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setInputValue2(event.target.value);
  };

  const handleSend = () => {
    onTextSubmit(inputValue, inputValue2); // 親に送信
    setInputValue(""); // 送信後、入力欄をクリア（任意）
    setInputValue2("");
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <input type="text" value={inputValue2} onChange={handleChange2} />
      <button onClick={handleSend}>送信</button>
    </div>
  );
};

export default CompYYYInput;
