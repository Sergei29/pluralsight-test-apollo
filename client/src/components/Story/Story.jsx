import React from "react";

const Story = ({
  bIsEditing,
  handleChangeName,
  handleEditName,
  handleShowEditField,
  story,
  strFieldValue,
}) => {
  return (
    <div className="col-lg-3 col-md-6">
      <div className="crf-story--image">
        <img alt={story.name} src={story.image} />
      </div>
      <div className="crf-story--text">
        <h3>
          {story.name}{" "}
          <button
            className="btn btn-primary"
            onClick={handleShowEditField(story.id)}
            data-testid={`edit-${story.id}`}
          >
            Edit
          </button>
        </h3>
        {bIsEditing && (
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              onChange={handleChangeName(story.id)}
              value={strFieldValue}
              data-testid={`input-${story.id}`}
            />
            <div>
              <button
                className="btn btn-secondary"
                onClick={handleEditName(story.id)}
                data-testid={`save-${story.id}`}
              >
                save
              </button>
            </div>
          </div>
        )}
        <div>{story.description}</div>
      </div>
    </div>
  );
};

export default Story;
