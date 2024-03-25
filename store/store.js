const { createStore, compose } = Redux


const initialState = {
    contacts: []
}


export function appReducer(state = initialState, action = {}) {

    switch (action.type) {
        default:
            return state
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(appReducer, composeEnhancers())

window.gStore = store
