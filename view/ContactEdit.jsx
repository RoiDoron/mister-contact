const { useState, useEffect } = React

const { Link, useParams } = ReactRouterDOM
const { useNavigate } = ReactRouter

import { contactService } from "../services/contact.service.js"
import { showSuccessMsg } from "../services/event-bus.service.js"
import { saveContact } from "../store/actions/contact.actions.js"

export function ContactEdit() {
    const { contactId } = useParams()
    const navigate = useNavigate()
    
    const [editContact, setEditContact] = useState(contactService.getEmptyContact())

    useEffect(() => {
        contactService.getById(contactId)
            .then(contact => {
                setEditContact(contact)
            })
            .catch(err => {
                // showErrorMsg('Cannot load contact')
            })
    }, [])


    function handleChange({ target }) {
        const field = target.name
        let value = target.value
        setEditContact(prevEditContact=>({ ...prevEditContact, [field]: value }))
    }

    function submit(ev) {
        ev.preventDefault()
        console.log('hi');
        saveContact(editContact)
        navigate('/contact')
        showSuccessMsg('We did it!')
    }

    return <form onSubmit={submit}>
        <input
            type="text"
            name="title"
            value={editContact.title}

            onChange={handleChange}
            placeholder="Contact name"
        />
        <input
            type="text"
            name="number"

            value={editContact.number}
            onChange={handleChange}
            placeholder="Contact number"
        />
        <button>submit</button>
    </form>

}