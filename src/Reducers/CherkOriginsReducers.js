import { types } from "../types";

const initialState = {
    cherkOrigin: {},
    cherkOrigins: [],
    error: null
}

export function cherkOriginsReducers(state = initialState, action) {
    switch(action.type){
        case types.GET_CHERK_ORIGINS:
            return{
                ...state,
                cherkOrigins: action.payload
            };
        case types.POST_CHERK_ORIGIN:
            return{
                ...state,
                // cherkOrigin: {...state.cherkOrigin, cherkType: state.cherkOrigin.push(action.payload)},
                
            };

        case types.PUT_CHERK_ORIGIN:
            // console.log(`payload: ${action.payload.cherkE_TYPE_ID}`)
            return{
                ...state,
            //  cherkOrigin: action.payload,
            //  cherkOrigins: state.cherkOrigins.map(i => i.cherk_Origin_ID === state.cherkOrigin.cherk_Origin_ID
            //      (i.cherk_Origin_Name = state.cherkOrigin.cherk_Origin_Name))
            }; 
        case types.DELETE_CHERK_ORIGIN:
            // const cherkOriginId = action.payload
            // console.log(`payload: ${action.payload}`)
            // const cherkOrigin = state.cherkOrigins.indexOf(i => i.cherk_Origin_ID === cherkOriginId)
            // console.log(`delete id${cherkOrigin}`)
            return{
                ...state,
                // cherkOrigins: state.cherkOrigins.filter(i => i.cherkE_TYPE_ID !== action.payload)
                // cherkOrigins: state.cherkOrigins.slice(cherkOrigin),
                // cherkOrigins: state.cherkOrigins.slice(cherkOrigin)
                // cherkOrigins: {
                //     ...state.cherkOrigins,
                //     cherkOrigins.filter(i => i.id !== cherkOriginId)   
                // }
                // cherkOrigins: state.cherkOrigins.filter(i => i.cherkE_Origin_ID !== action.payload)
            };                
        default:
            return state;    
    }
}