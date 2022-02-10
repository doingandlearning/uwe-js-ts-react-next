import type { NextPage } from 'next'
import { Container, Flex } from "@chakra-ui/react"
import Cart from '../components/Cart'
import Details from '../components/Details'

const Home: NextPage = () => {
  return (
    <Container maxW="container.xl">
      <Flex h="100vh" paddingY={20}>
        <Details />
        <Cart />
      </Flex>
    </Container>
  )
}

export default Home
