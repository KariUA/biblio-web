import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default function CustomNavbar() {
    
    const navigate = useNavigate();
    const { user, logout } = UserAuth();

    const handleLoginClick = () => {
        if (user) {
            // Si el usuario ya está autenticado, cerrar sesión
            logout();
        } else {
            // Si el usuario no está autenticado, redirigirlo a la página de inicio de sesión
            navigate("/login");
        }
    };
    

    return (
        <Navbar className='navbar' isBordered>
            <NavbarBrand>
                <p className="text-lg font-bold">BiblioWeb</p>
            </NavbarBrand>

            <NavbarContent justify="center" className="menu">
                <NavbarItem>
                    <Link className='menu-item' href="/" color="primary">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className='menu-item' href="/Info" color="primary">
                        Info
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="center" className="Login">
                <NavbarItem>
                    <Button
                        color="primary"
                        className='menu-item'
                        onClick={handleLoginClick}
                    >
                        {user ? `Sign Out (${user.displayName})` : "Login" }
                    </Button>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="center" className="menu">
                <NavbarItem>
                    <ThemeSwitcher />
                </NavbarItem>
            </NavbarContent>

        </Navbar>
    );
}
