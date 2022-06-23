import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4qdgamx3pdy01xs2ppcdk2r/master",
  cache: new InMemoryCache(),
});
