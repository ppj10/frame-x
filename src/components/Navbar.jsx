import { Avatar, Badge, Box, Button, Center, Container, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React from 'react'
import { useDisclosure } from '@chakra-ui/react'
import { useAuth } from '../context/useAuth'
import { HamburgerIcon, Search2Icon, SearchIcon } from '@chakra-ui/icons'

const Navbar = () => {
    const { user, signInWithGoogle, logout } = useAuth();
    const { onOpen, isOpen, onClose } = useDisclosure();

    const handleGoogleLogin = async () => {
        try {
            await signInWithGoogle();
            console.log("success");
        } catch (error) {
            console.log("errr", error);
        }
    };
    return (
        <Box py="4" mb="2" position="sticky" top="0" bg="blackAlpha.800" zIndex="sticky">
            <Container maxW="container.xl">
                <Flex justify="space-between">
                    <Link to="/">
                        <Badge fontSize={"2xl"} fontWeight={"bold"} color={"darkblue"} px={"2"} borderRadius={"md"} background={"blue.100"}>
                            Frame-X
                        </Badge>
                    </Link>
                    {/* DESKTOP */}
                    <Flex
                        gap="4"
                        alignItems={"center"}
                        display={{ base: "none", md: "flex" }}
                    >
                        <Link to="/">Home</Link>
                        <Link to="/movies">Movies</Link>
                        <Link to="/shows">TV Shows</Link>
                        <Link to="/search">
                            <SearchIcon fontSize={"xl"} />
                        </Link>
                        {user && (
                            <Menu>
                                <MenuButton>
                                    <Avatar
                                        bg={"blue.500"}
                                        color={"white"}
                                        size={"sm"}
                                        name={user?.email}
                                    />
                                </MenuButton>
                                <MenuList>
                                    <Link to="/watchlist">
                                        <MenuItem color={"black"}>Watchlist</MenuItem>
                                    </Link>
                                    <MenuItem color={"black"} onClick={logout}>Logout</MenuItem>
                                </MenuList>
                            </Menu>
                        )}
                        {!user && (
                            <Avatar
                                size={"sm"}
                                bg={"gray.800"}
                                as="button"
                                onClick={handleGoogleLogin}
                            />
                        )}
                    </Flex>

                    {/* Mobile */}
                    <Flex
                        display={{ base: "flex", md: "none" }}
                        alignItems={"center"}
                        gap="4"
                    >
                        <Link to="/search">
                            <SearchIcon fontSize={"xl"} />
                        </Link>
                        <IconButton onClick={onOpen} icon={<HamburgerIcon />} />
                        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                            <DrawerOverlay />
                            <DrawerContent bg={"black"}>
                                <DrawerCloseButton />
                                <DrawerHeader>
                                    {user ? (
                                        <Flex alignItems="center" gap="2">
                                            <Avatar bg="blue.500" size={"sm"} name={user?.email} />
                                            <Box fontSize={"sm"}>
                                                {user?.displayName || user?.email}
                                            </Box>
                                        </Flex>
                                    ) : (
                                        <Avatar
                                            size={"sm"}
                                            bg="gray.800"
                                            as="button"
                                            onClick={handleGoogleLogin}
                                        />
                                    )}
                                </DrawerHeader>

                                <DrawerBody>
                                    <Flex flexDirection={"column"} gap={"4"} onClick={onClose}>
                                        <Link to="/">Home</Link>
                                        <Link to="/movies">Movies</Link>
                                        <Link to="/shows">TV Shows</Link>
                                        {user && (
                                            <>
                                                <Link to="/watchlist">Watchlist</Link>
                                                <Button
                                                    variant={"outline"}
                                                    colorScheme="blue"
                                                    onClick={logout}
                                                >
                                                    Logout
                                                </Button>
                                            </>
                                        )}
                                    </Flex>
                                </DrawerBody>
                            </DrawerContent>
                        </Drawer>
                    </Flex>
                </Flex>
            </Container>
        </Box>
    )
}

export default Navbar
