import {
    Box,
    Flex,
    IconButton,
    Button,
    Stack,
    Link,
    useColorModeValue,
    Menu, MenuItem, MenuButton, MenuList, MenuDivider,
    Center, Avatar,
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
} from '@chakra-ui/icons';
import { ColorModeSwitcher } from "../../../components/ColorModeSwitcher"

export function NavbarAuth({ isOpen, onOpen, onClose }: any) {

    return (
        <Box>
            <Flex
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}>
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex' }}>
                    <IconButton
                        onClick={isOpen ? onClose : onOpen}
                        icon={
                            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>

                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                    <Link
                        href={'#/home'}
                        color={useColorModeValue('gray.800', 'white')}
                        fontSize={'lg'}
                        _hover={{
                            textDecoration: 'none',
                            color: useColorModeValue('gray.800', 'white'),
                        }}>
                        Dr Kush
                    </Link>
                </Flex>

                <Stack
                    flex={{ base: 1, md: 0 }}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={6}>
                    <ColorModeSwitcher justifySelf="flex-end" />
                    <Menu>
                        <MenuButton
                            as={Button}
                            rounded={'full'}
                            variant={'link'}
                            cursor={'pointer'}
                            minW={0}>
                            <Avatar
                                size={'sm'}
                                src={'https://avatars.dicebear.com/api/male/username.svg'}
                            />
                        </MenuButton>
                        <MenuList alignItems={'center'}>
                            <br />
                            <Center>
                                <Avatar
                                    size={'2xl'}
                                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                                />
                            </Center>
                            <br />
                            <Center>
                                <p>Username</p>
                            </Center>
                            <br />
                            <MenuDivider />
                            <MenuItem>Your Servers</MenuItem>
                            <MenuItem>Account Settings</MenuItem>
                            <MenuItem>Logout</MenuItem>
                        </MenuList>
                    </Menu>
                </Stack>
            </Flex>
        </Box>
    );
}


interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
}
