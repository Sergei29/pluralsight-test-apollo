const { ApolloServer, gql, ApolloError } = require("apollo-server");
const fs = require("fs");

const typeDefs = gql`
  type Story {
    id: ID!
    name: String!
    image: String!
    description: String!
    extra: String
  }

  type Query {
    stories: [Story!]!
  }

  type Mutation {
    editStoryName(id: ID!, name: String!): Story
  }
`;

const resolvers = {
  Query: {
    stories: (parent, args, ctx, info) => {
      const data = fs.readFileSync("./stories.json", "utf-8");
      const stories = JSON.parse(data);
      return stories;
    },
  },
  Story: {
    extra: (parent, args, ctx, info) => {
      return new ApolloError("This is not a real field");
    },
  },
  Mutation: {
    editStoryName: (parent, args, ctx, info) => {
      const { id, name } = args;
      const strStories = fs.readFileSync("./stories.json", "utf-8");
      const arrStories = JSON.parse(strStories);
      const arrNewStories = arrStories.map((objStory) => {
        if (objStory.id === id) {
          return {
            ...objStory,
            name,
          };
        }
        return objStory;
      });
      fs.writeFileSync("./stories.json", JSON.stringify(arrNewStories));
      return arrNewStories.find((objStory) => objStory.id === id);
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server started at ${url}`);
});
