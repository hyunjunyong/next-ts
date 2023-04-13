"use client";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import Client from "./client";
const client = new ApolloClient({
  uri: "https://moonshot-user-service.fly.dev/graphql",
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query {
        getUser(id: 1) {
          id
          email
          name
          userType
        }
      }
    `,
  })
  .then((result) => console.log(result));

export default function Apollo() {
  // const client = ...

  return (
    <ApolloProvider client={client}>
      <Client />
    </ApolloProvider>
  );
}
