import React from "react";

class AddBtn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.qstType === "tf") {
      return (
        <button
          id="tfBtn"
          className="btn btnHover"
          onClick={() => this.props.onClick("tf")}
        >
          Adaugă o întrebare de tip Adevărat/Fals
        </button>
      );
    } else if (this.props.qstType === "radio") {
      return (
        <button
          id="radioBtn"
          className="btn btnHover"
          onClick={() => this.props.onClick("radio")}
        >
          Adaugă o întrebare de tip Radio
        </button>
      );
    } else if (this.props.qstType === "checkbox") {
      return (
        <button
          id="checkboxBtn"
          className="btn btnHover"
          onClick={() => this.props.onClick("checkbox")}
        >
          Adaugă o întrebare de tip Checkbox
        </button>
      );
    }
  }
}

export default AddBtn;
