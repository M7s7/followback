import MutualTweets from './MutualTweets'

const MentionsBlock = ({ view, data }) => {
  const tweeter1 = <a href={`https://twitter.com/${data.user1.username}`}><b>{data.user1.username}</b></a>
  const tweeter2 = <a href={`https://twitter.com/${data.user2.username}`}><b>{data.user2.username}</b></a>

  return (
    <>
      {view ? 
        <MutualTweets tweeter={tweeter1} mentioned={tweeter2} tweetList={data.tweets1} /> 
        :<MutualTweets tweeter={tweeter2} mentioned={tweeter1} tweetList={data.tweets2} />
      }
    </>
  )
}

export default MentionsBlock