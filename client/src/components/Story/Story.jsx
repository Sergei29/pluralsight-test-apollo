import React from "react";
import { defaultMessages } from "../../constants";

const Story = ({
  image,
  name,
  description,
  handleChangeName,
  bIsEditing,
  handleShowEditField,
  strFieldValue,
  handleEditName,
  editError,
}) => {
  return (
    <div className="col-lg-3 col-md-6">
      {editError && <p>{defaultMessages.ERROR_EDIT_STORY}</p>}
      <div className="crf-story--image">
        <img alt={name} src={image} />
      </div>
      <div className="crf-story--text">
        <h3>
          {name}{" "}
          <button className="btn btn-primary" onClick={handleShowEditField}>
            Edit
          </button>
        </h3>
        {bIsEditing && (
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              onChange={handleChangeName}
              value={strFieldValue}
            />
            <div>
              <button className="btn btn-secondary" onClick={handleEditName}>
                save
              </button>
            </div>
          </div>
        )}
        <div>{description}</div>
      </div>
    </div>
  );
};

export default Story;
