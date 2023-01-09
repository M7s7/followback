import MutualFollowingStatus from './MutualFollowingStatus'
import { useEffect, useState } from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Center } from '@chakra-ui/react'
import { MyButton } from './UIElements'
import MentionsBlock from './MentionsBlock.js'

const Display = ({ names, data, fetchData }) => {
  useEffect(() => {
    fetchData(names[0], names[1])
  }, [names])

  const [view, setView] = useState(false)
  if (data.length === 0) {
    return (
      <>
        Enter two twitter handles to get started!
      </>
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