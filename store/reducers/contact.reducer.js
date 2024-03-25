import { contactService } from "../../services/contact.service.js"

export const SET_CONTACTS = 'SET_CONTACTS'
export const ADD_CONTACT = 'ADD_CONTACT'
export const EDIT_CONTACT = 'EDIT_CONTACT'
export const REMOVE_CONTACT = 'REMOVE_CONTACT'
export const SET_FILTER_BY = 'SET_FILTER_BY'



const initialState = {
    contacts: [],
    filterBy: contactService.getDefaultFilter()

}

export function contactReducer(state = initialState, action = {}) {

    switch (action.type) {
        case SET_CONTACTS:
            return { ...state, contacts: action.contacts }

        case ADD_CONTACT:
            return { ...state, contacts: [...state.contacts, action.contact] }

        case EDIT_CONTACT:
            return {
                ...state,
                contacts: state.contacts.map(contact => contact._id === action.contact._id ? action.contact : contact)
            }

        case REMOVE_CONTACT:
            return { ...state, contacts: state.contacts.filter(contact => contact._id !== action.contactId) }

            case SET_FILTER_BY:
            return {...state, filterBy: { ...state.filterBy, ...action.filterBy }}

        default:
            return state
    }

}