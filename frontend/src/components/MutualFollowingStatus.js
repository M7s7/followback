const MutualFollowingStatus = ({ data }) => {
  const ID1 = data.user1.ID
  const ID2 = data.user2.ID

  const name1 = <a href={`https://twitter.com/${data.user1.username}`}> {data.user1.username} </a>
  const name2 = <a href={`https://twitter.com/${data.user2.username}`}> {data.user2.username} </a>
  
  const friendsList1 = data.user1.friends
  const friendsList2 = data.user2.friends

  const oneFollowsTwo = friendsList1.includes(ID2)
  const twoFollowsOne = friendsList2.includes(ID1)

  let status;
  if (oneFollowsTwo && twoFollowsOne) {
      status = <div> 
          @{name1} and @{name2} follow each other. 
        </div>
  } else if (oneFollowsTwo) {
    status = <div> 
        @{name1} follows @{name2}, but @{name2} does not follow back. 
      </div>
  } else if (twoFollowsOne) {
    status = <div> 
        @{name2} follows @{name1}, but @{name1} does not follow back. 
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
        <img src={user.profile_image_url} />
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

export default MutualFollowingStatus