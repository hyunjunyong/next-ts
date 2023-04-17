import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

export async function handler(request: Request, response: Response) {
    let client: ApolloClient<any> | null = null;
  
  if (!client || typeof window === "undefined") {
    client = new ApolloClient({
      link: new HttpLink({
        uri: "https://moonshot-user-service.fly.dev/graphql",
      }),
      cache: new InMemoryCache(),
    });
    console.log(request, response);
  if(request.method === "POST"){
    if(request.body?.email === '' || request.body?.pw===''){
        return response.status(500).json('빈칸있음')
    }
    try{

    }
  }
  return response.redirect("/main");
}

// example
//   import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

//   let client: ApolloClient<any> | null = null;

//   export const getClient = () => {
//     // create a new client if there's no existing one
//     // or if we are running on the server.
    // if (!client || typeof window === "undefined") {
    //   client = new ApolloClient({
    //     link: new HttpLink({
    //       uri: "https://main--time-pav6zq.apollographos.net/graphql",
    //     }),
    //     cache: new InMemoryCache(),
    //   });
//     }

//     return client;
//   };
