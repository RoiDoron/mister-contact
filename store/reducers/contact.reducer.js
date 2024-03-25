import { contactService } from "../../services/contact.service.js"

export const SET_CONTACTS = 'SET_CONTACTS'

const initialState = {
    contacts: [],
}

export function contactReducer(state = initialState, action = {}) {

    switch (action.type) {
        case SET_CONTACTS:
            return { ...state, contacts: action.contacts }

        default:
            return state
    }

}