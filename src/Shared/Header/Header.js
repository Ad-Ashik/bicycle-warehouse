import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonBiking } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const logOut = () => {
        signOut(auth);
    }

    return (
        <Navbar className="nav-header py-3" collapseOnSelect expand="lg" sticky="top">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <FontAwesomeIcon className='header-icon' icon={faPersonBiking}></FontAwesomeIcon>
                    <img src="https://i.ibb.co/wQ403FK/logo.png" alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/cycles">Bicycle</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Accessories</Nav.Link>
                        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                        <Nav.Link href="#features">About</Nav.Link>
                    </Nav>
                    <Nav>

                        {
                            user ?
                                <>
                                    <Nav.Link as={Link} to="/manage-cycles">Manage Cycle</Nav.Link>
                                    <Nav.Link as={Link} to="/addCycle">Add Cycle</Nav.Link>
                                    <Nav.Link as={Link} to="/addCycle">My Cycle</Nav.Link>
                                    <Nav.Link as={Link} to="/login" onClick={logOut}>Sing Out</Nav.Link>
                                </>
                                :
                                <>
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                    <Nav.Link as={Link} to="/sing-up">Sing Up</Nav.Link>
                                </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;