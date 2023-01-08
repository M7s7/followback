import React, { useState } from 'react'
import { userID, userFollowing, getMutuals } from './services/twitterService'
import { Display, Form } from './components'

const App = () => {
  const [names, setNames] = useState(["", ""])
  const [inputs, setInputs] = useState(["", ""])
  const [data, setData] = useState([])

  // Helper functions
  const fetchTwitterData = async (name1, name2) => {
    if (name1 === "" || name2 === "") {
      console.log("Invalid entry")
      return
    }

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

    setData({
      user1: userData1,
      user2: userData2,
      mutuals: mutualList
    })
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
    <div>
      State variables: name0:{names[0]} // name1:{names[1]} // input0:{inputs[0]} // input1:{inputs[1]}
      <Form inputs={inputs} handleInput={handleInput} handleSubmit={handleSubmit} />
      <Display names={names} data={data} fetchData={fetchTwitterData} />
    </div>
  )
}

export default App