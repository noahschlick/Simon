import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
    uri: 'https://sogamoso.stepzen.net/api/silly-cat/__graphql',
    headers: {
        Authorization: `Apikey ${process.env.REACT_APP_STEPZEN_KEY}

        `
    },
    cache: new InMemoryCache(),
})

export default client