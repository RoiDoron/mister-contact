import { ContactList } from "../cmp/ContactList.jsx"
import { contactService } from "../services/contact.service.js"
import { loadContacts } from "../store/actions/contact.actions.js"

const { useState, useEffect } = React
const { useSelector } = ReactRedux


export function ContactIndex() {
    const contacts = useSelector(storeState => storeState.contactModule.contacts)

    useEffect(() => {
        loadContacts()
            .catch(err => {
                showErrorMsg('Cannot load Contacts!')
            })
    }, [])


    return (
        <main>
            <h3>Contacts App</h3>
            <main>
                <ContactList contacts={contacts} />
                <img className="loading-img" src="assets/img/Loading_icon.gif" alt="" />
            </main>
        </main>
    )
}