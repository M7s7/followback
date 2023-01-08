import React, { useState, useEffect } from 'react'
import { userID, userFollowing, getMutuals } from './services/twitterService'

const App = () => {
  const [names, setNames] = useState(["", ""])
  const [inputs, setInputs] = useState(["", ""])
  const [data, setData] = useState([])

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

const Form = ({ inputs, handleInput, handleSubmit }) => {
  return (
<div>
    <input value={inputs[0]} id="user1" onChange={handleInput} />
    <input value={inputs[1]} id="user2" onChange={handleInput} />
    <button onClick={handleSubmit}> GO! </button>
</div>
  )
 }


const Display = ({ names, data, fetchData }) => {
  useEffect(() => {
    fetchData(names[0], names[1])
    console.log(data)
  }, [names])

  if (data.length === 0) {
    return (
      <>
        Enter two usernames to get started!
        names are {names[0]} and {names[1]}
      </>
    )
  }


  console.log(data)
  console.log(data.mutuals, data.mutuals.length)

  return (
    <div>
      <MutualFollowingStatus data={data} />
    </div>
  )
}



const MutualFollowingStatus = ({ data }) => {
  const ID1 = data.user1.ID
  const ID2 = data.user2.ID

  const name1 = data.user1.username
  const name2 = data.user2.username
  
  const friendsList1 = data.user1.friends
  const friendsList2 = data.user2.friends

  const oneFollowsTwo = friendsList1.includes(ID2)
  const twoFollowsOne = friendsList2.includes(ID1)

  let status;
  if (oneFollowsTwo && twoFollowsOne) {
      status = <div> 
          @{name1} and @{name2} are following each other.
        </div>
  } else if (oneFollowsTwo) {
    status = <div> 
        @{name1} follows @{name2}, but the feeling is not mutual. 
      </div>
  } else if (twoFollowsOne) {
    status = <div> 
        @{name2} follows @{name1}, but the feeling is not mutual. 
      </div>
  } else {
    status = <div> 
        @{name1} and @{name2} do not follow each other. 
      </div>
  } 

  const eachUser = (user) => {
    return (
      <div>
        {user.name} 
        <a href={"https://twitter.com/" + user.username}> (@{user.username})</a> 
      </div>
    )
  }


  return (
    <div>
      {status}
      Furthermore, there are {data.mutuals.data.length} users that they both follow: 
      {data.mutuals.data.map((user) => eachUser(user))}
    </div>
  )
}


export default App