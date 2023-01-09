import { TwitterTweetEmbed } from 'react-twitter-embed';

const MutualTweets = ({ tweeter, mentioned, tweetList }) => {
  console.log(tweetList)
  if (tweetList == null) {
    return (
      <div>
        @{tweeter} has not mentioned @{mentioned} in their recent tweets.
      </div>
    )
  }

  const renderTweet = (tweet) => {
    return (
      <TwitterTweetEmbed
        tweetId={tweet.id}
      />
    )
  }

  return (
      <div>
        @{tweeter} has mentioned @{mentioned} 
        {tweetList.length === 1 ? 
        ` ${tweetList.length} time `
        :` ${tweetList.length} times `}
         in their recent tweets:
        {tweetList.map((tweet) => renderTweet(tweet))}
      </div>
  )
}

export default MutualTweets