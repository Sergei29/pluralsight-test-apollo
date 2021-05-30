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
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server started at ${url}`);
});
