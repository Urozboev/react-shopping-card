import React, { Component, useState } from 'react';
import { Navbar, NavbarToggler, NavItem, Nav, } from 'reactstrap';
import {
    BrowserRouter as Router,
    Link,
    NavLink,
    Redirect,
} from "react-router-dom";
import './Navbars.scss';

function Navbars() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return <>
        <Navbar
            color="secondary"
            expand="md"
            light
            className='justify-content-between'
        >
            <NavLink to="/">
                Project
            </NavLink>
            <NavbarToggler onClick={{toggle}} />
            <Nav
                navbar
            >
                <NavItem>
                    <NavLink to="/">
                        Bosh sahifa
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        activeStyle={{
                            color: 'rgba(255,255,255,0.8)'
                        }}
                        to="/mahsulotlar"
                        exact
                    >
                        Mahsulotlar
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        activeStyle={{
                            color: "rgba(255,255,255,0.8)",
                        }}
                        to="/about"
                        exact
                    >
                        Biz haqimizda
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        activeStyle={{
                            color: 'rgba(255,255,255,0.8)'
                        }}
                        to="/signup"
                        exact
                    >
                        Ro'yxatdan o'tish
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        activeStyle={{
                            color: 'rgba(255,255,255,0.8)'
                        }}
                        to="/signin"
                        exact
                    >
                        Kirish
                    </NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    </>
}

export default Navbars;