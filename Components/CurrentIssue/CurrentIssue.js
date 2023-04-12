import React from "react";
import "./CureentIssue.css";

function CurrentIssue() {
  return (
    <div className="current-issue">
      <div className="Indv-issue">
        <p className="Close-issue">Close Issue</p>
        <p>
          {" "}
          Bug Type<span>Workflow Bug</span>
        </p>
        <p>
          Priority <span>High</span>
        </p>
        <p>
          {" "}
          Description{" "}
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </span>
        </p>
        <hr  />
      </div>
    </div>
  );
}

export default CurrentIssue;
