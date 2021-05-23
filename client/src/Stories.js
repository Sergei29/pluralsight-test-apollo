import React from 'react';
import { useQuery, gql } from '@apollo/client';

const STORIES_QUERY = gql`
  {
    stories {
      id
      name
      image
      description
    }
  }
`;

const Stories = () => {
  const { loading, error, data } = useQuery(STORIES_QUERY);
  console.log({ error, data });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const stories = data?.stories?.map((story) => (
    <div className='col-lg-3 col-md-6' key={story.id}>
      <a href='#'>
        <div className='crf-story--image'>
          <img alt={story.name} src={story.image} />
        </div>
        <div className='crf-story--text'>
          <h3>{story.name}</h3>
          <div>{story.description}</div>
        </div>
      </a>
    </div>
  ));
  return (
    <div className='container crf-story'>
      <div className='row'>{stories}</div>
    </div>
  );
};

export default Stories;
