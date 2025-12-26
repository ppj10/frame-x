import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { imagePath } from '../services/api.js'
import { StarIcon } from '@chakra-ui/icons'


const Card = ({ item, type }) => {
    return (
        <Link to={`/${type}/${item?.id}`} style={{ textDecoration: 'none' }}>
            <Box position={"relative"} transform={"scale(1)"} _hover={{
                transform: { base: "scale(1.02)", md: "scale(1.05)" },
                transition: "all 0.2s ease-in-out",
                zIndex: "10",
                "& .overlay": { opacity: 1 }
            }}>
                <Image src={item.poster_path ? `${imagePath}${item.poster_path}` : undefined} alt={item.title || item.name} height={"100%"} />
                <Box className='overlay' position={"absolute"} p={"2"} bottom={"0"} left={"0"} width={"100%"} height={"auto"} bgGradient={"linear(to-t, blackAlpha.900, blackAlpha.600)"} color={"white"} opacity={0} transition={"opacity 0.3s ease-in-out"}>
                    <Text align={"center"} fontSize={"sm"} fontWeight={"bold"} my={"2"}>{item.title || item.name}</Text>
                    <Text align={"center"} fontSize={"x-small"} my={"2"}>
                        {new Date(item.release_date || item.first_air_date).getFullYear() || "N/A"}
                    </Text>
                    <Flex
                        alignItems={"center"}
                        justifyContent={"center"}
                        gap={"1"}
                        mt={"3"}
                        mb={"3"}
                    >
                        <StarIcon fontSize={"small"} />
                        <Text fontSize={"x-small"} mx={"1"}>{item.vote_average?.toFixed(1) || "N/A"}</Text>
                    </Flex>
                </Box>
            </Box>
        </Link>
    )
}

export default Card
