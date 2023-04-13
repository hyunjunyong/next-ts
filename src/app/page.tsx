"use client";

import Login from "./login";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const login = new ApolloClient({
  uri: "https://moonshot-user-service.fly.dev/graphql",
  cache: new InMemoryCache(),
});

export default function Home() {
  return (
    <ApolloProvider client={login}>
      <Login />
    </ApolloProvider>
  );
}
