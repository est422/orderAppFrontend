import axios from 'axios';
import { types } from '../types';

export const getAlbasatTypes = () => {
    return async (dispatch) => {
        await axios.get('http://localhost:5000/api/albasatTypes/')
        .then(res => {
            dispatch({
                type: types.GET_ALBASAT_TYPES,
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

export const createAlbasatType = (albasatType) => {
    return async (dispatch) => {
        await axios.post('http://localhost:5000/api/albasatTypes/create', albasatType)
        .then(res => {
            dispatch({
            type: types.POST_ALBASAT_TYPE,
            payload: res.data
        })
    })
    .catch(err => dispatch({
        type: types.ERROR,
        payload: err
    }))
    }
}

export const updateAlbasaType = (editAlbasatType) => {
    return async (dispatch) => {
        await axios.put(`http://localhost:5000/api/albasatTypes/update/${editAlbasatType.ALBASATE_TYPE_ID}`, editAlbasatType)
        .then(res => {
            dispatch({
                type: types.PUT_ALBASAT_TYPE,
                payload: res.data
            })
        })
        .catch(err => dispatch({
            type: types.ERROR,
            payload: err
        }))
    }
}

export const deleteAlbasaType = (albasatTypeId) => {
    return async (dispatch) => {
        await axios.delete(`http://localhost:5000/api/albasatTypes/delete/${albasatTypeId}`)
        .then(res => {
            dispatch({
                type: types.DELETE_ALBASAT_TYPE,
                payload: res.data
            })
        })
        .catch(err => dispatch({
            type: types.ERROR,
            payload: err
        }))
    }
}