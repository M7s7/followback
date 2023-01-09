import MutualFollowingStatus from './MutualFollowingStatus'
import MutualTweets from './MutualTweets'
import { useState, useEffect } from 'react'

const Display = ({ names, data, fetchData }) => {
  useEffect(() => {
    fetchData(names[0], names[1])
  }, [names])

  const [view, setView] = useState(true)
  if (data.length === 0) {
    return (
      <>
        Enter two usernames to get started!
      </>
    )
  }

  return (
    <div>
      <button onClick={() => setView(!view)}> 
        {view? "See mentioned tweets" : "See mutual friends"} 
      </button>
      
      {view ? <MutualFollowingStatus data={data} /> : <>
          <MutualTweets tweeter={names[0]} mentioned={names[1]} tweetList={data.tweets1} />
          <MutualTweets tweeter={names[1]} mentioned={names[0]} tweetList={data.tweets2} />
        </> }
    </div>
  )
}

export default Display