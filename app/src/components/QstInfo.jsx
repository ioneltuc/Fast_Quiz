import React from "react";
import { useState } from "react";
let id = 0;
const QstInfo = (props) => {
  let [ansList, setAnsList] = useState([]);
  const addAns = () => {
    setAnsList(
      ansList.concat(
        <div>
          <label htmlFor={id}>
            {" "}
            <input
              placeholder={id + 1}
              className="ansInput"
              onChange={(e) => props.setAns(e.target.value, e.target.id)}
              id={id}
            />
          </label>
        </div>
      )
    );
    id++;
  };

  const reset = () => {
    id = 0;
    ansList = [];
    setAnsList(ansList);
  };

  return (
    <div id="qstInfoBlock">
      <label htmlFor="qstText">
        <strong>Creează un quiz rapid</strong>
        <br />
        <input
          placeholder="Textul întrebării"
          onChange={(e) => props.onChange(e.target.value)}
          id="qstText"
          onFocus={(e) => (e.target.value = "")}
        />
      </label>
      <br />
      <button className="btn btnHover" onClick={addAns}>
        Adaugă o variantă de răspuns
      </button>
      {ansList}
      <button className="btn btnHover" id="nextQstBtn" onClick={reset}>
        Următoarea întrebare
      </button>
    </div>
  );
};

export default QstInfo;
