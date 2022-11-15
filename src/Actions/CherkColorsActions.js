import axios from 'axios';
import { types } from '../types';

export const getCherkColors = () => {
    return async (dispatch) => {
        await axios.get('http://localhost:5000/api/cherkColors/')
        .then(res => {
            dispatch({
                type: types.GET_CHERK_COLORS,
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

export const createCherkColor = (cherkColor) => {
    return async (dispatch) => {
        await axios.post('http://localhost:5000/api/cherkColors/create', cherkColor)
        .then(res => {
            dispatch({
            type: types.POST_CHERK_COLOR,
            payload: res.data
        })
    })
    .catch(err => dispatch({
        type: types.ERROR,
        payload: err
    }))
    }
}

export const updateCherkColor = (editCherkColor) => {
    return async (dispatch) => {
        await axios.put(`http://localhost:5000/api/cherkColors/update/${editCherkColor.COLOUR_ID}`, editCherkColor)
        .then(res => {
            dispatch({
                type: types.PUT_CHERK_COLOR,
                payload: res.data
            })
        })
        .catch(err => dispatch({
            type: types.ERROR,
            payload: err
        }))
    }
}

export const deleteCherkColor = (cherkColorId) => {
    return async (dispatch) => {
        await axios.delete(`http://localhost:5000/api/cherkColors/delete/${cherkColorId}`)
        .then(res => {
            dispatch({
                type: types.DELETE_CHERK_COLOR,
                payload: res.data
            })
        })
        .catch(err => dispatch({
            type: types.ERROR,
            payload: err
        }))
    }
}