const { Link } = ReactRouterDOM
import { ContactPreview } from './ContactPreview.jsx'


export function ContactList({contacts, onRemoveContact}){

    if (!contacts) return <div>Loading...</div>

    return (
        <ul className="bug-list animate__animated animate__backInLeft">
            {contacts.map((contact) => (
                <li className="bug-preview" key={contact._id}>
                    <ContactPreview contact={contact} />
                    <div>
                        <button onClick={() => onRemoveContact(contact._id)}>x</button>
                        <Link to={`/edit/${contact._id}`}><button>Edit contact</button></Link>
                    </div>
                    <Link to={`/contact/${contact._id}`}>Details</Link>
                </li>
            ))
            }
        </ul >
    )
}
