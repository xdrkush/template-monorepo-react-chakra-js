import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Stack,
    Avatar,
    Center,
    Button,
    Link,
    Badge,
    useColorMode,
    Text
} from '@chakra-ui/react';

// Replace test data with your own
const features = Array.apply(null, Array(4)).map(function (x, i) {
    return {
        id: i,
        title: 'Lorem ipsum dolor sit amet',
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
    };
});

export const RoadMapProject = () => {
    const { colorMode } = useColorMode()

    return (
        <Box id="inprogress" p={10}>
            <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                <Heading fontSize={'3xl'}>This is the headline</Heading>
                <Text color={'gray.600'} fontSize={'xl'}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                    sed diam voluptua.
                </Text>
            </Stack>

            <Container maxW={'6xl'} mt={10}>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
                    {features.map((feature) => (
                        <Center key={feature.id} py={6}>
                            <Box
                                maxW={'320px'}
                                w={'full'}
                                bg={colorMode === 'light' ? 'gray.50' : 'gray.700'}
                                boxShadow={'2xl'}
                                rounded={'lg'}
                                p={6}
                                textAlign={'center'}>
                                <Avatar
                                    size={'xl'}
                                    src={
                                        'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                                    }
                                    mb={4}
                                    pos={'relative'}
                                    _after={{
                                        content: '""',
                                        w: 4,
                                        h: 4,
                                        bg: 'green.300',
                                        border: '2px solid white',
                                        rounded: 'full',
                                        pos: 'absolute',
                                        bottom: 0,
                                        right: 3,
                                    }}
                                />
                                <Heading fontSize={'2xl'} fontFamily={'body'}>
                                    Lindsey James
                                </Heading>
                                <Text fontWeight={600} color={'gray.500'} mb={4}>
                                    @lindsey_jam3s
                                </Text>
                                <Text
                                    textAlign={'center'}
                                    px={3}>
                                    Actress, musician, songwriter and artist. PM for work inquires or{' '}
                                    <Link href={'#'} color={'blue.400'}>
                                        #tag
                                    </Link>{' '}
                                    me in your posts
                                </Text>

                                <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
                                    <Badge
                                        px={2}
                                        py={1}
                                        bg={"primary.500"}
                                        fontWeight={'400'}>
                                        #art
                                    </Badge>
                                    <Badge
                                        px={2}
                                        py={1}
                                        bg={"primary.500"}
                                        fontWeight={'400'}>
                                        #photography
                                    </Badge>
                                    <Badge
                                        px={2}
                                        py={1}
                                        bg={"primary.500"}
                                        fontWeight={'400'}>
                                        #music
                                    </Badge>
                                </Stack>

                                <Stack mt={8} direction={'row'} spacing={4}>
                                    <Button
                                        flex={1}
                                        fontSize={'sm'}
                                        rounded={'full'}
                                        _focus={{
                                            bg: 'gray.200',
                                        }}>
                                        Message
                                    </Button>
                                    <Button
                                        flex={1}
                                        fontSize={'sm'}
                                        rounded={'full'}
                                        bg={'primary.500'}
                                        color={'white'}
                                        boxShadow={
                                            '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                                        }
                                        _hover={{
                                            bg: 'primary.900',
                                        }}
                                        _focus={{
                                            bg: 'primary.900',
                                        }}>
                                        Follow
                                    </Button>
                                </Stack>
                            </Box>
                        </Center>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
}