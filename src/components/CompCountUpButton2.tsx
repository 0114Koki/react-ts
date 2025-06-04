import React from "react";

interface CompCountUpButton2Props {
  onCountUp: () => void;
}

const CompCountUpButton2: React.FC<CompCountUpButton2Props> = ({
  onCountUp,
}) => {
  return (
    <div>
      <button type="button" onClick={onCountUp}>
        Count Up
      </button>
    </div>
  );
};

export default CompCountUpButton2;
