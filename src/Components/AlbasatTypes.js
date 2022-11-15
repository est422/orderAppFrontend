import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux'
import { getAlbasatTypes, updateAlbasaType, deleteAlbasaType } from '../Actions/AlbasatTypesActions'
// import { createAlbasatType } from '../Actions/AlbasatTypesActions'
import Row from 'react-bootstrap/Row'
import { useNavigate  } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import ModalBody from "react-bootstrap/ModalBody"
import ModalHeader from "react-bootstrap/ModalHeader"
// import ModalFooter from "react-bootstrap/ModalFooter"
import ModalTitle from "react-bootstrap/ModalTitle"
// import AlbasatTypesForm from './AlbasatTypesForm'

export default function AlbasatTypes() {

    const dispatch = useDispatch()
    const albasatTypes = useSelector((state) => state.albasatTypes.albasatTypes)
    const [albasatTypesList, setAlbasatTypesList] = useState([])
    const [updateAlbasatType, setUpdateAlbasatType] = useState({ALBASATE_TYPE_ID: '', ALBASATE_Type_Name: ''})
    const [editAlbasatType, setEditAlbasatType] = useState({ALBASATE_TYPE_ID: '', ALBASATE_Type_Name: ''})
    const [validated, setValidated] = useState(false)
    // setAlbasatTypesList(albasatTypes)
    // console.log(`albasat typess: ${albasatTypes}`)

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    // const handleShow = () => setShow(true)

    const navigate = useNavigate ()
    const openAlbasatForm = () => {
        navigate("/AlbasatTypes/create")
    }

    const handleInputsChange = (e) => {
        e.preventDefault()
        setUpdateAlbasatType({...updateAlbasatType, updateAlbasatTypeName: e.target.value})
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
        dispatch(updateAlbasaType(updateAlbasatType))
        // dispatch(getAlbasatTypes())
        setAlbasatTypesList(albasatTypes)
        // navigate("/AlbasatTypes")
        // setAlbasatTypesList({...albasatTypesList, albasatTypesList: albasatTypesList.map(i => i.ALBASATE_TYPE_ID === albasatTypes.ALBASATE_TYPE_ID (i.ALBASATE_Type_Name = albasatTypes.ALBASATE_Type_Name))})

        handleClose()
    }

    const handleAlbasatTypeEdit = (albasatTypeId, albasatTypeName) => {
        setShow(true)
        setEditAlbasatType({...editAlbasatType, ALBASATE_TYPE_ID: albasatTypeId, ALBASATE_Type_Name: albasatTypeName})
        // setAlbasatTypesList(albasatTypes)

    }

    const handleAlbasatTypeDelete = (albasatTypeId) => {
        // console.log("id", albasatTypeId, `state before delete ${albasatTypes}`)
        dispatch(deleteAlbasaType(albasatTypeId))
        // dispatch(getAlbasatTypes())
        setAlbasatTypesList(albasatTypes)
        // setAlbasatTypesList(albasatTypes)
        // setAlbasatTypesList(albasatTypesList.filter(list => list.ALBASATE_TYPE_ID !== albasatTypeId))
        // console.log(`state after delete ${albasatTypes}`)

    }

    useEffect(() => {
        dispatch(getAlbasatTypes())
        setAlbasatTypesList(albasatTypes)
        // console.log(`albasat types: ${props.albasatTypesList[0].albasatTypeName}`)
    }, [albasatTypesList])

  return (
    <Container fluid className='m-2'>
        <Row className='justify-content-center'>
            <Button className='w-50 mb-1' variant="primary" size='lg' onClick={openAlbasatForm}>
                Add New
            </Button>
        </Row>
        {
            albasatTypes.map((albasatType) => (
                <Row key={albasatType.ALBASATE_TYPE_ID} className='justify-content-center'>
                    <Card className='w-50 mb-1'>
                        <Card.Body>
                            <Card.Title>Albasat Type Name</Card.Title>
                            <Card.Text>
                                Albasat Type Name: {albasatType.ALBASATE_Type_Name}
                            </Card.Text>
                            <Button className='m-1'  variant="primary" onClick={() => {handleAlbasatTypeEdit(albasatType.ALBASATE_TYPE_ID, albasatType.ALBASATE_Type_Name)}}>Edit</Button>
                            <Button className='m-1' variant="primary" onClick={() => {handleAlbasatTypeDelete(albasatType.ALBASATE_TYPE_ID)}}>Delete</Button>
                        </Card.Body>
                    </Card>
                    { show ?
                        <Modal show={show} onHide={handleClose}>
                            <ModalHeader closeButton>
                                <ModalTitle>Edit albasat type</ModalTitle>
                            </ModalHeader>
                            <ModalBody>
                                <Card className='w-100 mb-1'>
                                    <Card.Body>
                                        {/* <Card.Title>Albasat Type Name</Card.Title> */}
                                        <Card.Text>
                                            Albasat Type Name: {editAlbasatType.ALBASATE_Type_Name}
                                        </Card.Text>
                                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                            <Form.Group className="mb-3" controlId="">
                                                <Form.Label>Edit</Form.Label>
                                                <Form.Control required type="text" placeholder="Name" name="albasatTypeName" onChange={(e) => {
                                                    e.preventDefault()
                                                    setUpdateAlbasatType({...updateAlbasatType, ALBASATE_TYPE_ID: editAlbasatType.ALBASATE_TYPE_ID, ALBASATE_Type_Name: e.target.value})
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
        {/* <AlbasatTypesForm show={show} handlelose={handleClose} /> */}
    </Container> 
  )
}
