import axios from 'axios'
const baseUrl = "http://localhost:3001"

const userID = async (user) => {
  try {
    const res = await axios.get(`${baseUrl}/ID?user=${user}`)
    return res.data

  } catch (err) {
    console.error(`ERROR: ${err}`)
  }
}


const userFollowing = async (ID) => {
  try {
    const res = await axios.get(`http://localhost:3001/following?ID=${ID}`)
    console.log(res.data)
    return res.data

  } catch (err) {
    console.error(`ERROR: ${err}`)
  }
}


const getMutuals = async (list1, list2) => {
  try {
    const mutualIDs = list1.filter(ID => list2.includes(ID))
    const res = await axios.get(`http://localhost:3001/ids-to-users`, {
      params: {
        IDs: JSON.stringify(mutualIDs)
      }
    })
    console.log(res.data)
    return res.data

  } catch (err) {
    console.error(`ERROR: ${err}`)
  }
}

export { userID, userFollowing, getMutuals }