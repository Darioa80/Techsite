import React from "react";

const ViewProj = (props) => {
  const { projectURL, GitURL } = props;

  return (
    <div className="center">
      {projectURL && (
        <button href={projectURL} className="viewButton">
          Deployed Project
        </button>
      )}
      {GitURL && (
        <button href={GitURL} className="viewButton">
          Github Code
        </button>
      )}
    </div>
  );
};

export default ViewProj;
