import React, { useState, useEffect } from 'react'
import { userID, userFollowing, getMutuals } from './services/twitterService'

const App = () => {
  const [names, setNames] = useState([])
  const [buttonState, toggleButton] = useState(0)
  const [data, setData] = useState([])

  const fetchTwitterData = async (name1, name2) => {
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


  const handleClick = (event) => {
    toggleButton(buttonState + 1);
    console.log(`Button state was ${buttonState}`)
  }


  return (
    <div>
      <Display names={["LauraPrepon", "samirawiley"]} data={data} fetchData={fetchTwitterData} />
    </div>
  )
}


const Display = ({ names, data, fetchData }) => {
  useEffect(() => {
    fetchData(names[0], names[1])
    console.log(data)
  }, [])

  if (data.length === 0) {
    return (
      <>
        Enter two usernames to get started!
      </>
    )
  }


  console.log(data)
  console.log(data.mutuals, data.mutuals.length)

  return (
    <div>
      State variables: {names[0]} {names[1]}
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