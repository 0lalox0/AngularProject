import { provideApollo } from 'apollo-angular';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { HttpLink } from '@apollo/client/link/http';

export const apolloProvider = provideApollo(() => {
  const httpLink = new HttpLink({
    uri: 'http://localhost:4000/graphql',
  });

  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
});