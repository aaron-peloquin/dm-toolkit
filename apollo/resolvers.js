import { PubSub } from 'apollo-server'
const pubsub = new PubSub()
console.log({ pubsub })

const mockPlayers = [
	{ id: 445, name: 'Fuddlog Pebbninaan', status: 'active' },
	{ id: 327, name: 'Torbirt Clognoom', status: 'active' },
	{ id: 198, name: 'Klonklil Fofankku', status: 'active' }
]

export const resolvers = {
	Query: {
		viewer(_parent, _args, _context, _info) {
			return { id: 1, name: 'Foo Barson', status: 'cached' }
		},
	},

	Subscription: {
		activePlayers(_parent, _args, _context, _info) {
			return mockPlayers
		},
	},

	Mutation: {
		addPlayer: () => {}
	}
}
