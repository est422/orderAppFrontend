import axios from 'axios';
import { types } from '../types';

export const getCherkOrigins = () => {
    return async (dispatch) => {
        await axios.get('http://localhost:5000/api/cherkOrigins/')
        .then(res => {
            dispatch({
                type: types.GET_CHERK_ORIGINS,
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

export const createCherkOrigin = (cherkOrigin) => {
    return async (dispatch) => {
        await axios.post('http://localhost:5000/api/cherkOrigins/create', cherkOrigin)
        .then(res => {
            dispatch({
            type: types.POST_CHERK_ORIGIN,
            payload: res.data
        })
    })
    .catch(err => dispatch({
        type: types.ERROR,
        payload: err
    }))
    }
}

export const updateCherkOrigin = (editCherkOrigin) => {
    return async (dispatch) => {
        await axios.put(`http://localhost:5000/api/cherkOrigins/update/${editCherkOrigin.CHERK_Origin_ID}`, editCherkOrigin)
        .then(res => {
            dispatch({
                type: types.PUT_CHERK_ORIGIN,
                payload: res.data
            })
        })
        .catch(err => dispatch({
            type: types.ERROR,
            payload: err
        }))
    }
}

export const deleteCherkOrigin = (cherkOriginId) => {
    return async (dispatch) => {
        await axios.delete(`http://localhost:5000/api/cherkOrigins/delete/${cherkOriginId}`)
        .then(res => {
            dispatch({
                type: types.DELETE_CHERK_ORIGIN,
                payload: res.data
            })
        })
        .catch(err => dispatch({
            type: types.ERROR,
            payload: err
        }))
    }
}