import React from "react";
import CheckBox from "./CheckBox";
import InvestStyle from "../images/invest-style.svg";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

class Type extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      investmentTypes: [
        { id: 1, value: "Day Trading", isChecked: false },
        { id: 2, value: "Position Trading", isChecked: false },
        { id: 3, value: "Swing Trading", isChecked: false },
        { id: 4, value: "Scalping", isChecked: false }
      ]
    };
  }

  handleAllChecked = (event) => {
    let fruites = this.state.investmentTypes;
    fruites.forEach((fruite) => (fruite.isChecked = event.target.checked));
    this.setState({ investmentTypes: fruites });
  };

  handleCheckChieldElement = (event) => {
    let fruites = this.state.investmentTypes;
    fruites.forEach((fruite) => {
      if (fruite.value === event.target.value)
        fruite.isChecked = event.target.checked;
    });
    this.setState({ investmentTypes: fruites });
  };

  render() {
    return (
      <div className="App">
        <img src={InvestStyle} alt="Style" />
        <h1> Select your investment style: </h1>
        <input
          type="checkbox"
          onChange={this.handleAllChecked}
          value="checkedall"
        />{" "}
        Check / Uncheck All
        <ul>
          {this.state.investmentTypes.map((fruite, index) => {
            return (
              <CheckBox
                key={index}
                handleCheckChieldElement={this.handleCheckChieldElement}
                {...fruite}
              />
            );
          })}
        </ul>
        <div class="login center">
          <Button component={Link} to="/industries">
            Click Me
          </Button>
        </div>
      </div>
    );
  }
}

export default Type;
