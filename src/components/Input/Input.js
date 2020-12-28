import React, { Component } from "react";
import Output from "../Output/Output";
import FlipMove from "react-flip-move";
import "./Input.css";

class Input extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      taskArray: []
    };

    this.inputTask = this.inputTask.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  inputTask(e) {
    if (this._inputEle.value !== "") {
      var newTask = {
        text: this._inputEle.value,
        key: Date.now()
      };

      this.setState((prevState) => {
        return {
          taskArray: prevState.taskArray.concat(newTask)
        };
      });
    }

    this._inputEle.value = "";

    console.log(this.state.taskArray);

    e.preventDefault();
  }

  deleteItem(key) {
    var filteredList = this.state.taskArray.filter(function (task) {
      return (task.key !== key) 
    });

    this.setState({
      taskArray: filteredList
    });
  }

  render() {
    return(
      <div className="todoListMain">
        <div className="header">
          <h1 className="title">TO-DO APP</h1>
          <form onSubmit={this.inputTask} className="toDoContainer">
            <input ref = { (ele) => this._inputEle = ele }
                  placeholder="Enter Task">
            </input>
            <button type="submit">Add</button>
          </form>
        </div>
        <Output entries={this.state.taskArray}
                deleteTask={this.deleteItem}/>
      </div>
    );
  }
}

export default Input;