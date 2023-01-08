import axios from 'axios'
const baseUrl = process.env.REACT_APP_SERVER_URL


const userID = async (user) => {
  try {
    const res = await axios.get(`${baseUrl}/ID`, {
      params: {
        user:user
      }
    })
    return res.data

  } catch (err) {
    console.error(`ERROR: ${err}`)
  }
}


const userFollowing = async (ID) => {
  try {
    const res = await axios.get(`${baseUrl}/following`, {
      params: {
        ID:ID
      }
    })
    console.log(res.data)
    return res.data

  } catch (err) {
    console.error(`ERROR: ${err}`)
  }
}


const getMutuals = async (list1, list2) => {
  try {
    const mutualIDs = list1.filter(ID => list2.includes(ID))
    const res = await axios.get(`${baseUrl}/ids-to-users`, {
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