import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

export async function handler(request: Request, response: Response) {
  console.log(request, response);
  if (request.method === "POST") {
    if (request.body?.email === "" || request.body?.pw === "") {
      return response.status(500).json("빈칸있음");
    }
    // try{

    // }
  }
  return response.redirect("/main");
}
