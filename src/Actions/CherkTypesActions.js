import axios from 'axios';
import { types } from '../types';

export const getCherkTypes = () => {
    return async (dispatch) => {
        await axios.get('http://localhost:5000/api/cherkTypes/')
        .then(res => {
            dispatch({
                type: types.GET_CHERK_TYPES,
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

export const createCherkType = (cherkType) => {
    return async (dispatch) => {
        await axios.post('http://localhost:5000/api/cherkTypes/create', cherkType)
        .then(res => {
            dispatch({
            type: types.POST_CHERK_TYPE,
            payload: res.data
        })
    })
    .catch(err => dispatch({
        type: types.ERROR,
        payload: err
    }))
    }
}

export const updateCherkType = (editCherkType) => {
    return async (dispatch) => {
        await axios.put(`http://localhost:5000/api/cherkTypes/update/${editCherkType.CHERK_TYPE_ID}`, editCherkType)
        .then(res => {
            dispatch({
                type: types.PUT_CHERK_TYPE,
                payload: res.data
            })
        })
        .catch(err => dispatch({
            type: types.ERROR,
            payload: err
        }))
    }
}

export const deleteCherkType = (cherkTypeId) => {
    return async (dispatch) => {
        await axios.delete(`http://localhost:5000/api/cherkTypes/delete/${cherkTypeId}`)
        .then(res => {
            dispatch({
                type: types.DELETE_CHERK_TYPE,
                payload: res.data
            })
        })
        .catch(err => dispatch({
            type: types.ERROR,
            payload: err
        }))
    }
}