import MutualFollowingStatus from './MutualFollowingStatus'
import MutualTweets from './MutualTweets'
import { useEffect } from 'react'

const Display = ({ names, data, fetchData }) => {
  useEffect(() => {
    fetchData(names[0], names[1])
  }, [names])

  if (data.length === 0) {
    return (
      <>
        Enter two usernames to get started!
      </>
    )
  }

  console.log(data)

  return (
    <div>
      <MutualFollowingStatus data={data} />
      <MutualTweets tweeter={names[0]} mentioned={names[1]} tweetList={data.tweets1} />
      <MutualTweets tweeter={names[1]} mentioned={names[0]} tweetList={data.tweets2} />
    </div>
  )
}

export default Display