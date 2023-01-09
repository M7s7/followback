import { Button, ButtonGroup, Input, InputLeftElement, InputGroup, Box, Text, Flex, Avatar, Link } from '@chakra-ui/react'

const UserCard = (user) => {
    return (
      <Box w='120%' bg='white' borderWidth='2px' borderRadius='100' pt='2%' pb='2%'>
        <Flex pl='2%'>
          <Avatar src={user.profile_image_url}/>
          <Box pl='4%'>
            <Text fontWeight='bold'>
              {user.name}
            </Text>
            <Link color='#1DA1F2' href={"https://twitter.com/" + user.username}>
              @{user.username}
            </Link>
          </Box>
        </Flex>
      </Box>
    )
}

const UserInput = ({ value, id, handleInput }) => {
    return (
      <InputGroup maxWidth="200px">
        <InputLeftElement
          children='@'
          fontStyle='italic'
          color='gray.500'
        />
        <Input size='md'
          placeholder='username'
          variant='filled'
          bg='gray.100'
          value={value}
          id={id}
          onChange={handleInput}
        />
      </InputGroup>
    )
  }

  const MyButton = ({ value, handleClick, width, color }) => {
    return (
      <ButtonGroup padding='10px'>
        <Button w={width}
          colorScheme={color}
          onClick={handleClick}
        >
          {value}
        </Button>
  
      </ButtonGroup>
    )
  }


export { UserCard, UserInput, MyButton }