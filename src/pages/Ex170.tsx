import React, { useState } from "react";
import CompCountUpButton2 from "../components/CompCountUpButton2";
import CompCountUpButton3 from "../components/CompCountUpButton3";

const Ex170: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const handleCountUp = () => {
    setCount((prevcount) => prevcount + 1);
  };

  return (
    <div>
      <p>{count}</p>
      <CompCountUpButton2 onCountUp={handleCountUp} />
      <CompCountUpButton2 onCountUp={handleCountUp} />
      <CompCountUpButton2 onCountUp={handleCountUp} />
      <CompCountUpButton3 onCountUp={handleCountUp} />
    </div>
  );
};

export default Ex170;
