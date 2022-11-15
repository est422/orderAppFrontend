import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAlbasatTypes } from '../Actions/AlbasatTypesActions'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Routes, Route } from "react-router-dom"
import AlbasatOrders from './AlbasatOrders'
import AlbasatTypes from './AlbasatTypes'
import AlbasatTypesForm from './AlbasatTypesForm'
import Home from './Home'
import Customers from './Customers'
import CustomersForm from './CustomersForm'
import AlbasatOrderForm from './AlbasatOrderForm'
import CherkColorsForm from './CherkColorsForm'
import CherkColors from './CherkColors'

function Navigation() {

    // const dispatch = useDispatch()
    // const albasatTypes = useSelector((state) => state.albasatTypes.albasatTypes)
    // const [albasatTypesList, setAlbasatTypesList] = useState([])

    // useEffect(() => {
    //     dispatch(getAlbasatTypes())
    //     setAlbasatTypesList(albasatTypes)
    //     console.log(`albasat types: ${albasatTypesList}`)
    // }, [])

  return (
    <>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/Clients">Clients</Nav.Link>
                    <NavDropdown title="Order" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/AlbasatOrders">Albasat Orders</NavDropdown.Item>
                    <NavDropdown.Item href="/Ting">Ting</NavDropdown.Item>
                    <NavDropdown.Item href="/Cote">Cote</NavDropdown.Item>
                    <NavDropdown.Item href="/Fergiya">Fergiya</NavDropdown.Item>
                    <NavDropdown.Item href="/Kaba">Kaba</NavDropdown.Item>
                    <NavDropdown.Item href="/Kemis">Kemis</NavDropdown.Item>
                    <NavDropdown.Item href="/Kita">Kita</NavDropdown.Item>
                    <NavDropdown.Item href="/Kobe">Kobe</NavDropdown.Item>
                    <NavDropdown.Item href="/Suri">Suri</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Items" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/AlbasatTypes">AlbasatTypes</NavDropdown.Item>
                    <NavDropdown.Item href="/CherkType">CherkType</NavDropdown.Item>
                    <NavDropdown.Item href="/CherkOrigin">CherkOrigin</NavDropdown.Item>
                    <NavDropdown.Item href="/ColorTypes">ColorTypes</NavDropdown.Item>
                    <NavDropdown.Item href="/TingType">TingType</NavDropdown.Item>
                    <NavDropdown.Item href="/CoteTypes">CoteTypes</NavDropdown.Item>
                    <NavDropdown.Item href="/FergiyaType">FergiyaType</NavDropdown.Item>
                    <NavDropdown.Item href="/KabaType">KabaType</NavDropdown.Item>
                    <NavDropdown.Item href="/KemisType">KemisType</NavDropdown.Item>
                    <NavDropdown.Item href="/KitaType">KitaType</NavDropdown.Item>
                    <NavDropdown.Item href="/KobeType">KobeType</NavDropdown.Item>
                    <NavDropdown.Item href="/SuriType">SuriType</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>                                                                                                                                                                
        </Navbar>
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/AlbasatOrders' element={<AlbasatOrders />} />
            <Route path='/AlbasatOrders/create' element={<AlbasatOrderForm />} />
            <Route path='/AlbasatTypes' element={<AlbasatTypes />} />
            <Route path='/AlbasatTypes/create' element={<AlbasatTypesForm />} />
            <Route path='/Clients' element={<Customers />} />
            <Route path='/Clients/create' element={<CustomersForm />} />
            <Route path='/ColorTypes' element={<CherkColors />} />
            <Route path='/ColorTypes/create' element={<CherkColorsForm />} />
        </Routes>
    </>
  )
}

export default Navigation