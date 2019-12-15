import gql from 'graphql-tag'
import { useSubscription } from '@apollo/react-hooks'

const test_subscription = gql`
subscription subActivePlayers {
  activePlayers {
    id
    name
  }
}`

const Playground = ({}) => {
  const { data = {}, loading } = useSubscription(test_subscription)
  const { activePlayers = [] } = data

  console.log({activePlayers})

  return <div>
    <h1>Playground!</h1>
    {loading
      ? <p>Loading...</p>
      : <ul>{activePlayers.map(player => <li key={player.name}>{player.name}</li>)}</ul>
    }
  </div>
}

export default Playground
