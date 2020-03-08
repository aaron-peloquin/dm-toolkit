import gql from 'graphql-tag'

export const typeDefs = gql`
type Player {
  id: ID
  name: String
  status: String
}

type Query {
  viewer: Player
}

  
type Subscription {
  activePlayers: [Player]
}

type Mutation {
  addPlayer: Player
}
`