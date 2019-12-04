import React from "react";

const ProjectSummary = props => {
  let project = props.project;
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let createdTime = project.createdAt.toDate();
  let createdDate = createdTime.getDate();
  let createdHour = createdTime.getHours();
  let createdMonth = monthNames[createdTime.getMonth()];
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span classNames="card-title" style={{ fontSize: "22px" }}>
          {project.title}
        </span>
        <p>{project.content}</p>
        <p className="grey-text">
          Posted By {project.authorFirstName} {project.authorLastName}
        </p>
        <p className="grey-text">
          {createdDate} {createdMonth}, {createdHour + ":00"}
        </p>
      </div>
    </div>
  );
};

export default ProjectSummary;
