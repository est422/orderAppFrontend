import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createAlbasatOrder } from '../Actions/AlbasatOrdersActions'
import { getAlbasatTypes } from '../Actions/AlbasatTypesActions'
import { getCherkTypes } from '../Actions/CherkTypesActions'
import { getCherkOrigins } from '../Actions/CherkOriginsActions'
import { getCherkColors } from '../Actions/CherkColorsActions'
import { getAllCustomers } from '../Actions/CustomersActions'
import { useNavigate  } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Alert from "react-bootstrap/Alert"

function AlbasatOrderForm() {

    const dispatch = useDispatch()
    const albasatTypes = useSelector((state) => state.albasatTypes.albasatTypes)
    const cherkTypes = useSelector((state) => state.cherkTypes.cherkTypes)
    const cherkOrigins = useSelector((state) => state.cherkOrigins.cherkOrigins)
    const cherkColors = useSelector((state) => state.cherkColors.cherkColors)
    const customers = useSelector((state) => state.customers.customers)
    // const [error, setError] = useState("")
    const error = useSelector((state) => state.albasatOrders.error)
    // const [defaultCustomerId, setDefaultCustomerId] = useState("")
    // const defaultCustomer = customers.map(c => customers[0].id)

    // console.log(`default customer id ${defaultCustomerId.id}`)
    // const [albasatTypesList, setAlbasatTypesList] = useState([])

    const [validated, setValidated] = useState(false)
    const [albasatOrder, setAlbasatOrder] = useState({
        AlbasatType: "Yedacon",
        CherkType: "SILK",
        CherkOrigin: "GREEK",
        ColorType: "White",
        KUMET: "",
        TEKESHA: "",
        DERET: "",
        WEGEB: "",
        KOLETA: "",
        EJE_AMBARE: "",
        QUANTITY_ALB: "",
        UNIT_PRICE: "",
        Total_Price: "",
        OrderDate: new Date().toISOString().slice(0, 19).replace('T', ' '),
        DELIVERY_DATE: "",
        Customer_Id: "",
        ADDITIONAL_INFO: ""
    })

    const navigate = useNavigate()
    const handleClose = (event) => {
        event.preventDefault()
        navigate("/AlbasatOrders")
    }

    const handleInputsChange = (e) => {
        e.preventDefault()
        setAlbasatOrder({...albasatOrder, [e.target.name]: e.target.value})
    }

    const handleAlbasatType = (e) => {
        e.preventDefault()
        setAlbasatOrder({...albasatOrder, AlbasatType: e.target.value})
    }

    const handleCherkType = (e) => {
        e.preventDefault()
        setAlbasatOrder({...albasatOrder, CherkType: e.target.value})
    }

    const handleCherkOrigin = (e) => {
        e.preventDefault()
        setAlbasatOrder({...albasatOrder, CherkOrigin: e.target.value})
    }

    const handleColorType = (e) => {
        e.preventDefault()
        setAlbasatOrder({...albasatOrder, ColorType: e.target.value})
    }
    
    const handleCustomer = (e) => {
        e.preventDefault()
        setAlbasatOrder({...albasatOrder, Customer_Id: e.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.currentTarget
        // console.log("event", event)
        if (form.checkValidity() === false) {
            event.stopPropagation()
            // console.log("Albasat", albasat)
        }
        // console.log("Albasat", albasat)        
        setValidated(true)
        dispatch(createAlbasatOrder(albasatOrder))
        // setValidated(false)
        // console.log(`dispatch response ${res}`)
        navigate("/AlbasatOrders")
        
    }

    useEffect(() => {
        dispatch(getAlbasatTypes())
        dispatch(getCherkTypes())
        dispatch(getCherkOrigins())
        dispatch(getCherkColors())
        dispatch(getAllCustomers())
        // setAlbasatTypesList(albasatTypes)
        // setDefaultCustomerId(customers.map(c => customers[0].id))
        // if(!albasatTypes.error) console.log(`order error ${albasatTypes.error}`)
        // setDefaultCustomerId(customers.map(c=>customers[0].id))
        // console.log(`default customer : ${defaultCustomerId}`)
    }, [])

    return(
        <Container fluid className='m-1'>
            <Row className='justify-content-center'>
                {
                    error ? 
                    <Alert variant="warning" style={{ width: "42rem" }}>
                        <Alert.Heading>
                            An error has occured your operation was not successfull please try again
                        </Alert.Heading>
                    </Alert>
                    : null
                }
                <Card className='w-50'>
                    <Card.Body>
                        <Card.Title>Add Albasat Order</Card.Title>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Albasat Type</Form.Label>
                                <Form.Select required onChange={handleAlbasatType}>
                                    {
                                        albasatTypes.map((albasatType) => (
                                            <option key={albasatType.ALBASATE_TYPE_ID} defaultValue={albasatTypes[0].ALBASATE_Type_Name} value={albasatType.ALBASATE_Type_Name}>{albasatType.ALBASATE_Type_Name}</option>
                                        ))
                                    }
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Cherk Type</Form.Label>
                                <Form.Select required onChange={handleCherkType}>
                                    {
                                        cherkTypes.map((cherkType) => (
                                            <option key={cherkType.CHERK_TYPE_ID} value={cherkType.CHERK_TYPE}>{cherkType.CHERK_TYPE}</option>
                                        ))
                                    }
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Cherk Origin</Form.Label>
                                <Form.Select required onChange={handleCherkOrigin}>
                                    {
                                        cherkOrigins.map((cherkOrigin) => (
                                            <option key={cherkOrigin.CHERK_ORIGINE_ID} value={cherkOrigin.CHERK_ORIGINE}>{cherkOrigin.CHERK_ORIGINE}</option>
                                        ))
                                    }
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Color Type</Form.Label>
                                <Form.Select required onChange={handleColorType}>
                                    {
                                        cherkColors.map((cherkColor) => (
                                            <option key={cherkColor.COLOUR_ID} value={cherkColor.COLOUR_TYPE}>{cherkColor.COLOUR_TYPE}</option>
                                        ))
                                    }
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Kumet</Form.Label>
                                <Form.Control required type="number" placeholder="Kumet" name="KUMET" value={albasatOrder.KUMET} onChange={handleInputsChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Tekesha</Form.Label>
                                <Form.Control required type="number" placeholder="Tekesha" name="TEKESHA" value={albasatOrder.TEKESHA} onChange={handleInputsChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Derete</Form.Label>
                                <Form.Control required type="number" placeholder="Derete" name="DERET" value={albasatOrder.DERET} onChange={handleInputsChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Wegebe</Form.Label>
                                <Form.Control required type="number" placeholder="Wegebe" name="WEGEB" value={albasatOrder.WEGEB} onChange={handleInputsChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>KOLETA</Form.Label>
                                <Form.Control required type="number" placeholder="Koleta" name="KOLETA" value={albasatOrder.KOLETA} onChange={handleInputsChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Eje_Amb</Form.Label>
                                <Form.Control required type="number" placeholder="Eje_Amb" name="EJE_AMBARE" value={albasatOrder.EJE_AMBARE} onChange={handleInputsChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Quantity</Form.Label>
                                <Form.Control required type="number" placeholder="Quantity" name="QUANTITY_ALB" value={albasatOrder.QUANTITY_ALB} onChange={handleInputsChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>UnitPrice</Form.Label>
                                <Form.Control required type="number" placeholder="UnitPrice" name="UNIT_PRICE" value={albasatOrder.UNIT_PRICE} onChange={handleInputsChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Total Price</Form.Label>
                                <Form.Control required type="number" placeholder="Total Price" name="Total_Price" value={albasatOrder.Total_Price} onChange={handleInputsChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Delivery Date</Form.Label>
                                <Form.Control required type="date" placeholder="Delivery Date" name="DELIVERY_DATE" value={albasatOrder.DELIVERY_DATE} onChange={handleInputsChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Customer</Form.Label>
                                <Form.Select required onChange={handleCustomer}>
                                    {
                                        customers.map((customer) => (
                                            <option key={customer.id} value={customer.id}>{customer.First_Name}</option>
                                        ))
                                    }
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Additional Information</Form.Label>
                                <Form.Control required type="text" placeholder="Additional Information" name="ADDITIONAL_INFO" value={albasatOrder.ADDITIONAL_INFO} onChange={handleInputsChange} />
                            </Form.Group>
                            <Button className="m-1" variant="primary" type="submit">
                                Order
                            </Button>
                            <Button className="m-1" variant="secondary" onClick={handleClose}>
                                Cancel
                            </Button>
                        </Form>       
                    </Card.Body>
                </Card>
            </Row>  
        </Container>
        
    )

}

export default AlbasatOrderForm