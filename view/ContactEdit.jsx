const { useState, useEffect } = React

import { contactService } from "../services/contact.service.js"

export function ContactEdit({ contact }) {
    const [editContact, setEditContact] = useState(contact)


    function handleChange({ target }) {
        const field = target.name
        let value = target.value
        setEditContact({ ...prevContact, [field]: value })
    }

    function submit(ev) {
        ev.preventDefault()
        contactService.save(editContact)
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
    </form>

}