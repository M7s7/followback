const cors = require('cors')
require('dotenv').config()
const express = require('express')
const app = express()
const { getID, getFollowing, searchTweets, IDstoUsers } = require('./routes/api-twitter')

// Middleware routes
app.use(cors())
app.use('/ID', getID)
app.use('/following', getFollowing)
app.use('/mentions', searchTweets)
app.use('/ids-to-users', IDstoUsers)

app.get('/test', (req, res) => {
  res.send("API TEST COMPLETED")
})


const port = process.env.PORT || 3001
app.listen(port, () => {
  console.log(`App is listening on ${port}`)
})