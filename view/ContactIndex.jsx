import { ContactFilter } from "../cmp/ContactFilter.jsx"
import { ContactList } from "../cmp/ContactList.jsx"
import { Pagination } from "../cmp/pagination.jsx"
import { Navigate } from "../lib/react-router-dom.js"
import { contactService } from "../services/contact.service.js"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service.js"
import { loadContacts, removeContact, saveContact, setFilterBy } from "../store/actions/contact.actions.js"


const { useState, useEffect } = React
const { useSelector } = ReactRedux
const { useNavigate } = ReactRouter


export function ContactIndex() {
    const navigate = useNavigate()
    const contacts = useSelector(storeState => storeState.contactModule.contacts)
    const filterBy = useSelector(storeState => storeState.contactModule.filterBy)

    useEffect(() => {
        loadContacts()
            .catch(err => {
                showErrorMsg('Cannot load Contacts!')
            })
    }, [filterBy])

    function onSetFilter(filterBy) {
        setFilterBy(filterBy)
    }

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
                <button className="add-btn fa-solid fa-phone" onClick={onAddContact}> Add Contact </button>
                <ContactFilter filterBy={filterBy} onSetFilter={onSetFilter} />

                <ContactList contacts={contacts} onRemoveContact={onRemoveContact} />
                {/* <img className="loading-img" src="assets/img/Loading_icon.gif" alt="" /> */}
                <Pagination filterBy={filterBy} onSetFilter={onSetFilter}/>
            </main>
        </main>
    )
}