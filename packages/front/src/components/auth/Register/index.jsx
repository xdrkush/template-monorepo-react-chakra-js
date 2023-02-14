import { useState } from 'react';

import {
    Box, Text, Stack, Flex, Heading, FormControl, FormLabel, Input, Button, Link,
    InputGroup, HStack, InputRightElement, useColorModeValue,
} from "@chakra-ui/react"

import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

interface FormProps {
    email: string;
    password: string;
    name: string;
    lastName: string;
    setValue: any;
    submit: any;
}

export const Register = ({ email, password, name, lastName, setValue, submit }: FormProps) => {
    const [showPassword, setShowPassword] = useState(false);
    const handleChange = (event: any) => {
        setValue(event.target.name, event.target.value)
    }

    return (
        <Flex
            minH={'80vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'} textAlign={'center'}>
                        Sign up
                    </Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        to enjoy all of our cool features ✌️
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <HStack>
                            <Box>
                                <FormControl id="firstName-register" isRequired>
                                    <FormLabel>First Name</FormLabel>
                                    <Input type="text"
                                        name="name"
                                        value={name}
                                        onChange={handleChange} />
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl id="lastName-register">
                                    <FormLabel>Last Name</FormLabel>
                                    <Input type="text"
                                        name="lastName"
                                        value={lastName}
                                        onChange={handleChange} />
                                </FormControl>
                            </Box>
                        </HStack>
                        <FormControl id="email-register" isRequired>
                            <FormLabel>Email address</FormLabel>
                            <Input type="email"
                                name="email"
                                value={email}
                                onChange={handleChange} />
                        </FormControl>
                        <FormControl id="password-register" isRequired>
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    value={password}
                                    onChange={handleChange} />
                                <InputRightElement h={'full'}>
                                    <Button
                                        variant={'ghost'}
                                        onClick={() =>
                                            setShowPassword((showPassword) => !showPassword)
                                        }>
                                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <Stack spacing={10} pt={2}>
                            <Button
                                loadingText="Submitting"
                                size="lg"
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}>
                                Sign up
                            </Button>
                        </Stack>
                        <Stack pt={6}>
                            <Text align={'center'}>
                                Already a user? <Link href='/login' color={'blue.400'}>Login</Link>
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    )
}