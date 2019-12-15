import gql from 'graphql-tag'

export const typeDefs = gql`
  type Player {
    id: ID!
    name: String!
    status: String!
  }

  type Query {
    viewer: User
  }

  type Subscription {
    newPlayer: Player
  }
`