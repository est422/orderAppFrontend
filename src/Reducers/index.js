import { combineReducers } from "redux"
import { albasatOrdersReducers } from "./AlbasatOrdersReducers"
import { albasatTypesReducers } from "./AlbasatTypesReducers"
import { cherkTypesReducers } from "./CherkTypeReducers"
import { cherkOriginsReducers } from "./CherkOriginsReducers"
import { cherkColorsReducers } from "./CherkColorsReducers"
import { customersReducers } from "./CustomersReducers"

export const rootReducers = combineReducers({
    albasatOrders: albasatOrdersReducers,
    albasatTypes: albasatTypesReducers,
    cherkTypes: cherkTypesReducers,
    cherkOrigins: cherkOriginsReducers,
    cherkColors: cherkColorsReducers,
    customers: customersReducers
});