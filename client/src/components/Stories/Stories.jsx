import React from "react";
import { useQuery } from "@apollo/client";
import { STORIES_QUERY } from "../../graphql/queries";
import Story from "../Story/Story";

const Stories = () => {
  const { loading, error, data } = useQuery(STORIES_QUERY, {
    errorPolicy: "all",
  });

  if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error loading data.</p>;

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
      {error && <p>Error loading data.</p>}
      <div className="row">{stories}</div>
    </div>
  );
};

export default Stories;
