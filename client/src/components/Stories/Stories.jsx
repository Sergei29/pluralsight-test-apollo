import React from "react";
import { useQuery } from "@apollo/client";
import { STORIES_QUERY } from "../../graphql/queries";
import Story from "../Story/Story";

const Stories = () => {
  const { loading, error, data } = useQuery(STORIES_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  const stories = data?.stories?.map((story) => (
    <Story
      key={story.id}
      name={story.name}
      image={story.image}
      description={story.description}
    />
  ));

  return (
    <div className="container crf-story">
      <div className="row">{stories}</div>
    </div>
  );
};

export default Stories;
