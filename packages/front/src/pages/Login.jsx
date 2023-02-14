import { useState, useEffect } from 'react';
import {
    Box, Tabs, Tab, TabList, TabPanels, TabPanel,
} from "@chakra-ui/react"

import { Login } from '../components/auth/Login';
import { LostPassword } from '../components/auth/LostPassword';
import { Register } from '../components/auth/Register';

export const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [form, setForm] = useState({});

    // List key for completed form
    useEffect(() => setForm({ ...form, email }), [email])
    useEffect(() => setForm({ ...form, password }), [password])
    useEffect(() => setForm({ ...form, name }), [name])
    useEffect(() => setForm({ ...form, lastName }), [lastName])

    // Setter key
    function setValue(name, value) {
        console.log("setValue", name, value);
        switch (name) {
            case "email":
                setEmail(value)
                break;
            case "password":
                setPassword(value)
                break;
            case "name":
                setName(value)
                break;
            case "lastname":
                setLastName(value)
                break;

            default:
                break;
        }
    };

    // Submit Form with action
    function submitForm(action) {
        console.log('submit', action, form)
        switch (action) {
            case "login":
                setEmail("")
                setPassword("")
                break;
            case "register":
                setEmail("")
                setPassword("")
                setName("")
                setLastName("")
                break;
            case "lostpassword":
                setEmail("")
                break;

            default:
                break;
        }
        
    }

    return (
        <Box textAlign="center" fontSize="xl">
            <Tabs isFitted>
                <TabList>

                    <Tab>Login</Tab>
                    <Tab>Register</Tab>
                    <Tab>Lost Password ?</Tab>

                </TabList>
                <TabPanels>

                    {/* Login */}
                    <TabPanel>
                        <Login email={email} password={password} setValue={setValue} submit={submitForm} />
                    </TabPanel>

                    {/* Register */}
                    <TabPanel>
                        <Register email={email} password={password} name={name} lastName={lastName} setValue={setValue} submit={submitForm} />
                    </TabPanel>

                    {/* LostPassword */}
                    <TabPanel>
                        <LostPassword email={email} setValue={setValue} submit={submitForm} />
                    </TabPanel>

                </TabPanels>
            </Tabs>
        </Box>
    )
}
