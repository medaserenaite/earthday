//Homepage - what user sees right after logging
import React, { Component } from "react";
import "./home.scss";

//to be moved into json or database later
let data = [
  "eat a vegan meal",
  "bring reusable mug",
  "take public transport",
  "bring reusable utensils",
  "took a short-er shower"
];
let selectedArray = [];
let divStyle = {};

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      completedTasks: []
    };
  }

  addTask(task, key) {
    selectedArray.push(task);
    // handle storage in db
    let x = document.querySelectorAll(".home-container__item");
    let selectedTask;
    for (let i = 0; i <= x.length; i++) {
      selectedTask = x[key];
    }
    console.log(selectedTask);
    //below seems to be buggy - I'm looking into it
    document.getElementById("donesies-task-container").appendChild(selectedTask);
  }
  render() {
    return (
      <div className="Home">
        <div className="home-container">
          {data.map((task, key) => (
            <div
              onClick={() => this.addTask(task, key)}
              className="home-container__item"
              key={key}
              style={divStyle}
            >
              {task}
            </div>
          ))}
        </div>
        <br />
        <br />
        <div id="donesies-task-container"></div>
      </div>
    );
  }
}
