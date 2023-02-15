import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Authentication {
    accessToken: String!
    refreshToken: String!
  }

  type User {
    id: String!
    name: String!
    email: String!
    password: String!
  }

  type Category {
    id: String!
    label: String!
  }

  type Meal {
    id: String!
    label: String!
    description: String!
    picture: String!
    price: Int!
    categoryId: String!
  }

  type Item {
    id: String!
    meal: Meal!
    quantity: Int!
    comment: String
  }

  type Order {
    id: String!
    items: [Item]!
    total: Int!
  }

  type Query {
    categories: [Category]
    meals(categoryId: String, offset: Int, limit: Int): [Meal]
    me: User
  }

  type Mutation {
    login(username: String!, password: String!): Authentication
    refresh: Authentication
  }
`;

export default typeDefs;
