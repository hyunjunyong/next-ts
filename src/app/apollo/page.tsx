import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://flyby-router-demo.herokuapp.com/",
  cache: new InMemoryCache(),
});

export default function Apollo() {
  // const client = ...

  client
    .query({
      query: gql`
        query GetLocations {
          locations {
            id
            name
            description
            photo
          }
        }
      `,
    })
    .then((result) => console.log(result));
  // eslint-disable-next-line react/no-children-prop
  return (
    <div>
      <ApolloProvider client={client} children={undefined} />
    </div>
  );
}
