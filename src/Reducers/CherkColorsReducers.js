import { types } from "../types";

const initialState = {
    cherkColor: {},
    cherkColors: [],
    error: null
}

export function cherkColorsReducers(state = initialState, action) {
    switch(action.type){
        case types.GET_CHERK_COLORS:
            return{
                ...state,
                cherkColors: action.payload
            };
        case types.POST_CHERK_COLOR:
            return{
                ...state,
                // cherkColor: {...state.cherkColor, cherkColor: state.cherkColor.push(action.payload)},
                
            };

        case types.PUT_CHERK_COLOR:
            // console.log(`payload: ${action.payload.cherkE_TYPE_ID}`)
            return{
                ...state,
            //  cherkColor: action.payload,
            //  cherkColors: state.cherkColors.map(i => i.cherk_Color_ID === state.cherkColor.cherk_Color_ID
            //      (i.cherk_Color_Name = state.cherkColor.cherk_Color_Name))
            }; 
        case types.DELETE_CHERK_COLOR:
            // const cherkColorId = action.payload
            // console.log(`payload: ${action.payload}`)
            // const cherkColor = state.cherkColors.indexOf(i => i.cherk_Color_ID === cherkColorId)
            // console.log(`delete id${cherkColor}`)
            return{
                ...state,
                // cherkColors: state.cherkColors.filter(i => i.cherkE_TYPE_ID !== action.payload)
                // cherkColors: state.cherkColors.slice(cherkColor),
                // cherkColors: state.cherkColors.slice(cherkColor)
                // cherkColors: {
                //     ...state.cherkColors,
                //     cherkColors.filter(i => i.id !== cherkColorId)   
                // }
                // cherkColors: state.cherkColors.filter(i => i.cherkE_Color_ID !== action.payload)
            };                
        default:
            return state;    
    }
}