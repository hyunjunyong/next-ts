import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

export function getClient() {
  let client: ApolloClient<any> | null = null;
  if (!client || typeof window === "undefined") {
    client = new ApolloClient({
      link: new HttpLink({
        uri: "http://moonshot-api.hannah-log.site:3000/graphql",
      }),
      cache: new InMemoryCache(),
    });
  }

  return client;
}
