import React from "react";

export default function Experience(props) {
  const { designation, company, year, description } = props.singleExperience;

  return (
    <div className="pl-2 mb-4 ml-2 education">
      <h4>{designation}</h4>
      <h6>
        {company} / {year}
      </h6>
      <p className="text-secondary">{description}</p>
    </div>
  );
}
