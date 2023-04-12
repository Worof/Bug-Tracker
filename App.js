import React from "react";
import { useState } from "react";
import AddIssue from "./Components/AddIssue/AddIssue.js";
import CurrentIssue from "./Components/CurrentIssue/CurrentIssue.js";
import "./App.css";

function App() {
  const [addIssue, setIssue] = useState(true);
  function showAddIssue() {
    setIssue(true);
  }

  function showCurrentIssue() {
    setIssue(false);
  }


  return (
    <div className="App">
      <h1>Bug Tracker</h1>
      <div className="card-container">
        {addIssue ? <AddIssue /> : <CurrentIssue />}
      </div>

      <div className="view-selection-div">
      <button
          class="view-button active-button"
          onClick = {() => showAddIssue}
          >
          Add Issue
        </button>
        <button class="view-button" onClick={() => showCurrentIssue()}>
          Current Issues
        </button>
      </div>
    </div>
  );
}

export default App;
