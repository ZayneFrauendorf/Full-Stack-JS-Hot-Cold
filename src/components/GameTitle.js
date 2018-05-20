import React from "react";

export default () => {
  return (
    <div className="game-title">
      <h2>
        <span className="hot">
          <i class="fas fa-fire" />HOT
        </span>{" "}
        or{" "}
        <span className="cold">
          COLD <i class="far fa-snowflake" />
        </span>
      </h2>
    </div>
  );
};
