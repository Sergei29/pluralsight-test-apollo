import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { STORIES_QUERY } from "../../graphql/queries";
import { EDIT_STORY_NAME } from "../../graphql/mutations";
import Story from "../Story/Story";
import { defaultMessages } from "../../constants";

const Stories = () => {
  const [objEditInputs, setObjEditInputs] = useState({});
  const [objEditState, setObjEditState] = useState({});

  const { loading, error, data } = useQuery(STORIES_QUERY, {
    errorPolicy: "all",
  });

  if (loading) return <p>Loading...</p>;

  const handleNameChange = (strId) => (objEvent) =>
    setObjEditInputs((prevObjStories) => ({
      ...prevObjStories,
      [strId]: { value: objEvent.target.value },
    }));

  const showEditField = (strId) => () =>
    setObjEditState((prevState) => ({
      ...prevState,
      id: strId,
    }));

  const stories = data?.stories?.map((story) => (
    <Story
      key={story.id}
      name={story.name}
      image={story.image}
      description={story.description}
      handleChangeName={handleNameChange(story.id)}
      bIsEditing={objEditState.id === story.id}
      handleShowEditField={showEditField(story.id)}
      strFieldValue={objEditInputs[story.id]?.value || ""}
    />
  ));

  return (
    <div className="container crf-story">
      {error && <p>{defaultMessages.ERROR_LOADING_DATA}</p>}
      <div className="row">{stories}</div>
    </div>
  );
};

export default Stories;
