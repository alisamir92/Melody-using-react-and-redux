import {Container, Row, Col, Figure, Nav, Image, NavDropdown, Form, Navbar} from 'react-bootstrap';
import {Route, Routes, Link} from "react-router-dom";
import { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import img from "../img/melody1.webp";
import { useSelector } from 'react-redux'

function Header(){
    const [headerSearch , setHeaderSearch] = useState(false)
    const toggle = () => {
        setHeaderSearch(!headerSearch);
    }
    const watchList = useSelector((state) => state.watchList)
    return(
        <Container className='header'>
            
            <Row>
                <Col  lg={5} xl={5} className='nav_col'>
                    <Nav className='melody-img-nav'>
                        <Nav.Link as={Link} to="/">
                            <Image className='melody-img' src={img} />
                        </Nav.Link>
                    
                    </Nav>
                    <Navbar className='navbar-first' expand="lg">
                    <Container>
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    
                    <Navbar.Collapse id="basic-navbar-nav">
                        
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
                        <Nav.Link as={Link} to="/series-page">Series</Nav.Link>
                        <Nav.Link href="#link">Music</Nav.Link>
                        <Nav.Link href="#home">Plays</Nav.Link>
                        <Nav.Link href="#link">Classics</Nav.Link>
                        <Nav.Link href="#link">Collections</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                    </Container>
                    </Navbar>
                </Col>
                <Col className='search-form' lg={2} xl={2}>
                    <div onClick={toggle} href="#"><SearchIcon /></div>
                    <input class={`input ${headerSearch? 'input-fadein' : ''}`} type="text" />
                </Col>
                
                <Col lg={5} xl={5} className="profile-nav">
                <Navbar className='navbar-second' expand="lg">
                    <Container>
                        
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">MYACCOUNT</Nav.Link>
                            <Nav.Link as={Link} to="/watch-list">WATCHLIST<sup>{watchList.length}</sup></Nav.Link>
                            <Nav.Link href="#link">LIVETV</Nav.Link>
                            <Nav.Link href="#link">
                                <Form.Select aria-label="Default select example">
                                    <option value="en">English</option>
                                    <option value="ar">Arabic</option>
                                </Form.Select>
                            </Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                </Col>
            </Row>
            
        </Container>
    )
}

export default Header;