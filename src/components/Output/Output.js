import React, { Component } from "react";
import FlipMove from "react-flip-move";
import "./Output.css";

class Output extends Component {
  constructor(props) {
    super(props);

    this.outputTasks = this.outputTasks.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  outputTasks(item) {
    return <li onClick={() => this.deleteTask(item.key)}
        key={item.key}>{item.text}</li>
  }

  deleteTask(key) {
    this.props.deleteTask(key);
  }

  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.outputTasks);

    return(
      <div className="container">
        <h3>[tap on tasks to delete]</h3>
        <FlipMove duration={200} easing="ease-out" className="taskList">
          {listItems}
        </FlipMove>
      </div>
    );
  }
}

export default Output;