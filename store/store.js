
import { userService } from "../services/user.service.js"
import { contactReducer } from "./reducers/contact.reducer.js"

const { createStore, compose, combineReducers } = Redux

const rootReducer = combineReducers({
    contactModule: contactReducer,
    // userModule: userReducer
})

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose

export const store = createStore(rootReducer, composeEnhancers())

window.gStore = store
