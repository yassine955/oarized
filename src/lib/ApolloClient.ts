import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_GraphQLURI,
  credentials: "same-origin",
});

const clientAPOLLO = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export { clientAPOLLO };
