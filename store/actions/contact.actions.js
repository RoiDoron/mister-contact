
import { contactService } from "../../services/contact.service.js"
import { ADD_CONTACT, EDIT_CONTACT, REMOVE_CONTACT, SET_CONTACTS } from "../reducers/contact.reducer.js"
import { store } from "../store.js"


export function loadContacts() {
    // const filterBy = store.getState().todoModule.filterBy
    // store.dispatch({ type: SET_IS_LOADING, isLoading: true })
    return contactService.query().then(contacts => {
        store.dispatch({ type: SET_CONTACTS, contacts })
    })
        .catch(err => {
            console.log('contact action --> Cannot load contacts', err)
            throw err
        })
}

export function saveContact(contact) {
    const type = contact._id ? EDIT_CONTACT : ADD_CONTACT
    return contactService.save(contact)
        .then((savedContact) => {
            store.dispatch({ type, contact: savedContact })
            return savedContact
        })
        .catch(err => {
            console.log('contact action -> Cannot save contact', err)
            throw err
        })
}

export function removeContact(contactId) {

    return contactService
        .remove(contactId)
        .then(() => {
            store.dispatch({ type: REMOVE_CONTACT, contactId })
            console.log('Deleted Succesfully!')
        })
        .catch((err) => {
            console.log('Error from onRemoveContact action ->', err)
            throw err
        })
}