import { gql } from "@apollo/client";

export const getProduct = gql`
  query {
    getProducts {
      id
      name
      price
      description
      category {
        id
        name
        createdAt
        updatedAt
      }
      productImages {
        imageUrl
        isMain
        id
      }
    }
  }
`;

export const loginMutation = gql`
  mutation Login($email: String!, $password: String!) {
    login(loginUserRequest: { email: $email, password: $password }) {
      userId
      jwtToken
    }
  }
`;

export const signUpMutation = gql`
  mutation signUp($email: String!, $password: String!, $name: String!) {
    signup(
      createUserRequest: {
        email: $email
        password: $password
        name: $name
        userType: "GUEST"
      }
    ) {
      id
      email
      name
      userType
    }
  }
`;
