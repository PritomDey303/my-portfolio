import React from "react";
import "./Education.css";
export default function Education(props) {
  const { degree, institute, year, description } = props.singleEducationInfo;
  return (
    <div className="pl-2 mb-4 ml-2 education">
      <h4>{degree}</h4>
      <h6>
        {institute} / {year}
      </h6>
      <p className="text-secondary">{description}</p>
    </div>
  );
}
