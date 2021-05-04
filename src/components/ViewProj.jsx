import React from "react";

const ViewProj = (props) => {
  const { projectURL, GitURL } = props;

  return (
    <div className="center">
      {projectURL && (
        <a href={projectURL} target="_blank">
          {" "}
          <button className="viewButton">Deployed Project</button>
        </a>
      )}
      {GitURL && (
        <a href={GitURL} target="_blank">
          <button className="viewButton">Github Code</button>
        </a>
      )}
    </div>
  );
};

export default ViewProj;
