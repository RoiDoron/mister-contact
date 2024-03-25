import { ContactList } from "../cmp/ContactList.jsx"
import { Navigate } from "../lib/react-router-dom.js"
import { contactService } from "../services/contact.service.js"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service.js"
import { loadContacts, removeContact, saveContact } from "../store/actions/contact.actions.js"

const { useState, useEffect } = React
const { useSelector } = ReactRedux
const { useNavigate } = ReactRouter


export function ContactIndex() {
    const navigate = useNavigate()
    const contacts = useSelector(storeState => storeState.contactModule.contacts)

    useEffect(() => {
        loadContacts()
            .catch(err => {
                showErrorMsg('Cannot load Contacts!')
            })
    }, [])

    function onAddContact() {
        navigate('/edit')
    }

    function onRemoveContact(contactId) {
        removeContact(contactId)
            .then(() => {
                showSuccessMsg('Contact removed')
            })
            .catch((err) => {
                showErrorMsg('Cannot remove contact')
            })
    }


    return (
        <main>
            <h3>Contacts list</h3>
            <main>
                <button className="fa-solid fa-phone" onClick={onAddContact}> Add Contact </button>
                <ContactList contacts={contacts} onRemoveContact={onRemoveContact} />
                <img className="loading-img" src="assets/img/Loading_icon.gif" alt="" />
            </main>
        </main>
    )
}