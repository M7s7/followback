const { TwitterApi } = require('twitter-api-v2');
const client = new TwitterApi(process.env.BEARER_TOKEN)

const getID = async (req, res, next) => {
  try {
    const name = req.query.user
    const info = await client.v2.userByUsername(name)
    console.log(info)
    res.send(info)
    next()

  } catch (err) {
    console.log(`Server error - 'getID: ${err}`)
    res.send(err)
  }
}

const getFollowing = async (req, res, next) => {
  try {
    const ID = req.query.ID
    const friends = await client.v1.userFollowingIds({ user_id: ID })
    console.log(friends)
    res.send(friends)
    next()

  } catch (err) {
    console.log(`Server error - 'getFollowing: ${err}`)
    res.send(err)
  }
}

const searchTweets = async (req, res, next) => {
  try {
    const tweeter = req.query.tweeter
    const mentioned = req.query.mentioned
    const tweets = await client.v2.search(`from:${tweeter} @${mentioned}`)
    console.log(tweets)
    res.send(tweets)
    next()

  } catch (err) {
    console.log(`Server error - 'searchTweets: ${err}`)
    res.send(err)
  }
}

const IDstoUsers = async (req, res, next) => {
  try {
    const IDList = JSON.parse(req.query.IDs)
    console.log(IDList, IDList.length)

    if (IDList.length === 0 || IDList.length > 100) {
      console.log(`List is too long/short - 'IDstoUsers'`)
      res.send(IDList)
      return
    }

    const users = await client.v2.users(IDList, {
      'user.fields':'profile_image_url'
    })
    console.log(users)
    res.send(users)
    next()

  } catch (err) {
    console.log(`Server error - 'IDstoUsers: ${err}`)
    res.send(err)
  }
}

module.exports = { getID, getFollowing, searchTweets, IDstoUsers }