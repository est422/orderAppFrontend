import { types } from "../types";

const initialState = {
    albasatType: {},
    albasatTypes: [],
    error: null
}

export function albasatTypesReducers(state = initialState, action) {
    switch(action.type){
        case types.GET_ALBASAT_TYPES:
            return{
                ...state,
                albasatTypes: action.payload
            };
        case types.POST_ALBASAT_TYPE:
            return{
                ...state,
                // albasatTypes: {...state.albasatTypes, albasatType: state.albasatTypes.push(action.payload)},
                
            };

        case types.PUT_ALBASAT_TYPE:
            // console.log(`payload: ${action.payload.ALBASATE_TYPE_ID}`)
            return{
                ...state,
            //  albasatType: action.payload,
            //  albasatTypes: state.albasatTypes.map(i => i.ALBASATE_TYPE_ID === state.albasatType.ALBASATE_TYPE_ID
            //      (i.ALBASATE_Type_Name = state.albasatType.ALBASATE_Type_Name))
            }; 
        case types.DELETE_ALBASAT_TYPE:
            // const albasatTypeId = action.payload
            // console.log(`payload: ${action.payload}`)
            // const albasatType = state.albasatTypes.indexOf(i => i.ALBASATE_TYPE_ID === albasatTypeId)
            // console.log(`delete id${albasatType}`)
            return{
                ...state,
                // albasatTypes: state.albasatTypes.filter(i => i.ALBASATE_TYPE_ID !== action.payload)
                // albasatTypes: state.albasatTypes.slice(albasatType),
                // albasatTypes: state.albasatTypes.slice(albasatType)
                // albasatTypes: {
                //     ...state.albasatTypes,
                //     albasatTypes.filter(i => i.id !== albasatTypeId)   
                // }
                // albasatTypes: state.albasatTypes.filter(i => i.ALBASATE_TYPE_ID !== action.payload)
            };                
        default:
            return state;    
    }
}