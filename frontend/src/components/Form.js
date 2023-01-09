import { HStack, Center, Box, Text } from '@chakra-ui/react'
import { UserInput, MyButton } from './UIElements'

const Form = ({ inputs, handleInput, handleSubmit }) => {
  return (
    <div>
      {inputs[0]} {inputs[1]}
      <Box align='center'>
        <Text> Do @<b>{inputs[0] === "" ? "?" : inputs[0]}</b> and @<b>{inputs[1] === "" ? "?" : inputs[1]}</b> follow each other? </Text>
          <Center>
          <HStack alignItems='center'>
            <UserInput value={inputs[0]} id="user1" handleInput={handleInput} /> 
            <UserInput value={inputs[1]} id="user2" handleInput={handleInput} />
          </HStack>
        </Center>
        <MyButton value='Go!' handleClick={handleSubmit} width="410px"/>
      </Box>
    </div>
  )
}

export default Form