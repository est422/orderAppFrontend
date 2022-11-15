import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAlbasatOrder, getAlbasatOrders, updateAlbasaOrder } from '../Actions/AlbasatOrdersActions'
import { getAlbasatTypes } from '../Actions/AlbasatTypesActions'
import { getCherkTypes } from '../Actions/CherkTypesActions'
import { getCherkOrigins } from '../Actions/CherkOriginsActions'
import { getCherkColors } from '../Actions/CherkColorsActions'
import { getAllCustomers } from '../Actions/CustomersActions'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import { useNavigate  } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import ModalBody from "react-bootstrap/ModalBody"
import ModalHeader from "react-bootstrap/ModalHeader"
import ModalTitle from "react-bootstrap/ModalTitle"
import Alert from "react-bootstrap/Alert"

function AlbasatOrder() {

    const dispatch = useDispatch()
    const albasatOrders = useSelector((state) => state.albasatOrders.albasatOrders)
    const [albasatOrdersList, setAlbasatOrdersList] = useState([])
    const albasatTypes = useSelector((state) => state.albasatTypes.albasatTypes)
    const cherkTypes = useSelector((state) => state.cherkTypes.cherkTypes)
    const cherkOrigins = useSelector((state) => state.cherkOrigins.cherkOrigins)
    const cherkColors = useSelector((state) => state.cherkColors.cherkColors)
    const customers = useSelector((state) => state.customers.customers)
    const error = useSelector((state) => state.albasatOrders.error)
    // const [customerName, setCustomerName] = useState("")
    // console.log(`cherk origins ${cherkOrigins}`)
    // const [albasatTypesList, setAlbasatTypesList] = useState([])

    const [validated, setValidated] = useState(false)
    const [editAlbasatOrder, setEditAlbasatOrder] = useState({
        ALB_LEKET_ID: "",
        AlbasatType: "",
        CherkType: "",
        CherkOrigin: "",
        ColorType: "",
        Kumet: "",
        Tekesha: "",
        Derete: "",
        Wegebe: "",
        Koleta: "",
        EjeAmb: "",
        Quantity: "",
        UnitPrice: "",
        TotalPrice: "",
        OrderDate: "",
        DeliveryDate: "",
        Customer_Id: "",
        AdditionalInfo: ""
    })

    const [newAlbasatOrder, setNewAlbasatOrder] = useState({
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

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)

    const navigate = useNavigate ()
    const openAlbasatOrderForm = () => {
        navigate("/AlbasatOrders/create")
    }

    const handleInputsChange = (e) => {
        e.preventDefault()
        setNewAlbasatOrder({...newAlbasatOrder, [e.target.name]: e.target.value})
    }

    const handleAlbasatType = (e) => {
        e.preventDefault()
        setNewAlbasatOrder({...newAlbasatOrder, AlbasatType: e.target.value})
    }

    const handleCherkType = (e) => {
        e.preventDefault()
        setNewAlbasatOrder({...newAlbasatOrder, CherkType: e.target.value})
    }

    const handleCherkOrigin = (e) => {
        e.preventDefault()
        setNewAlbasatOrder({...newAlbasatOrder, CherkOrigin: e.target.value})
    }

    const handleColorType = (e) => {
        e.preventDefault()
        setNewAlbasatOrder({...newAlbasatOrder, ColorType: e.target.value})
    }

    const handleCustomer = (e) => {
        e.preventDefault()
        const customer = customers.find(i => i.First_Name === e.target.value)
        // console.log(`customer ${customer.First_Name}`)
        setNewAlbasatOrder({...newAlbasatOrder, Customer_Id: customer.id})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.currentTarget
        // console.log("event", event)
        if (form.checkValidity() === false) {
            event.stopPropagation()
        }
        setValidated(true)
        // console.log(`order id${editAlbasatOrder.ALB_LEKET_ID}`)
        dispatch(updateAlbasaOrder(editAlbasatOrder.ALB_LEKET_ID, newAlbasatOrder))
        setAlbasatOrdersList(albasatOrders)
        handleClose()
    }

    const handleAlbasatOrderEdit = (albasatOrderId) => {
        setShow(true)
        // console.log(`albasatOrderId ${albasatOrderId}`)
        const order = albasatOrders.find(i => i.ALB_LEKET_ID === albasatOrderId)
        // setEditAlbasatOrder({...editAlbasatOrder, editAlbasatOrder: order})
        setEditAlbasatOrder({...editAlbasatOrder, 
            ALB_LEKET_ID: albasatOrderId,
            AlbasatType: order.AlbasatType,
            CherkType: order.CherkType,
            CherkOrigin: order.CherkOrigin,
            ColorType: order.ColorType,
            KUMET: order.KUMET,
            TEKESHA: order.TEKESHA,
            DERET: order.DERET,
            WEGEB: order.WEGEB,
            KOLETA: order.KOLETA,
            EJE_AMBARE: order.EJE_AMBARE,
            QUANTITY_ALB: order.QUANTITY_ALB,
            UNIT_PRICE: order.UNIT_PRICE,
            Total_Price: order.Total_Price,
            OrderDate: order.OrderDate,
            DELIVERY_DATE: order.DELIVERY_DATE,
            Customer_Id: order.Customer_Id,
            ADDITIONAL_INFO: order.ADDITIONAL_INFO
            
        })
        // console.log(`edit albasat order ${editAlbasatOrder.AlbasatType}`)
        // setEditAlbasatOrder({...editAlbasatOrder, editAlbasatOrder: Order})
        // setNewCustomer({...newCustomer, First_Name, Middle_Name, Last_Name, Mobile_Phone_1, Mobile_Phone_2, Title, Country, City, Work_Place, Additional_Info})
        // setcustomersList(customers)
        // console.log(`edit albasat order ${albasatOrder.ADDITIONAL_INFO}`)

    }

    const handleAlbasatOrderDelete = (id) => {

        dispatch(deleteAlbasatOrder(id))
        setAlbasatOrdersList(albasatOrders)

    }

    useEffect(() => {

        dispatch(getAlbasatOrders())
        dispatch(getAlbasatTypes())
        dispatch(getCherkTypes())
        dispatch(getCherkOrigins())
        dispatch(getCherkColors())
        dispatch(getAllCustomers())

        setAlbasatOrdersList(albasatOrders)

        // if(error) console.log(`Error ${error}`)
        // setCustomerName("empty")
        // customers.map(c => c)

        // console.log(`customerName ${customerName}`)

    }, [albasatOrdersList])

    return (
        <Container fluid className='m-2'>
            <Row className='justify-content-center'>
                <Button className='w-50 mb-1' variant="primary" size='lg' onClick={openAlbasatOrderForm}>
                    Add New
                </Button>
                {
                    error ? 
                    <Alert variant="warning" style={{ width: "42rem" }}>
                        <Alert.Heading>
                            An error has occured your operation is not successful please try again
                        </Alert.Heading>
                    </Alert>
                    : " "
                }
            </Row>
            {
                albasatOrders.map((albasatOrder) => (
                    <Row key={albasatOrder.ALB_LEKET_ID} className='justify-content-center'>
                        <Card className='w-50 mb-1'>
                            <Card.Body>
                                <Card.Title>Albasat Order</Card.Title>
                                <Card.Text>
                                    Order Delivery Date: {albasatOrder.DELIVERY_DATE}
                                </Card.Text>
                                <Card.Text>
                                    Order Quantity: {albasatOrder.QUANTITY_ALB}
                                </Card.Text>
                                <Card.Text>
                                    Unit Price: {albasatOrder.UNIT_PRICE}
                                </Card.Text>
                                <Card.Text>
                                    Customer: {customers.map((customer) => customer.id === albasatOrder.Customer_Id ?
                                    customer.First_Name : " ")}
                                </Card.Text>
                                <Card.Text>
                                    Additional Information: {albasatOrder.ADDITIONAL_INFO}
                                </Card.Text>
                                <Button className='m-1'  variant="primary" onClick={() => {handleAlbasatOrderEdit(albasatOrder.ALB_LEKET_ID)}}>Edit</Button>
                                <Button className='m-1' variant="primary" onClick={() => {handleAlbasatOrderDelete(albasatOrder.ALB_LEKET_ID)}}>Delete</Button>
                            </Card.Body>
                        </Card>
                        { show ?
                            <Modal show={show} onHide={handleClose}>
                                <ModalHeader closeButton>
                                    <ModalTitle>Edit albasat Order</ModalTitle>
                                </ModalHeader>
                                <ModalBody>
                                    <Card className='w-100 mb-1'>
                                        <Card.Body>
                                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                                <Form.Group className="mb-3" controlId="">
                                                    <Form.Label>Albasat Order Type: {editAlbasatOrder.AlbasatType}</Form.Label>
                                                    <Form.Select required onChange={handleAlbasatType}>
                                                        {
                                                            albasatTypes.map((albasatTypes) => (
                                                                <option key={albasatTypes.ALBASATE_TYPE_ID}>{albasatTypes.ALBASATE_Type_Name}</option>
                                                            ))
                                                        }
                                                    </Form.Select>
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="">
                                                    <Form.Label>Cherk Type: {editAlbasatOrder.CherkType}</Form.Label>
                                                    <Form.Select required onChange={handleCherkType}>
                                                        {
                                                            cherkTypes.map((cherkType) => (
                                                                <option key={cherkType.CHERK_TYPE_ID}>{cherkType.CHERK_TYPE}</option>
                                                            ))
                                                        }
                                                    </Form.Select>
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="">
                                                    <Form.Label>Cherk Origin: {editAlbasatOrder.CherkOrigin}</Form.Label>
                                                    <Form.Select required onChange={handleCherkOrigin}>
                                                        {
                                                            cherkOrigins.map((cherkOrigin) => (
                                                                <option key={cherkOrigin.CHERK_ORIGINE_ID}>{cherkOrigin.CHERK_ORIGINE}</option>
                                                            ))
                                                        }
                                                    </Form.Select>
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="">
                                                    <Form.Label>Color Type: {editAlbasatOrder.ColorType}</Form.Label>
                                                    <Form.Select required onChange={handleColorType}>
                                                        {
                                                            cherkColors.map((cherkColor) => (
                                                                <option key={cherkColor.COLOUR_ID}>{cherkColor.COLOUR_TYPE}</option>
                                                            ))
                                                        }
                                                    </Form.Select>
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="">
                                                    <Form.Label>Kumete: {editAlbasatOrder.KUMET}</Form.Label>
                                                    <Form.Control required type="number" placeholder="Kumete" name="KUMET" onChange={handleInputsChange} />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="">
                                                    <Form.Label>Tekesha: {editAlbasatOrder.TEKESHA}</Form.Label>
                                                    <Form.Control required type="number" placeholder="Tekesha" name="TEKESHA" onChange={handleInputsChange} />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="">
                                                    <Form.Label>Derete: {editAlbasatOrder.DERET}</Form.Label>
                                                    <Form.Control required type="number" placeholder="Derete" name="DERET" onChange={handleInputsChange} />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="">
                                                    <Form.Label>Wegebe: {editAlbasatOrder.WEGEB}</Form.Label>
                                                    <Form.Control required type="number" placeholder="Wegebe" name="WEGEB" onChange={handleInputsChange} />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="">
                                                    <Form.Label>Koleta: {editAlbasatOrder.KOLETA}</Form.Label>
                                                    <Form.Control required type="number" placeholder="Koleta" name="KOLETA" onChange={handleInputsChange} />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="">
                                                    <Form.Label>Eje_Amb: {editAlbasatOrder.EJE_AMBARE}</Form.Label>
                                                    <Form.Control required type="number" placeholder="Eje_Amb" name="EJE_AMBARE" onChange={handleInputsChange} />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="">
                                                    <Form.Label>Quantity: {editAlbasatOrder.QUANTITY_ALB}</Form.Label>
                                                    <Form.Control required type="number" placeholder="Quantity" name="QUANTITY_ALB" onChange={handleInputsChange} />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="">
                                                    <Form.Label>UnitPrice: {editAlbasatOrder.UNIT_PRICE}</Form.Label>
                                                    <Form.Control required type="number" placeholder="UnitPrice" name="UNIT_PRICE" onChange={handleInputsChange} />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="">
                                                    <Form.Label>Total Price: {editAlbasatOrder.Total_Price}</Form.Label>
                                                    <Form.Control required type="number" placeholder="Total Price" name="Total_Price" onChange={handleInputsChange} />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="">
                                                    <Form.Label>Delivery Date: {editAlbasatOrder.DELIVERY_DATE}</Form.Label>
                                                    <Form.Control required type="date" placeholder="Delivery Date" name="DELIVERY_DATE" onChange={handleInputsChange} />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="">
                                                    <Form.Label>Customer: {customers.map(c => c.id === editAlbasatOrder.Customer_Id ? c.First_Name : " ")}</Form.Label>
                                                    <Form.Select required onChange={handleCustomer}>
                                                        {
                                                            customers.map((customer) => (
                                                                <option key={customer.id}>{customer.First_Name}</option>
                                                            ))
                                                        }
                                                    </Form.Select>
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="">
                                                    <Form.Label>Additional Information: {editAlbasatOrder.ADDITIONAL_INFO}</Form.Label>
                                                    <Form.Control required type="text" placeholder="Additional Information" name="ADDITIONAL_INFO" onChange={handleInputsChange} />
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
                                </ModalBody>
                            </Modal> : null
                        }
                    </Row>
                ))
            }
        </Container> 
      )

}

export default AlbasatOrder