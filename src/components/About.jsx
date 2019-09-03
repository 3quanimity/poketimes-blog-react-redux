import React from "react";
import Rainbow from "../hoc/Rainbow";

function About() {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <div className="card">
        <div className="card-content">
          <p className="center">
            This component is controlled by a HOC that changes its text color
            each time you refresh the page.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Rainbow(About);
