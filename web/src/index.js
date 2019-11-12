import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
// Import dependencies for GraphQL
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink} from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

// Create httpLink to connect ApolloClient with GraphQL API
const httpLink = createHttpLink({
    uri: 'http://localhost:4000'
});

// Instantiate ApolloClient
const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});

// Wrap App component inside ApolloProvider higher-order component with client prop and render it
ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
