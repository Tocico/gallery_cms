import React from 'react'
import { useQuery } from '@apollo/react-hooks'

const Query = ({ children, query, id }) => {
  const { data, loading, error } = useQuery(query, {
    variables: { id: parseInt(id) }
  })

  if (loading) return <div className="loading"></div>
  if (error) return <p>Error: {JSON.stringify(error)}</p>
  return children({ data })
}

export default Query
