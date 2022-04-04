import React from "react";

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.qstDisplay = this.qstDisplay.bind(this);
  }

  qstDisplay() {
    if (this.props.type === "tf") {
      function tfQst() {
        return (
          <div>
            <label className="container1" htmlFor={Date.now()}>
              Adevărat
              <input type="radio" id={Date.now()} name={Date.now()} />
              <span class="checkmark1"></span>
            </label>
            <label className="container1" htmlFor={Date.now() + 1}>
              Fals
              <input type="radio" id={Date.now() + 1} name={Date.now()} />
              <span class="checkmark1"></span>
            </label>
          </div>
        );
      }

      return <div>{tfQst()}</div>;
    }

    let question;
    if (this.props.type === "checkbox") {
      question = this.props.ans.map((ans, index) => (
        <div>
          <label className="container">
            {this.props.ans[index]}
            <input type={this.props.type} name={Date.now()} />
            <span class="checkmark"></span>
          </label>
        </div>
      ));
    } else {
      question = this.props.ans.map((ans, index) => (
        <div>
          <label className="container1">
            {this.props.ans[index]}
            <input type={this.props.type} name={Date.now()} />
            <span class="checkmark1"></span>
          </label>
        </div>
      ));
    }
    return <div>{question}</div>;
  }

  render() {
    return (
      <div>
        <div className="qstText">{this.props.qst}</div>
        {this.qstDisplay()}
      </div>
    );
  }
}

export default Question;
