import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    useColorModeValue
} from '@chakra-ui/react';
import {
    MdPhone,
    MdEmail,
    MdLocationOn,
} from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';

export const FormContact = () => {
    return (
        <Container maxW="full" mt={0} centerContent overflow="hidden">
            <Flex>
                <Box p={8}>
                    <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }} justify="center">
                        <WrapItem>
                            <Box>
                                <Heading>Contact</Heading>
                                <Text mt={{ sm: 3, md: 3, lg: 5 }}>
                                    Fill up the form below to contact
                                </Text>
                                <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                                    <VStack pl={0} spacing={3} alignItems="flex-start">
                                        <Button
                                            size="md"
                                            height="48px"
                                            width="200px"
                                            variant="ghost"
                                            leftIcon={<MdPhone color={'primary.900'} size="20px" />}>
                                            +91-988888888
                                        </Button>
                                        <Button
                                            size="md"
                                            height="48px"
                                            width="200px"
                                            variant="ghost"
                                            leftIcon={<MdEmail color={'primary.900'} size="20px" />}>
                                            hello@abc.com
                                        </Button>
                                        <Button
                                            size="md"
                                            height="48px"
                                            width="200px"
                                            variant="ghost"
                                            leftIcon={<MdLocationOn color={'primary.900'} size="20px" />}>
                                            Karnavati, India
                                        </Button>
                                    </VStack>
                                </Box>
                                <HStack
                                    mt={{ lg: 10, md: 10 }}
                                    spacing={5}
                                    px={5}
                                    alignItems="flex-start">
                                    <IconButton
                                        aria-label="facebook"
                                        variant="ghost"
                                        size="lg"
                                        isRound={true}
                                        _hover={{ bg: useColorModeValue('gray.500', 'gray.900') }}
                                        icon={<MdPhone size="28px" />}
                                    />
                                    <IconButton
                                        aria-label="github"
                                        variant="ghost"
                                        size="lg"
                                        isRound={true}
                                        _hover={{ bg: useColorModeValue('gray.500', 'gray.900') }}
                                        icon={<MdPhone size="28px" />}
                                    />
                                    <IconButton
                                        aria-label="discord"
                                        variant="ghost"
                                        size="lg"
                                        isRound={true}
                                        _hover={{ bg: useColorModeValue('gray.500', 'gray.900') }}
                                        icon={<MdPhone size="28px" />}
                                    />
                                </HStack>
                            </Box>
                        </WrapItem>
                        <WrapItem>
                            <Box
                                bg={useColorModeValue('gray.50', 'gray.900')} borderRadius="lg">
                                <Box m={8} >
                                    <VStack spacing={5}>
                                        <FormControl id="name">
                                            <FormLabel>Your Name</FormLabel>
                                            <InputGroup borderColor="#E0E1E7">
                                                <InputLeftElement
                                                    pointerEvents="none"
                                                    children={<BsPerson color="gray.800" />}
                                                />
                                                <Input type="text" size="md" />
                                            </InputGroup>
                                        </FormControl>
                                        <FormControl id="name">
                                            <FormLabel>Mail</FormLabel>
                                            <InputGroup borderColor="#E0E1E7">
                                                <InputLeftElement
                                                    pointerEvents="none"
                                                    children={<BsPerson color="gray.800" />}
                                                />
                                                <Input type="text" size="md" />
                                            </InputGroup>
                                        </FormControl>
                                        <FormControl id="name">
                                            <FormLabel>Message</FormLabel>
                                            <Textarea
                                                borderColor="gray.300"
                                                _hover={{
                                                    borderRadius: 'gray.300',
                                                }}
                                                placeholder="message"
                                            />
                                        </FormControl>
                                        <FormControl id="name" float="right">
                                            <Button
                                                variant="solid"
                                                bg={useColorModeValue('gray.900', 'gray.50')}
                                                color={useColorModeValue('gray.50', 'gray.900')}
                                                _hover={{ bg: useColorModeValue('gray.500', 'gray.50') }}>
                                                Send Message
                                            </Button>
                                        </FormControl>
                                    </VStack>
                                </Box>
                            </Box>
                        </WrapItem>
                    </Wrap>
                </Box>
            </Flex>
        </Container>
    );
}