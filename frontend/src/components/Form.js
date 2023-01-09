import { HStack, Center, Box, Text } from '@chakra-ui/react'
import { UserInput, MyButton } from './UIElements'

const Form = ({ inputs, handleInput, handleSubmit }) => {
  return (
      <Box align='center'>
        <Text> 
          Do @
          <b>
            {inputs[0] === "" 
              ? "?" 
              : inputs[0]
            }
          </b> 
          <span> and @</span>
          <b>
            {inputs[1] === "" 
              ? "?" 
              : inputs[1]
            }
          </b> 
          <span> follow each other?</span>
        </Text>

          <Center>
          <HStack alignItems='center'>
            <UserInput value={inputs[0]} id="user1" handleInput={handleInput} /> 
            <UserInput value={inputs[1]} id="user2" handleInput={handleInput} />
          </HStack>
        </Center>
        <MyButton value="Let's find out!" handleClick={handleSubmit} width="410px" color='twitter'/>
      </Box>
  )
}

export default Form