import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql(`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      accessToken
      refreshToken
    }
  }
`);

export const REFRESH_TOKEN_MUTATION = gql(`
  mutation refresh {
    refresh {
      accessToken
      refreshToken
    }
  }
`);

export const ME_QUERY = gql(`
  query getMe {
    me {
      id
      name
      email
    }
  }
`);
