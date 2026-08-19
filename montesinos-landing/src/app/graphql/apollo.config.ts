import { provideApollo } from 'apollo-angular';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { HttpLink } from '@apollo/client/link/http';

export const apolloProvider = provideApollo(() => {
  const urilocal = 'http://localhost:4000/graphql';
  const urirender = 'https://montesinos-backend.onrender.com/graphql';
  const httpLink = new HttpLink({
    uri: urirender,
  });

  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
});