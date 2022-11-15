import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createAlbasatType } from '../Actions/AlbasatTypesActions'
// import { getAlbasatTypes } from '../Actions/AlbasatTypesActions'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import { useNavigate  } from 'react-router-dom'
// import Modal from 'react-bootstrap/Modal'

export default function AlbasatTypes() {

    const dispatch = useDispatch()
    const [albasatType, setAlbasatType] = useState({albasatTypeName: ''})
    const [validated, setValidated] = useState(false)
    const navigate = useNavigate ()

    const handleInputsChange = (e) => {
        e.preventDefault()
        setAlbasatType({...albasatType, albasatTypeName: e.target.value})
    }

    const handleClose = (event) => {
        event.preventDefault()
        navigate("/AlbasatTypes")
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.currentTarget
        // console.log("event", event)
        if (form.checkValidity() === false) {
            event.stopPropagation()
        }
        // console.log("Albasat type name", albasatType)        
        setValidated(true)
        dispatch(createAlbasatType(albasatType))
        navigate("/AlbasatTypes")
    }

    return (
        <Container fluid className='m-1'>
            <Row className='justify-content-center'>
                <Card className='w-50'>
                    <Card.Body>
                    <Card.Title>Add Albasat Type</Card.Title>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="">
                            <Form.Label>Albasat Type Name</Form.Label>
                            <Form.Control required type="text" placeholder="Name" name="AlbasatTypeName" value={albasatType.albasatTypeName} onChange={handleInputsChange} />
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
            </Row>  
        </Container>
    )
}
