const { useState, useEffect } = React
const { Link, useParams } = ReactRouterDOM

import {contactService} from "../services/contact.service.js"

export function ContactDetails() {
    const [contact, setContact] = useState(null)
    const { contactId } = useParams()

    console.log(useParams());

    useEffect(() => {
        contactService.getById(contactId)
            .then(contact => {
                setContact(contact)
            })
            .catch(err => {
                // showErrorMsg('Cannot load contact')
            })
    }, [])

    if (!contact) return <h1>loadings....</h1>
    return contact && <div>
        <h3>Contact details 🐛</h3>
        <h4>{contact.title}</h4>
        <p>Number: <span>{contact.number}</span></p>
        <Link to="/contact">Back to List</Link>
    </div>
}