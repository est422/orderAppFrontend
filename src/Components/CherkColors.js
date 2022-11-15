import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCherkColor, getCherkColors, updateCherkColor } from '../Actions/CherkColorsActions'
import Row from 'react-bootstrap/Row'
import { useNavigate  } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import ModalBody from "react-bootstrap/ModalBody"
import ModalHeader from "react-bootstrap/ModalHeader"
import ModalTitle from "react-bootstrap/ModalTitle"

export default function CherkColors() {

    const dispatch = useDispatch()
    const cherkColors = useSelector((state) => state.cherkColors.cherkColors)
    const [cherkColorsList, setCherkColorsList] = useState([])
    const [newCherkColor, setNewCherkColor] = useState({COLOUR_ID: '', COLOUR_TYPE: ''})
    const [editCherkColor, setEditCherkColor] = useState({COLOUR_ID: '', COLOUR_TYPE: ''})
    const [validated, setValidated] = useState(false)

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)

    const navigate = useNavigate ()
    const openCherkColorForm = () => {
        navigate("/ColorTypes/create")
    }

    const handleInputsChange = (e) => {
        e.preventDefault()
        setNewCherkColor({...newCherkColor, COLOUR_TYPE: e.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.currentTarget
        if (form.checkValidity() === false) {
            event.stopPropagation()
        }      
        setValidated(true)
        dispatch(updateCherkColor(newCherkColor))
        setCherkColorsList(cherkColors)

        handleClose()
    }

    const handleCherkColorEdit = (COLOUR_ID, COLOUR_TYPE) => {
        setShow(true)
        setEditCherkColor({...editCherkColor, COLOUR_ID: COLOUR_ID, COLOUR_TYPE: COLOUR_TYPE})

    }

    const handleCherkColorDelete = (cherkColorId) => {
        
        dispatch(deleteCherkColor(cherkColorId))
        setCherkColorsList(cherkColors)

    }

    useEffect(() => {
        dispatch(getCherkColors())
        setCherkColorsList(cherkColors)
        
    }, [cherkColorsList])

  return (
    <Container fluid className='m-2'>
        <Row className='justify-content-center'>
            <Button className='w-50 mb-1' variant="primary" size='lg' onClick={openCherkColorForm}>
                Add New
            </Button>
        </Row>
        {
            cherkColors.map((cherkColor) => (
                <Row key={cherkColor.COLOUR_ID} className='justify-content-center'>
                    <Card className='w-50 mb-1'>
                        <Card.Body>
                            <Card.Title>Cherk color Name</Card.Title>
                            <Card.Text>
                                Cherk color Name: {cherkColor.COLOUR_TYPE}
                            </Card.Text>
                            <Button className='m-1'  variant="primary" onClick={() => {handleCherkColorEdit(cherkColor.COLOUR_ID, cherkColor.COLOUR_TYPE)}}>Edit</Button>
                            <Button className='m-1' variant="primary" onClick={() => {handleCherkColorDelete(cherkColor.COLOUR_ID)}}>Delete</Button>
                        </Card.Body>
                    </Card>
                    { show ?
                        <Modal show={show} onHide={handleClose}>
                            <ModalHeader closeButton>
                                <ModalTitle>Edit Cherk colors</ModalTitle>
                            </ModalHeader>
                            <ModalBody>
                                <Card className='w-100 mb-1'>
                                    <Card.Body>
                                        <Card.Text>
                                            Cherk color Name: {editCherkColor.COLOUR_TYPE}
                                        </Card.Text>
                                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                            <Form.Group className="mb-3" controlId="">
                                                <Form.Label>Edit</Form.Label>
                                                <Form.Control required type="text" placeholder="Name" name="COLOUR_TYPE" onChange={(e) => {
                                                    e.preventDefault()
                                                    setNewCherkColor({...newCherkColor, COLOUR_ID: editCherkColor.COLOUR_ID, COLOUR_TYPE: e.target.value})
                                                }} />
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