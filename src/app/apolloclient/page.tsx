// "use client";

import {
  HttpLink,
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import Client from "./client";

let client: ApolloClient<any> | null = null;

const getClient = () => {
  if (!client || typeof window === "undefined") {
    client = new ApolloClient({
      link: new HttpLink({
        uri: "https://moonshot-user-service.fly.dev/graphql",
        // uri:"http://moonshot-api.hannah-log.site/graphql",
      }),
      cache: new InMemoryCache(),
    });
    return client;
  }
};

export default function Apollo() {
  const client = getClient();

  return (
    <ApolloProvider client={client}>
      <Client />
    </ApolloProvider>
  );
}
