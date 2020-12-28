import React from "react";
import ReactDOM from "react-dom";
import Input from "./components/Input/Input";
import "./index.css";

var todo = document.getElementById("container");

ReactDOM.render (
  <div>
    <Input/>
  </div>,
  todo
);