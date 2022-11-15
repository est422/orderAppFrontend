import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCustomers, updateCustomer, deleteCustomer } from '../Actions/CustomersActions'
import Row from 'react-bootstrap/Row'
import { useNavigate  } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import ModalBody from "react-bootstrap/ModalBody"
import ModalHeader from "react-bootstrap/ModalHeader"
import ModalTitle from "react-bootstrap/ModalTitle"


function Customers() {

    const dispatch = useDispatch()
    const [validated, setValidated] = useState(false)
    const customers = useSelector((state) => state.customers.customers)
    const [customersList, setCustomersList] = useState([])
    const [newCustomer, setNewCustomer] = useState({
        // id: "",
        First_Name: "",
        Middle_Name: "",
        Last_Name: "",
        Title: "",
        Mobile_Phone_1: "",
        Mobile_Phone_2: "",
        Country: "",
        City: "",
        Work_Place: "",
        Additional_Info: "",
        // createdDate: new Date(),
        // createdById: ""
    })

    const [editCustomer, setEditCustomer] = useState({
        customerId: "",
        First_Name: "",
        Middle_Name: "",
        Last_Name: "",
        Title: "",
        Mobile_Phone_1: "",
        Mobile_Phone_2: "",
        Country: "",
        City: "",
        Work_Place: "",
        Additional_Info: "",
    })
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)

    const navigate = useNavigate ()
    const openCustomerForm = () => {
        navigate("/Clients/create")
    }

    const handleInputsChange = (e) => {
        e.preventDefault()
        setNewCustomer({...newCustomer, [e.target.name]: e.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.currentTarget
        // console.log("event", event)
        if (form.checkValidity() === false) {
            event.stopPropagation()
        }   
        setValidated(true)
        // console.log(`update customer ${editCustomer.customerId}`)
        dispatch(updateCustomer(editCustomer.customerId, newCustomer))
        setCustomersList(customers)
        handleClose()
    }

    const handleCustomerEdit = (customerId, First_Name, Middle_Name, Last_Name, Mobile_Phone_1, Mobile_Phone_2, Title, Country, City, Work_Place, Additional_Info) => {
        setShow(true)
        // console.log(`customer ${customerId}`)
        setEditCustomer({...editCustomer, 
            customerId, customerId,
            First_Name: First_Name,
            Middle_Name: Middle_Name, 
            Last_Name: Last_Name, 
            Mobile_Phone_1: Mobile_Phone_1, 
            Mobile_Phone_2: Mobile_Phone_2, 
            Title: Title, 
            Country: Country, 
            City: City, 
            Work_Place: Work_Place, 
            Additional_Info: Additional_Info
        })
        // setNewCustomer({...newCustomer, First_Name, Middle_Name, Last_Name, Mobile_Phone_1, Mobile_Phone_2, Title, Country, City, Work_Place, Additional_Info})
        // setcustomersList(customers)
        // console.log(`edit customer ${editCustomer.First_Name}`)

    }

    const handleCustomerDelete = (id) => {

        dispatch(deleteCustomer(id))
        setCustomersList(customers)

    }

    useEffect(() => {
        dispatch(getAllCustomers())
        setCustomersList(customers)
    }, [customersList])

    return(
        <Container fluid className='m-1'>
            <Row className='justify-content-center'>
                <Button className='w-50 mb-1' variant="primary" size='lg' onClick={openCustomerForm}>
                    Add New Customer
                </Button>
            </Row>
            {
                customers.map((customer) => (
                    <Row key={customer.id} className='justify-content-center'>
                        <Card className='w-50 m-1'>
                            <Card.Body>
                                <Card.Title>Customers</Card.Title>
                                <Card.Text>
                                    Customer First Name: {customer.First_Name}
                                </Card.Text>
                                <Card.Text>
                                    Customer Middle Name: {customer.Middle_Name}
                                </Card.Text>
                                <Card.Text>
                                    Customer Last Name: {customer.Last_Name}
                                </Card.Text>
                                <Card.Text>
                                    Customer Title: {customer.Title}
                                </Card.Text>
                                <Card.Text>
                                    Customer Mobile Phone1: {customer.Mobile_Phone_1}
                                </Card.Text>
                                <Card.Text>
                                    Customer Mobile Phone2: {customer.Mobile_Phone_2}
                                </Card.Text>
                                <Card.Text>
                                    Customer Country: {customer.Country}
                                </Card.Text>
                                <Card.Text>
                                    Customer City: {customer.City}
                                </Card.Text>
                                <Card.Text>
                                    Customer Work Place: {customer.Work_Place}
                                </Card.Text>
                                <Card.Text>
                                    Customer Additional Information: {customer.Additional_Info}
                                </Card.Text>
                                <Button className='m-1'  variant="primary" onClick={() => {handleCustomerEdit(customer.id, customer.First_Name, customer.Middle_Name, customer.Last_Name, customer.Mobile_Phone_1, customer.Mobile_Phone_2, customer.Title, customer.Country, customer.City, customer.Work_Place, customer.Additional_Info)}}>Edit</Button>
                                <Button className='m-1' variant="primary" onClick={() => {handleCustomerDelete(customer.id)}}>Delete</Button>
                            </Card.Body>
                        </Card>
                        { show ?
                            <Modal show={show} onHide={handleClose}>
                                <ModalHeader closeButton>
                                    <ModalTitle>Edit customer</ModalTitle>
                                </ModalHeader>
                                <ModalBody>
                                    <Card className='w-100 mb-1'>
                                        <Card.Body>
                                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                                <Form.Group className="mb-3" controlId="">
                                                    <Form.Label>First Name: {editCustomer.First_Name}</Form.Label>
                                                    <Form.Control required type="text" placeholder="FirstName" name="First_Name" onChange={handleInputsChange} />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="">
                                                <Form.Label>Middle Name: {editCustomer.Middle_Name}</Form.Label>
                                                <Form.Control required type="text" placeholder="MiddleName" name="Middle_Name" onChange={handleInputsChange} />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="">
                                                    <Form.Label>Last Name: {editCustomer.Last_Name}</Form.Label>
                                                    <Form.Control required type="text" placeholder="LastName" name="Last_Name" onChange={handleInputsChange} />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="">
                                                    <Form.Label>Mobile Phone1: {editCustomer.Mobile_Phone_1}</Form.Label>
                                                    <Form.Control required type="number" placeholder="MobilePhone1" name="Mobile_Phone_1" onChange={handleInputsChange} />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="">
                                                    <Form.Label>Mobile Phone2: {editCustomer.Mobile_Phone_2}</Form.Label>
                                                    <Form.Control required type="number" placeholder="MobilePhone2" name="Mobile_Phone_2" onChange={handleInputsChange} />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="">
                                                    <Form.Label>Title: {editCustomer.Title}</Form.Label>
                                                    <Form.Control required type="text" placeholder="Title" name="Title"  onChange={handleInputsChange} />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="">
                                                    <Form.Label>Country: {editCustomer.Country}</Form.Label>
                                                    <Form.Control required type="text" placeholder="Country" name="Country" onChange={handleInputsChange} />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="">
                                                    <Form.Label>City: {editCustomer.City}</Form.Label>
                                                    <Form.Control required type="text" placeholder="City" name="City" onChange={handleInputsChange} />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="">
                                                    <Form.Label>Work Place: {editCustomer.Work_Place}</Form.Label>
                                                    <Form.Control required type="text" placeholder="Work Place" name="Work_Place" onChange={handleInputsChange} />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="">
                                                    <Form.Label>Additional Information: {editCustomer.Additional_Info}</Form.Label>
                                                    <Form.Control required type="text" placeholder="Additional Information" name="Additional_Info" onChange={handleInputsChange} />
                                                </Form.Group>
                                                    
                                                <Button className="m-1" variant="primary" type="submit">
                                                    Save
                                                </Button>
                                                <Button className="m-1" variant="secondary" onClick={handleClose}>
                                                    Cancel
                                                </Button>
                                            </Form>  
                                        </Card.Body>
                                    </Card>
                                </ModalBody>
                            </Modal> : null
                        }
                    </Row>
                ))
            }
        </Container>
    )
         
}

export default Customers