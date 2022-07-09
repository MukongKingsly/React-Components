import React from "react";
import CountdownComponent from "./CountdownComponent";

const CountdownTimer = () => {
  const hoursMinSecs = {hours: 2, minutes: 0, seconds: 0}
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <CountdownComponent hoursMinSecs={hoursMinSecs}/>
    </div>
  );
};
export default CountdownTimer;