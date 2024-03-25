const { Link } = ReactRouterDOM
import { ContactPreview } from './ContactPreview.jsx'


export function ContactList({ contacts, onRemoveContact }) {

    if (!contacts) return <div>Loading...</div>

    return (
        <ul className="bug-list animate__animated animate__backInLeft">
            {contacts.map((contact) => (
                <li className="bug-preview" key={contact._id}>
                    <button className='x-btn fa-solid fa-trash' onClick={() => onRemoveContact(contact._id)}></button>
                    <ContactPreview contact={contact} />
                    <div className='link-container'>
                    <Link to={`/edit/${contact._id}`}><button>Edit contact</button></Link>
                    <Link to={`/contact/${contact._id}`}><button>Details</button></Link>
                    </div>
                </li>
            ))
            }
        </ul >
    )
}


