import { VStack, Center, Text } from '@chakra-ui/react'
import { UserCard } from './UIElements'

const MutualFollowingStatus = ({ data }) => {
  const ID1 = data.user1.ID
  const ID2 = data.user2.ID

  const name1 = <a href={`https://twitter.com/${data.user1.username}`}><b>{data.user1.username}</b></a>
  const name2 = <a href={`https://twitter.com/${data.user2.username}`}><b>{data.user2.username}</b></a>
  
  const friendsList1 = data.user1.friends
  const friendsList2 = data.user2.friends

  const oneFollowsTwo = friendsList1.includes(ID2)
  const twoFollowsOne = friendsList2.includes(ID1)

  let status;
  if (oneFollowsTwo && twoFollowsOne) {
      status = <Text> 
          @{name1} and @{name2} follow each other. 
        </Text>
  } else if (oneFollowsTwo) {
    status = <Text> 
        @{name1} follows @{name2}, but @{name2} does not follow back. 
      </Text>
  } else if (twoFollowsOne) {
    status = <Text> 
        @{name2} follows @{name1}, but @{name1} does not follow back. 
      </Text>
  } else {
    status = <Text> 
        @{name1} and @{name2} do not follow each other. 
      </Text>
  } 

  if (data.mutuals.data == null) { 
    return (
      <Text>There are no users that they both follow.</Text>
    )
  }

  const count = data.mutuals.data.length
  return (
    <div>
      <Center>
        <VStack>
          {status}
          <Text>
            There {count === 1 ? <>is <b>{count} </b> user </>: <>are <b>{count}</b> users </>} 
            that they both follow:
          </Text>
          {data.mutuals.data.map((user) => UserCard(user))}
        </VStack>
      </Center>
    </div>
  )
}

export default MutualFollowingStatus