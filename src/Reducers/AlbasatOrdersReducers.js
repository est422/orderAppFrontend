import { types } from "../types";

const initialState = {
    albasatOrder: {},
    albasatOrders: [],
    error: null
}

export function albasatOrdersReducers(state = initialState, action) {
    switch(action.type){
        case types.GET_ALBASAT_ORDERS:
            return{
                ...state,
                albasatOrders: action.payload,
                error: null
            };
        case types.POST_ALBASAT_ORDER:
            return{
                ...state,
                // albasatOrder: action.payload
                error: null
            };
        case types.PUT_ALBASAT_ORDER:
            return{
                ...state,
                error: null
            }; 
        case types.DELETE_ALBASAT_ORDER:
            return{
                ...state,
                error: null
            };  
        case types.ERROR:
            return{
                ...state,
                error: action.payload
            }               
        default:
            return state;    
    }
}