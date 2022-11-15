import axios from 'axios';
import { types } from '../types';

export const getAllCustomers = () => {
    return async (dispatch) => {
        await axios.get('http://localhost:5000/api/customers/')
        .then(res => {
            dispatch({
                type: types.GET_ALL_CUSTOMERS,
                payload: res.data
            })
            // console.log(`res${res.data}`);
        })
        .catch(err => dispatch({
            type: types.ERROR,
            payload: err
        }))
    }
}

export const getCustomer = (customerId) => {
    return async (dispatch) => {
        await axios.get(`http://localhost:5000/api/customers/${customerId}`)
        .then(res => {
            dispatch({
                type: types.GET_CUSTOMERS,
                payload: res.data
            })
            // console.log(`res${res.data}`);
        })
        .catch(err => dispatch({
            type: types.ERROR,
            payload: err
        }))
    }
}

export const createCustomer = (Customer) => {
    return async (dispatch) => {
        await axios.post('http://localhost:5000/api/customers/create', Customer)
        .then(res => {
            dispatch({
            type: types.POST_CUSTOMER,
            payload: res.data
        })
    })
    .catch(err => dispatch({
        type: types.ERROR,
        payload: err
    }))
    }
}

export const updateCustomer = (id, editCustomer) => {
    return async (dispatch) => {
        await axios.put(`http://localhost:5000/api/customers/update/${id}`, editCustomer)
        .then(res => {
            dispatch({
                type: types.PUT_CUSTOMER,
                payload: res.data
            })
        })
        .catch(err => dispatch({
            type: types.ERROR,
            payload: err
        }))
    }
}

export const deleteCustomer = (CustomerId) => {
    return async (dispatch) => {
        await axios.delete(`http://localhost:5000/api/customers/delete/${CustomerId}`)
        .then(res => {
            dispatch({
                type: types.DELETE_CUSTOMER,
                payload: res.data
            })
        })
        .catch(err => dispatch({
            type: types.ERROR,
            payload: err
        }))
    }
}