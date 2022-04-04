import React from "react";
import { useState } from "react";

const TimerBtns = (props) => {
  return (
    <div id="timerBtn">
      <button
        className="btn btnHover"
        onClick={(e) => {
          props.setCountDown(new Date().getTime() + 10 * 60 * 1000 + 2000);
          document.getElementById("timerBtn").style.display = "none";
          document.getElementById("qstInfoBlock").style.display = "none";
          document.getElementById("tfBtn").style.display = "none";
          document.getElementById("radioBtn").style.display = "none";
          document.getElementById("checkboxBtn").style.display = "none";
          document.getElementById("hrInfo").style.display = "none";
          document.getElementById("hrQuestion").style.display = "none";
        }}
      >
        10 min
      </button>
      <button
        className="btn btnHover"
        onClick={() => {
          props.setCountDown(new Date().getTime() + 5 * 60 * 1000 + 2000);
          document.getElementById("timerBtn").style.display = "none";
          document.getElementById("qstInfoBlock").style.display = "none";
          document.getElementById("tfBtn").style.display = "none";
          document.getElementById("radioBtn").style.display = "none";
          document.getElementById("checkboxBtn").style.display = "none";
          document.getElementById("hrInfo").style.display = "none";
          document.getElementById("hrQuestion").style.display = "none";
        }}
      >
        5 min
      </button>
      <button
        className="btn btnHover"
        onClick={() => {
          props.setCountDown(new Date().getTime() + 3 * 60 * 1000 + 2000);
          document.getElementById("timerBtn").style.display = "none";
          document.getElementById("qstInfoBlock").style.display = "none";
          document.getElementById("tfBtn").style.display = "none";
          document.getElementById("radioBtn").style.display = "none";
          document.getElementById("checkboxBtn").style.display = "none";
          document.getElementById("hrInfo").style.display = "none";
          document.getElementById("hrQuestion").style.display = "none";
        }}
      >
        3 min
      </button>
      <button
        className="btn btnHover"
        onClick={() => {
          props.setCountDown(new Date().getTime() + 1 * 60 * 1000 + 2000);
          document.getElementById("timerBtn").style.display = "none";
          document.getElementById("qstInfoBlock").style.display = "none";
          document.getElementById("tfBtn").style.display = "none";
          document.getElementById("radioBtn").style.display = "none";
          document.getElementById("checkboxBtn").style.display = "none";
          document.getElementById("hrInfo").style.display = "none";
          document.getElementById("hrQuestion").style.display = "none";
        }}
      >
        1 min
      </button>
    </div>
  );
};

export default TimerBtns;
