import React from 'react'
import './WebNav.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'
const WebNav=()=>{
    return (
        <Navbar collapseOnSelect   fixed='top' className='web-nav '>
            <Nav className='white mr3 ml-auto fw-500'>
                <button id='nav-btn' className='white grow ba b--near-white mr3'>UPGRADE</button>
                <Dropdown>
                    <Dropdown.Toggle bg='black' id="dropdown-basic"  className='nav-drop'>User Name</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </Navbar>
    )
}
export default WebNav