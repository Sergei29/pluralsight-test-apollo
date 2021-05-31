import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { STORIES_QUERY } from "../../graphql/queries";
import { EDIT_STORY_NAME } from "../../graphql/mutations";
import Story from "../Story/Story";
import { defaultMessages } from "../../constants";

const Stories = () => {
  const [objStories, setObjStories] = useState({});
  const { loading, error, data } = useQuery(STORIES_QUERY, {
    errorPolicy: "all",
  });

  if (loading) return <p>Loading...</p>;
  // if (error) return <p>{defaultMessages.ERROR_LOADING_DATA}</p>;

  const handleChangeName = (strId) => (objEvent) => {
    objEvent.persist();
    setObjStories((prevObjStories) => ({
      ...prevObjStories,
      [strId]: objEvent.target.value,
    }));
  };

  const stories = data?.stories?.map((story) => (
    <Story
      key={story.id}
      name={story.name}
      image={story.image}
      description={story.description}
      handleChangeName={handleChangeName(story.id)}
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
