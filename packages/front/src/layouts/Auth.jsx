import { Outlet } from "react-router-dom"
import {
    ChakraProvider, useDisclosure
} from '@chakra-ui/react';
import { theme } from "../Theme"

// Components
import { NavbarAuth } from "../components/layouts/NavbarAuth"
import { SidebarAuth } from "../components/layouts/SidebarAuth"
import { useEffect } from "react";

export const AuthLayout = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        onOpen()
    }, [])

    return (
        <ChakraProvider theme={theme}>
            <NavbarAuth isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
            <SidebarAuth isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
                <Outlet /> {/* Body */}
            </SidebarAuth>
        </ChakraProvider>
    )
}