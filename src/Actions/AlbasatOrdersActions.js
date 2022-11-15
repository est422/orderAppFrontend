import axios from 'axios';
import { types } from '../types';

export const getAlbasatOrders = () => {
    return async (dispatch) => {
        await axios.get('http://localhost:5000/api/albasatOrders/')
        .then(res => {
            dispatch({
                type: types.GET_ALBASAT_ORDERS,
                payload: res.data
            })
        })
        .catch(err => dispatchEvent({
            type: types.ERROR,
            payload: err
        }))
    }
}

export const createAlbasatOrder = (albasat) => {
    return async (dispatch) => {
        await axios.post('http://localhost:5000/api/albasatOrders/create', albasat)
        .then(res => {
            dispatch({
                type: types.POST_ALBASAT_ORDER,
                payload: res.data
        })
    })
    .catch(err => dispatch({
        type: types.ERROR,
        payload: err
    }))
    }
}

export const updateAlbasaOrder = (id, editAlbasatOrder) => {
    return async (dispatch) => {
        await axios.put(`http://localhost:5000/api/albasatOrders/update/${id}`, editAlbasatOrder)
        .then(res => {
            dispatch({
                type: types.PUT_ALBASAT_ORDER,
                payload: res.data
            })
        })
        .catch(err => dispatch({
            type: types.ERROR,
            payload: err
        }))
    }
}

export const deleteAlbasatOrder = (id) => {
    return async (dispatch) => {
        await axios.delete(`http://localhost:5000/api/albasatOrders/delete/${id}`)
        .then(res => {
            dispatch({
                type: types.DELETE_ALBASAT_ORDER,
                payload: res.data
            })
        })
        .catch(err => dispatch({
            type: types.ERROR,
            payload: err
        }))
    }
}