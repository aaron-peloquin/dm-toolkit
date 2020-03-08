import gql from 'graphql-tag'

export const typeDefs = gql`
type User {
  id: ID!
  name: String!
  status: String!
}

type Query {
  viewer: User
}

type Player {
  id: ID!
  name: String!
  status: String!
}

  
type Subscription {
  activePlayers: [Player]
}

type Mutation {
  addPlayer: [Player]
}
`