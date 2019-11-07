// Apollo SERVER
// Apollo Server is not needed if you are using an external API 
import { ApolloServer, gql } from 'apollo-server-micro';
import { mergeResolvers, mergeTypeDefs } from 'graphql-toolkit';
import connectDb from '../../lib/mongoose';
import { habitsResolvers } from '../../src/api/habits/resolvers';
import { habitsMutations } from '../../src/api/habits/mutations';
import Habits from '../../src/api/habits/Habits.graphql';


const resolvers = mergeResolvers([
  habitsResolvers,
  habitsMutations
]);

const typeDefs = mergeTypeDefs([Habits]);

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false
  }
};

const server = apolloServer.createHandler({ path: '/api/graphql' });
export default connectDb(server);


// const TypeDefs = gql`
//   type Query {
//     sayHello: String
//   }
// `;

// const Resolvers = {
//   Query: {
//     sayHello: () => {
//       return 'Hello Level Up!';
//     }
//   }
// };