import React from "react";

export default props => {
  return (
    <div className={`top-message`}>
      <h2>{props.message}</h2>
    </div>
  );
};
