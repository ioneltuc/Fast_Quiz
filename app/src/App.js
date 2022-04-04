import { useState } from "react";
import "./App.css";
import AddBtn from "./components/AddBtn";
import QstInfo from "./components/QstInfo";
import Question from "./components/Question";
import TimerBtns from "./components/TimerBtns";
import CountdownTimer from "./CountdownTimer";

function App() {
  let [qstList, setQstList] = useState([]);
  let [qstText, setQstText] = useState();
  let [qstAns, setQstAns] = useState([]);

  let [nowInMs, setNowInMs] = useState(new Date().getTime());
  let [msg, setMsg] = useState(true);

  const addQuestion = (props) => {
    setQstList(
      qstList.concat(<Question type={props} qst={qstText} ans={qstAns} />)
    );
    qstAns = [];
    setQstAns(qstAns);
  };

  const addOneAns = (ans, id) => {
    qstAns[id] = ans;
  };

  return (
    <div className="App">
      <QstInfo setAns={addOneAns} onChange={setQstText} />
      <hr id="hrInfo" />
      <AddBtn onClick={addQuestion} qstType={"tf"} />
      <br />
      <AddBtn onClick={addQuestion} qstType={"radio"} />
      <br />
      <AddBtn onClick={addQuestion} qstType={"checkbox"} />
      <div className="countdownTimer">
        <CountdownTimer targetDate={nowInMs} />
        <TimerBtns setCountDown={setNowInMs} nowInMs={nowInMs} />
      </div>

      <hr className="hrQst" id="hrQuestion" />
      <br />
      {qstList}
    </div>
  );
}

export default App;
