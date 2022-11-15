import { types } from "../types";

const initialState = {
    customer: {},
    customers: [],
    error: null
}

export function customersReducers(state = initialState, action) {
    switch(action.type){
        case types.GET_ALL_CUSTOMERS:
            return{
                ...state,
                customers: action.payload
            };
        case types.GET_CUSTOMERS:
            return{
                ...state,
                customers: action.payload
            };
        case types.POST_CUSTOMER:
            return{
                ...state,
                // customers: {...state.customers, customer: state.customers.push(action.payload)},
                
            };

        case types.PUT_CUSTOMER:
            // console.log(`payload: ${action.payload.cherkE_TYPE_ID}`)
            return{
                ...state,
            //  customer: action.payload,
            //  customers: state.customers.map(i => i.cherkE_TYPE_ID === state.customer.cherkE_TYPE_ID
            //      (i.cherkE_Type_Name = state.customer.cherkE_Type_Name))
            }; 
        case types.DELETE_CUSTOMER:
            // const customerId = action.payload
            // console.log(`payload: ${action.payload}`)
            // const customer = state.customers.indexOf(i => i.cherkE_TYPE_ID === customerId)
            // console.log(`delete id${customer}`)
            return{
                ...state,
                // customers: state.customers.filter(i => i.cherkE_TYPE_ID !== action.payload)
                // customers: state.customers.slice(customer),
                // customers: state.customers.slice(customer)
                // customers: {
                //     ...state.customers,
                //     customers.filter(i => i.id !== customerId)   
                // }
                // customers: state.customers.filter(i => i.cherkE_TYPE_ID !== action.payload)
            };                
        default:
            return state;    
    }
}