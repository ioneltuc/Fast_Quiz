import React from "react";
import { useCountdown } from "./hooks/useCountdown";
import DateTimeDisplay from "./DateTimeDisplay";
import { useState } from "react";

const Notice = (props) => {
  return (
    <div>
      <p className="timerText">Fast Quiz</p>
      <p className="timerText2">Succes!</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="showCounter">
      {/* <DateTimeDisplay value={days} type={"Days"} isDanger={days <= 3} />
        <p>:</p>
        <DateTimeDisplay value={hours} type={"Hours"} isDanger={false} />
        <p>:</p> */}
      <DateTimeDisplay value={minutes} type={"minute"} isDanger={false} />
      <p>:</p>
      <DateTimeDisplay value={seconds} type={"secunde"} isDanger={false} />
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds === 0) {
    alert("Timpul a luat sfârșit!");
  }

  if (days + hours + minutes + seconds <= 0) {
    return <Notice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
