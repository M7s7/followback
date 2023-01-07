import React, { useState, useEffect } from 'react'
import { userID, userFollowing, getMutuals } from './services/twitterService'

const App = () => {
  const [names, setNames] = useState([])
  const [buttonState, toggleButton] = useState(0)
  const [data, setData] = useState([])
  const [mutuals, setMutuals] = useState([])

  //useEffect(() => {
    //setNames(["LauraPrepon", "tayschilling"])
  //}, [])

  const fetchTwitterData = async (name1, name2) => {
    const ID1 = await userID(name1)
    const friends1 = await userFollowing(ID1.data.id)

    const userData1 = {
      ID: ID1.data,
      friends: friends1._realData.ids
    }

    const ID2 = await userID(name2)
    const friends2 = await userFollowing(ID2.data.id)

    const userData2 = {
      ID: ID2.data,
      friends: friends2._realData.ids
    }

    const mutualList = await getMutuals(userData1.friends, userData2.friends)
    console.log(mutualList)
    setMutuals(mutualList)
    setData([userData1, userData2])
  }


  const handleClick = (event) => {
    toggleButton(buttonState + 1);
    console.log(`Button state was ${buttonState}`)
  }


  return (
    <div>
      <Display names={["LauraPrepon", "tayschilling"]} data={data} fetchData={fetchTwitterData} mutuals={mutuals} />
    </div>
  )
}


const Display = ({ names, data, fetchData, mutuals }) => {
  useEffect(() => {
    fetchData(names[0], names[1])
    console.log(data)
  }, [])

  if (data.length != 2) {
    return (
      <>
      Currently loading...
      </>
    )
  }
  console.log(data)

  console.log(mutuals, mutuals.length)


  return (
    <div>
      These two users are {names[0]} and {names[1]}
      {names[0]} has {} friends


    </div>
  )
}

export default App