import {
    Stack, Flex, Heading, FormControl, FormLabel, Input, Checkbox, Button, Link, Image,
} from "@chakra-ui/react"


interface FormProps {
    email: string;
    password: string;
    setValue: any;
    submit: any;
}

export const Login = ({ email, password, setValue, submit }: FormProps) => {
    const handleChange = (event: any) => {
        setValue(event.target.name, event.target.value)
    }

    return (
        <Stack minH={'80vh'} direction={{ base: 'column', md: 'row' }}>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={4} w={'full'} maxW={'md'}>
                    <Heading fontSize={'2xl'}>Sign in to your account</Heading>
                    <FormControl id="email-login">
                        <FormLabel>Email address</FormLabel>
                        <Input type="email"
                            name="email"
                            value={email}
                            onChange={handleChange} />
                    </FormControl>
                    <FormControl id="password-login">
                        <FormLabel>Password</FormLabel>
                        <Input type="password"
                            name="password"
                            value={password}
                            onChange={handleChange} />
                    </FormControl>
                    <Stack spacing={6}>
                        <Stack
                            direction={{ base: 'column', sm: 'row' }}
                            align={'start'}
                            justify={'space-between'}>
                            <Checkbox>Remember me</Checkbox>
                            <Link color={'blue.500'}>Forgot password?</Link>
                        </Stack>
                        <Button colorScheme={'blue'} variant={'solid'}>
                            Sign in
                        </Button>
                    </Stack>
                </Stack>
            </Flex>
            <Flex flex={1}>
                <Image
                    alt={'Login Image'}
                    objectFit={'cover'}
                    src={
                        'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
                    }
                />
            </Flex>
        </Stack>
    )
}