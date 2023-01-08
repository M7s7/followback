import MutualFollowingStatus from './MutualFollowingStatus'
import { useEffect } from 'react'

const Display = ({ names, data, fetchData }) => {
  useEffect(() => {
    fetchData(names[0], names[1])
    console.log(data)
  }, [names])

  if (data.length === 0) {
    return (
      <>
        Enter two usernames to get started!
        names are {names[0]} and {names[1]}
      </>
    )
  }

  return (
    <div>
      <MutualFollowingStatus data={data} />
    </div>
  )
}

export default Display