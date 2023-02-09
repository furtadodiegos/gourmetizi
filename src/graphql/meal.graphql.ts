import { gql } from '@apollo/client';

export const ALL_MEAL_QUERY = gql(`
  query getAllMeals {
    meals {
      id
      label
      description
      picture
      price
      categoryId
    }
  }
`);
