import MutualFollowingStatus from './MutualFollowingStatus'
import { useEffect, useState } from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Center, Text, Spinner, VStack } from '@chakra-ui/react'
import { MyButton } from './UIElements'
import MentionsBlock from './MentionsBlock.js'

const Display = ({ names, data, fetchData, loading }) => {
  useEffect(() => {
    fetchData(names[0], names[1])
  }, [names])

  const [view, setView] = useState(false)

  if (loading) {
    return (
      <VStack>
        <Spinner
          color='blue.500'
        />
        <Text>Fetching data</Text>
      </VStack>
    )
  }

  if (data.length === 0) {
    return (
      <Text>
        Enter two twitter handles to get started!
      </Text>
    )
  }

  if (data.hasOwnProperty('message')) { 
    return (
      <VStack>
        <Text>Something went wrong.</Text>
        <Text fontStyle='italic'>Query: {names[0]}, {names[1]}</Text>
      </VStack>
    )
  }


  console.log(data)
  return (
    <Tabs isFitted variant='enclosed'>
      <TabList mb='1em'>
        <Tab>Friends</Tab>
        <Tab>Mentions</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <MutualFollowingStatus data={data} />
        </TabPanel>
        <TabPanel>
          <Center>
            <MyButton
              value='toggle order'
              handleClick={() => setView(!view)}
              width='120px'
              color='red'
            />
          </Center>
            <MentionsBlock view={view} data={data} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default Display