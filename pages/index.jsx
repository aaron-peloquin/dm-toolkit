import React from 'react'
import gql from 'graphql-tag'
import Navigation from './../components/organisms/Navigation'
import { useQuery } from '@apollo/react-hooks'

const ViewerQuery = gql`
  query ViewerQuery {
    viewer {
      id
      name
      status
    }
  }
`

const Index = () => {
  const { data = {}, loading } = useQuery(ViewerQuery)
  const { viewer = {} } = data
  const { name, status } = viewer

  return <>
    <h1>Home</h1>
    <Navigation />
    {loading && <strong>Loading...</strong>}
    {viewer && <>
      <h2>Query results</h2>
      <ul>
        <li><strong>Name: </strong>{name}</li>
        <li><strong>Status: </strong>{status}</li>
      </ul>
    </>}
  </>
}

export default Index
