import type { NextPage } from 'next'
import { Container, Flex } from "@chakra-ui/react"
import Cart from '../components/Cart'
import Details from '../components/Details'

const Home: NextPage = () => {
  return (
    <Container maxW="container.xl">
      <Flex h={{ base: 'auto', md: '100vh' }}
        paddingY={[0, 10, 20]}
        direction={{ base: 'column-reverse', md: 'row' }}
      >
        <Details />
        <Cart />
      </Flex>
    </Container>
  )
}

export default Home
