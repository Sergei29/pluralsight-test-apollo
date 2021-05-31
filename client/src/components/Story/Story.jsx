import React from "react";

const Story = ({ image, name, description, handleChangeName }) => {
  return (
    <div className="col-lg-3 col-md-6">
      <div className="crf-story--image">
        <img alt={name} src={image} />
      </div>
      <div className="crf-story--text">
        <h3>
          {name} <button className="btn btn-primary">Edit</button>
        </h3>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            onChange={handleChangeName}
          />
          <div>
            <button className="btn btn-secondary">save</button>
          </div>
        </div>
        <div>{description}</div>
      </div>
    </div>
  );
};

export default Story;
