import { types } from "../types";

const initialState = {
    cherkType: {},
    cherkTypes: [],
    error: null
}

export function cherkTypesReducers(state = initialState, action) {
    switch(action.type){
        case types.GET_CHERK_TYPES:
            return{
                ...state,
                cherkTypes: action.payload
            };
        case types.POST_CHERK_TYPE:
            return{
                ...state,
                // cherkTypes: {...state.cherkTypes, cherkType: state.cherkTypes.push(action.payload)},
                
            };

        case types.PUT_CHERK_TYPE:
            // console.log(`payload: ${action.payload.cherkE_TYPE_ID}`)
            return{
                ...state,
            //  cherkType: action.payload,
            //  cherkTypes: state.cherkTypes.map(i => i.cherkE_TYPE_ID === state.cherkType.cherkE_TYPE_ID
            //      (i.cherkE_Type_Name = state.cherkType.cherkE_Type_Name))
            }; 
        case types.DELETE_CHERK_TYPE:
            // const cherkTypeId = action.payload
            // console.log(`payload: ${action.payload}`)
            // const cherkType = state.cherkTypes.indexOf(i => i.cherkE_TYPE_ID === cherkTypeId)
            // console.log(`delete id${cherkType}`)
            return{
                ...state,
                // cherkTypes: state.cherkTypes.filter(i => i.cherkE_TYPE_ID !== action.payload)
                // cherkTypes: state.cherkTypes.slice(cherkType),
                // cherkTypes: state.cherkTypes.slice(cherkType)
                // cherkTypes: {
                //     ...state.cherkTypes,
                //     cherkTypes.filter(i => i.id !== cherkTypeId)   
                // }
                // cherkTypes: state.cherkTypes.filter(i => i.cherkE_TYPE_ID !== action.payload)
            };                
        default:
            return state;    
    }
}