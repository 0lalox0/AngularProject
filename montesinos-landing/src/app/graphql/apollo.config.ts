import { provideApollo } from 'apollo-angular';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { HttpLink } from '@apollo/client/link/http';

const runtimeEnv = (globalThis as any).__ENV__ ?? {};
const graphqlUri =
  runtimeEnv.GRAPHQL_URI || 'https://montesinos-backend.onrender.com/graphql';

export const apolloProvider = provideApollo(() => {
  const httpLink = new HttpLink({
    uri: graphqlUri,
  });

  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
});