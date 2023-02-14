import {
    Text, Stack, Flex, Heading, FormControl, Input, Button, useColorModeValue,
} from "@chakra-ui/react"

interface FormProps {
    email: string;
    setValue: any;
    submit: any;
}
export const LostPassword = ({ email, setValue, submit }: FormProps) => {
    const handleChange = (event: any) => {
        setValue(event.target.name, event.target.value)
    }

    return (
        <Flex
            minH={'80vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack
                spacing={4}
                w={'full'}
                maxW={'md'}
                bg={useColorModeValue('white', 'gray.700')}
                rounded={'xl'}
                boxShadow={'lg'}
                p={6}
                my={12}>
                <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
                    Forgot your password?
                </Heading>
                <Text
                    fontSize={{ base: 'sm', sm: 'md' }}
                    color={useColorModeValue('gray.800', 'gray.400')}>
                    You&apos;ll get an email with a reset link
                </Text>
                <FormControl id="email-lostpassword">
                    <Input
                        placeholder="your-email@example.com"
                        _placeholder={{ color: 'gray.500' }}
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                    />
                </FormControl>
                <Stack spacing={6}>
                    <Button
                        onClick={(e) => submit('lostpassword')}
                        bg={'blue.400'}
                        color={'white'}
                        _hover={{
                            bg: 'blue.500',
                        }}>
                        Request Reset
                    </Button>
                </Stack>
            </Stack>
        </Flex>
    )
}