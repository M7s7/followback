import React, { useState } from 'react'
import { ChakraProvider, Heading } from '@chakra-ui/react'
import { Center, Text, Box, VStack } from  '@chakra-ui/react'
import { userID, userFollowing, getMutuals, getTweets } from './services/twitterService'
import { Display, Form } from './components'

const App = () => {
  const [names, setNames] = useState(["", ""])
  const [inputs, setInputs] = useState(["", ""])
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  // Helper functions
  const fetchTwitterData = async (name1, name2) => {
    try {
      if (name1 === "" && name2 === "") {
        console.log("App.js: fetchTwitterData: Invalid names.")
        return
      }
      
      setLoading(true)
      const ID1 = await userID(name1)
      const friends1 = await userFollowing(ID1.data.id)
  
      const userData1 = {
        ID: ID1.data.id,
        name: ID1.data.name,
        username: ID1.data.username,
        friends: friends1._realData.ids
      }
  
      const ID2 = await userID(name2)
      const friends2 = await userFollowing(ID2.data.id)
  
      const userData2 = {
        ID: ID2.data.id,
        name: ID2.data.name,
        username: ID2.data.username,
        friends: friends2._realData.ids
      }
  
      const mutualList = await getMutuals(userData1.friends, userData2.friends)
      console.log(mutualList)
  
      const user1Tweets = await getTweets(name1, name2)
      const user2Tweets = await getTweets(name2, name1)
  
      setData({
        user1: userData1,
        user2: userData2,
        mutuals: mutualList,
        tweets1: user1Tweets,
        tweets2: user2Tweets
      })

      setLoading(false)

    } catch (err) {
      console.log(`App.js: fetchTwitterData failed! ${err}`)
      setData(err)
      setLoading(false)
    }
  }

  const handleInput = (event) => {
    if (event.target.id === "user1") {
      setInputs([event.target.value, inputs[1]])
    }

    if (event.target.id === "user2") {
      setInputs([inputs[0], event.target.value])
    }
  }


  const handleSubmit = (event) => {
    event.preventDefault()
    setNames(inputs)
    console.log(names, inputs)
  }

  return (
    <ChakraProvider>
      <Center>
        <VStack>
          <Box>
            <Heading m={4} mt={100} align='center'>followback</Heading>
            <Text fontStyle='italic' fontSize='x1'>
              Find out if they feel the same way.
            </Text>
          </Box>
          <Form inputs={inputs} handleInput={handleInput} handleSubmit={handleSubmit} />
          <Display names={names} data={data} fetchData={fetchTwitterData} loading={loading} />
        </VStack>
      </Center>
    </ChakraProvider>
  )
}

export default App