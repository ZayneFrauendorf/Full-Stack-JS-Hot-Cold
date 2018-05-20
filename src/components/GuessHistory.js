import React from "react";
import GuessIcon from "./GuessIcon";

export default ({ guessHistory, style }) => {
  return (
    <div className={`guess-history`}>
      {guessHistory.map((value, index) => (
        <GuessIcon key={index} value={value} />
      ))}
    </div>
  );
};
