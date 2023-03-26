import React, { useState } from "react";

export default function CoinToss() {
  const [result, setResult] = useState("");

  const handleToss = () => {
    const randomNum = Math.floor(Math.random() * 2);
    setResult(randomNum === 0 ? "Heads" : "Tails");
  };

  return (
    <div>
      <button onClick={handleToss}>Toss Coin</button>
      {result && <p>{result}</p>}
    </div>
  );
}
