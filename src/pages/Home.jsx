import React from 'react'
import { useEffect, useState } from 'react'
import { fetchTrending } from '../services/api.js'
import { Container, Heading, Grid, Flex, Box, Skeleton } from '@chakra-ui/react'
import Card from '../components/Card.jsx'

const Home = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [timeWindow, setTimeWindow] = useState("day")
  useEffect(() => {
    setLoading(true)
    fetchTrending(timeWindow).then((data) => {
      setData(data)
    }).catch((err) => {
      console.error("Error : ", err)
    }).finally(() => {
      setLoading(false)
    })
  }, [timeWindow])

  return (
    <Container maxW="container.xl">
      <Flex alignItems={"baseline"} gap={"4"} my={"5"}>
        <Heading as="h2" fontSize={"md"} texttransform="uppercase">Trending</Heading>
        <Flex alignItems={"center"} gap={"2"} border={"1px solid teal"} borderRadius={"20px"}>
          <Box as="button" px={"2"} py={"1"} borderRadius={"20px"} bg={`${timeWindow === "day" ? "gray.600" : ""}`} onClick={() => { setTimeWindow("day"); console.log("today") }}>Today</Box>
          <Box as="button" px={"2"} py={"1"} borderRadius={"20px"} bg={`${timeWindow === "week" ? "gray.600" : ""}`} onClick={() => { setTimeWindow("week"); console.log("week") }}>This Week</Box>
        </Flex>
      </Flex>
      <Grid templateColumns={{
        base: "1fr",
        sm: "repeat(2, 1fr)",
        md: "repeat(4, 1fr)",
        lg: "repeat(5, 1fr)"
      }} gap={4}>
        {data && data.map((item, i) => (
          loading ? (
            <Skeleton height={"300"} key={i} />
          ) : (
            <Card key={item?.id} item={item} type={item?.media_type} />
          )
        ))}
      </Grid>
    </Container>
  )
}

export default Home
