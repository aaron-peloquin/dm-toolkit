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
  const { data = {} } = useQuery(ViewerQuery)
  const { viewer = {} } = data
  const { name, status } = viewer

  if (viewer) {
    return (
      <div>
        <Navigation />
        <p>GQL Data came back with...</p>
        <ul>
          <li><strong>Name: </strong>{name}</li>
          <li><strong>Status: </strong>{status}</li>
        </ul>
      </div>
    )
  }

  return null
}

export default Index
