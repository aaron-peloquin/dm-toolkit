import React, { useCallback } from 'react'
import gql from 'graphql-tag'
import { useSubscription, useMutation } from '@apollo/react-hooks'

import Navigation from './../components/organisms/Navigation'

type T_Player = {
  id: number
  name?: string
  status?: string
}

interface I_PlayerListSubscription {
  activePlayers: T_Player[]
}


const test_subscription = gql`
subscription subActivePlayers {
  activePlayers {
  id
  name
  }
}`

const create_new_player = gql`
mutation create_new_player {
  addPlayer {
    id
    name
    status
  }
}`

const Playground = () => {
  const { data, loading } = useSubscription<I_PlayerListSubscription>(test_subscription)
  const [makeNewPlayer, mutationBag] = useMutation(create_new_player)
  const activePlayers = data?.activePlayers

  const handleNewPlayer = useCallback(() => {
    makeNewPlayer()
  }, [makeNewPlayer])

  console.log({ activePlayers, mutationBag })

  return <>
    <h1>Playground!</h1>
    <Navigation />
    <button onClick={handleNewPlayer}>New</button>
    {loading
      ? <p>Loading...</p>
      : <ul>{activePlayers?.map(player => <li key={player.name}>{player.name}</li>)}</ul>
    }
  </>
}

export default Playground
