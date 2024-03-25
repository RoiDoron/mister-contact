const { Link } = ReactRouterDOM
import { ContactPreview } from './ContactPreview.jsx'
import { ContactEdit } from "./ContactEdit.jsx"


export function ContactList({contacts}){

    if (!contacts) return <div>Loading...</div>

    return (
        <ul className="bug-list">
            {contacts.map((contact) => (
                <li className="bug-preview" key={contact._id}>
                    <ContactPreview contact={contact} />
                    <div>
                        {/* <button onClick={() => onRemoveTodo(todo._id)}>x</button> */}
                        <Link to={`/edit/${contact._id}`}><button onClick={() => onEditContact(contact)}>Edit contact</button></Link>
                    </div>
                    <Link to={`/contact/${contact._id}`}>Details</Link>
                </li>
            ))
            }
        </ul >
    )
}