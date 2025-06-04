import React from "react";

interface CompCountUpButton2Props {
  onCountUp: (count: number) => void;
}

const CompCountUpButton3: React.FC<CompCountUpButton2Props> = ({
  onCountUp,
}) => {
  const handleClick = () => {
    const incrementValue = 1; // 親に渡す値
    console.log(`${incrementValue} を親に渡します`);
    onCountUp(incrementValue); // 親にincrementValueの値を渡す
  };

  return (
    <div className="ex">
      <button type="button" onClick={handleClick}>
        カウントを増やす
      </button>
    </div>
  );
};

export default CompCountUpButton3;
