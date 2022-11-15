import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { createCustomer, getAllCustomers } from '../Actions/CustomersActions'
import { useNavigate  } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'

function CustomersForm() {

    const dispatch = useDispatch()
    const [validated, setValidated] = useState(false)
    const [customer, setCustomer] = useState({
        FirstName: "",
        MiddleName: "",
        LastName: "",
        Title: "",
        MobilePhone1: "",
        MobilePhone2: "",
        Country: "",
        City: "",
        WorkPlace: "",
        AdditionalInfo: "",
        createdDate: new Date(),
        // createdById: ""
    })

    const navigate = useNavigate ()

    const handleInputsChange = (e) => {
        e.preventDefault()
        setCustomer({...customer, [e.target.name]: e.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.currentTarget
        console.log("event", event)
        if (form.checkValidity() === false) {
            event.stopPropagation()
        }   
        setValidated(true)
        dispatch(createCustomer(customer))
        // handleClose()
        navigate("/Clients")
    }

    useEffect(() => {
        dispatch(getAllCustomers())
    }, [])

    return(
        <Container fluid className='m-1'>
            <Row className='justify-content-center'>
                <Card className='w-50'>
                    <Card.Body>
                        <Card.Title>Add Customer</Card.Title>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control required type="text" placeholder="FirstName" name="FirstName" value={customer.FirstName} onChange={handleInputsChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Middle Name</Form.Label>
                                <Form.Control required type="text" placeholder="MiddleName" name="MiddleName" value={customer.MiddleName} onChange={handleInputsChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control required type="text" placeholder="LastName" name="LastName" value={customer.LastName} onChange={handleInputsChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Mobile Phone1</Form.Label>
                                <Form.Control required type="number" placeholder="MobilePhone1" name="MobilePhone1" value={customer.MobilePhone1} onChange={handleInputsChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Mobile Phone2</Form.Label>
                                <Form.Control required type="number" placeholder="MobilePhone2" name="MobilePhone2" value={customer.MobilePhone2} onChange={handleInputsChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Title</Form.Label>
                                <Form.Control required type="text" placeholder="Title" name="Title" value={customer.Title} onChange={handleInputsChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Country</Form.Label>
                                <Form.Control required type="text" placeholder="Country" name="Country" value={customer.Country} onChange={handleInputsChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>City</Form.Label>
                                <Form.Control required type="text" placeholder="City" name="City" value={customer.City} onChange={handleInputsChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Work Place</Form.Label>
                                <Form.Control required type="text" placeholder="Work Place" name="WorkPlace" value={customer.WorkPlace} onChange={handleInputsChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Additional Information</Form.Label>
                                <Form.Control required type="text" placeholder="Additional Information" name="AdditionalInfo" value={customer.AdditionalInfo} onChange={handleInputsChange} />
                            </Form.Group>
                            {/* <Form.Group className="mb-3" controlId="">
                                <Form.Label>Created By</Form.Label>
                                <Form.Control required type="number" placeholder="Created By" name="CreatedBy" value={customer.CreatedById} onChange={handleInputsChange} />
                            </Form.Group> */}
                            <Button variant="primary" type="submit">
                                Save
                            </Button>
                        </Form>       
                    </Card.Body>
                </Card>
            </Row>  
        </Container>
        
    )

}

export default CustomersForm