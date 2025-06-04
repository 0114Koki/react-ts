import React from "react";

interface CompYesOrNoProps {
  onYesOrNo: (yesOrNo: string) => void;
}

const CompYesOrNo: React.FC<CompYesOrNoProps> = ({ onYesOrNo }) => {
  const handleClick = (value: string) => {
    onYesOrNo(value); //親に値(Yes or No)を渡す
  };
  return (
    <div>
      <button type="button" onClick={() => handleClick("Yes")}>
        Yes
      </button>
      <button type="button" onClick={() => handleClick("No")}>
        No
      </button>
    </div>
  );
};

export default CompYesOrNo;
