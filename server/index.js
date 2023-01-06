require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const { getID, getFollowing, searchTweets } = require('./routes/api-twitter')

// Middleware routes
app.use(cors())
app.use('/ID', getID)
app.use('/following', getFollowing)
app.use('/mentions', searchTweets)
//app.use('/toUsers', IDstoUsers)


const port = process.env.PORT || 3001
app.listen(port, () => {
  console.log(`App is listening on ${port}`)
})