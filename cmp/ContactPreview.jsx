import { contactService } from "../services/contact.service.js";

export function ContactPreview({ contact }) {

    return <article>
        <h4>{contact.title}</h4>
        <h1>📱</h1>
        <p>Phone number: <span>{contact.number}</span></p>
    </article>
}