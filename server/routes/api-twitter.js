const { TwitterApi } = require('twitter-api-v2');
const client = new TwitterApi(process.env.BEARER_TOKEN)

const getID = async (req, res, next) => {
  const name = req.query.user
  const info = await client.v2.userByUsername(name)
  console.log(info)
  res.send(info)
  next()
}

const getFollowing = async (req, res, next) => {
  const ID = req.query.ID
  const friends = await client.v1.userFollowingIds({ user_id: ID })
  console.log(friends)
  res.send(friends)
  next()
}

const searchTweets = async (req, res, next) => {
  const tweeter = req.query.tweeter
  const mentioned = req.query.mentioned
  const tweets = await client.v2.search(`from:${tweeter} @${mentioned}`)
  console.log(tweets)
  res.send(tweets)
  next()
}

const IDstoUsers = async (req, res, next) => {
  const IDList = JSON.parse(req.query.IDs)
  const users = await client.v2.users(IDList)
  console.log(users)
  res.send(users)
  next()
}

module.exports = { getID, getFollowing, searchTweets, IDstoUsers }