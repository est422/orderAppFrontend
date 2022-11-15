import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createCherkColor } from '../Actions/CherkColorsActions'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import { useNavigate  } from 'react-router-dom'

export default function CherkColorsForm() {

    const dispatch = useDispatch()
    const [cherkColor, setCherkColor] = useState({COLOUR_TYPE: ''})
    const [validated, setValidated] = useState(false)
    const navigate = useNavigate ()

    const handleInputsChange = (e) => {
        e.preventDefault()
        setCherkColor({...cherkColor, COLOUR_TYPE: e.target.value})
    }

    const handleClose = (event) => {
        event.preventDefault()
        navigate("/ColorTypes")
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.currentTarget
        if (form.checkValidity() === false) {
            event.stopPropagation()
        }  
        setValidated(true)
        dispatch(createCherkColor(cherkColor))
        navigate("/ColorTypes")
    }

    return (
        <Container fluid className='m-1'>
            <Row className='justify-content-center'>
                <Card className='w-50'>
                    <Card.Body>
                    <Card.Title>Add Cherk color</Card.Title>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="">
                            <Form.Label>Cherk color Name</Form.Label>
                            <Form.Control required type="text" placeholder="Name" name="COLOUR_TYPE" value={cherkColor.COLOUR_TYPE} onChange={handleInputsChange} />
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