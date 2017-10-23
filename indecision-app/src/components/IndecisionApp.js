import React from "react";

import AddOption from "./AddOption"; // can leave off .js
import Action from "./Action";
import Header from "./Header";
import Options from "./Options";
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
  state = {
    options: [], 
    selectedOption: undefined
  }
  clearSelectedOption = () => {
    this.setState(() => ({
      selectedOption: undefined
    }));
  }
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
    // const num = () => ({}) // to return obj instead of func body, wrap in parenthesis
  }
  handleDeleteOption = (optionToRemove) => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => {
        return optionToRemove !== option;
      })
    }));
  }
  handlePick = () => {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNum];
      this.setState(() => ({
        selectedOption: option
      }));
  };
  handleAddOption = (option) => {
    if (!option) {
      return "Enter valid task item.";
    } else if (this.state.options.indexOf(option) > -1) {
      return "You already have this on the list.";
    }

    this.setState(prevState => ({ options: prevState.options.concat(option) }));
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (error) {
      // Do nothin at all
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    const subtitle = "Notepad for choosing what you should do next.";
    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>
        <OptionModal 
          selectedOption={this.state.selectedOption}
          clearSelectedOption={this.clearSelectedOption}
        />
      </div>
    );
  }
}

export default IndecisionApp;
