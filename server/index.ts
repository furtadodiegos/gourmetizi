import { makeExecutableSchema } from '@graphql-tools/schema';
import { ApolloServer } from 'apollo-server-express';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { execute, GraphQLError, subscribe } from 'graphql';
// import { PubSub, withFilter } from 'graphql-subscriptions';
import { createServer } from 'http';
import { verify } from 'jsonwebtoken';
import { SubscriptionServer } from 'subscriptions-transport-ws';

import resolvers from './resolvers';
import typeDefs from './types';
// const pubsub = new PubSub();

// For polling lesson
// setInterval(() => {
//   if (unpublishedCategories.length === 0) {
//     return;
//   }
//   const newCategory = unpublishedCategories.shift();
//   categories.unshift(newCategory);
//   console.log("ADDED CATEGORY");
// }, 45000);

// For subscription lesson
// setInterval(() => {
//   if (unpublishedNotes.length === 0) {
//     return;
//   }
//   const newNote = unpublishedNotes.shift();
//   allNotes.unshift(newNote);
//   pubsub.publish('NEW_SHARED_NOTE', {
//     newSharedNote: newNote,
//   });
//   console.log('PUBLISHED NOTE');
// }, 30000);

const publicRoutes = ['login'];

(async () => {
  const app = express();

  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  const httpServer = createServer(app);

  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  const server = new ApolloServer({
    schema,
    context: ({ req }) => {
      const { authorization = '' } = req.headers;
      const { operationName } = req.body;

      const token = authorization.split(' ')[1] || req.get('x-api-admin-secret');

      try {
        let user = {};

        if (!publicRoutes.includes(operationName))
          user = verify(token, operationName === 'refresh' ? 'refreshSecret' : 'secret');

        return { ...req, user };
      } catch (err) {
        throw new GraphQLError('You must be logged in to see this information.', {
          extensions: { code: 'UNAUTHENTICATED' },
        });
      }
    },
  });

  await server.start();

  server.applyMiddleware({ app });

  SubscriptionServer.create({ schema, execute, subscribe }, { server: httpServer, path: server.graphqlPath });

  const PORT = 4000;

  httpServer.listen(PORT, () => console.log(`Server is now running on http://localhost:${PORT}/graphql`));
})();
