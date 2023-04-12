import React from "react";
import './AddIssue.css'

function AddIssue() {
  return (
    <div className="add-issue">
      <form>
        <label>
          Bug Description <input type="text" placeholder="Description of the Bug..." />{" "}
        </label>
        <label for="bug-type">
          Choose The Bug Type
          <select name="bug" id="bug">
            <option value="Functional Bug">Functional Bug</option>
            <option value="Logical Bugs">Logical Bug</option>
            <option value="Workflow Bug">Workflow Bug</option>
            <option value="Unit Level Bug">Unit Level Bug</option>
            <option value="System-Level Integration Bug">
              System-Level Integration Bug
            </option>
            <option value="Out of Bound Bug">Out of Bound Bug</option>
            <option value="Security Bug">Security Bug</option>
          </select>
        </label>
        <label for="priority">
          Choose Priority Level
          <select name="priority" id="priority">
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </label>
        <button type="submit">Add Bug</button>
      </form>
    </div>
  );
}

export default AddIssue;
