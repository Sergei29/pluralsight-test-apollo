import React from "react";

const Story = ({ image, name, description }) => {
  return (
    <div className="col-lg-3 col-md-6">
      <a href="#">
        <div className="crf-story--image">
          <img alt={name} src={image} />
        </div>
        <div className="crf-story--text">
          <h3>{name}</h3>
          <div>{description}</div>
        </div>
      </a>
    </div>
  );
};

export default Story;
