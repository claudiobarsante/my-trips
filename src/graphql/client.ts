import { GraphQLClient } from 'graphql-request';

const endpoint = process.env.GRAPHQL_HOST || '';
// 'https://api-ca-central-1.graphcms.com/v2/cko4swhyxrrka01z12h26hacf/master';

console.log('token', process.env.GRAPHQL_TOKEN);
const client = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.GRAPHQL_TOKEN}`
  }
});

export default client;
