import { PubSub } from 'graphql-subscriptions'
const pubsub = new PubSub()

const PLAYERS_CHANGED = 'PLAYERS_CHANGED'

const mockPlayers = [
  { id: 445, name: 'Fuddlog Pebbninaan', status: 'preload' },
  { id: 327, name: 'Torbirt Clognoom', status: 'preload' },
  { id: 198, name: 'Klonklil Fofankku', status: 'preload' }
]
// pubsub.publish(PLAYERS_CHANGED, mockPlayers)

export const resolvers = {
  Query: {
    viewer(_parent, _args, _context, _info) {
      return { id: 1, name: 'Foo Barson', status: 'cached' }
    },
  },

  Subscription: {
    activePlayers: {
      subscribe: () => pubsub.asyncIterator(PLAYERS_CHANGED),
    },
  },

  Mutation: {
    addPlayer: () => {
      const id = Math.ceil(Math.random()*1000)
      const newPlayer1 = { id, name: `New Player #${id}`, status: 'mutated1' }
      const newPlayer2 = { id, name: `New Player #${id}`, status: 'mutated2' }
      mockPlayers.push(newPlayer1)
      pubsub.publish(PLAYERS_CHANGED, mockPlayers)
      return newPlayer2
    }
  }
}
