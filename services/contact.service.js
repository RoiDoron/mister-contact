import { storageService } from "./async-storage.service.js";
import { userService } from "./user.service.js";
import { utilService } from "./util.service.js";

const PAGE_SIZE = 5
const STORAGE_KEY = 'contactDB'

_createContacts()

export const contactService = {
    query,
    getById,
    save,
    remove,
    getEmptyContact,
    getDefaultFilter
}

function getEmptyContact() {
    return {
        title: "",
        number: ""
    }
}

function query(filterBy = { txt: '', isDone: 'all', pageIdx: 0}) {
    return storageService.query(STORAGE_KEY)
    .then(contacts => {
        if (filterBy.txt) {
            const regex = new RegExp(filterBy.txt, 'i')
            contacts = contacts.filter(contact => regex.test(contact.title))
        }
      
        if (filterBy.pageIdx !== undefined) {
            const startIdx = filterBy.pageIdx * PAGE_SIZE
            contacts = contacts.slice(startIdx, PAGE_SIZE + startIdx)
        }
        return contacts
    })
}

function getById(contactId) {
    return storageService.get(STORAGE_KEY, contactId)
}

function remove(contactId) {
    return storageService.remove(STORAGE_KEY, contactId)
}

function save(contact) {
    if (contact._id) {
        return storageService.put(STORAGE_KEY, contact)
    } else {
        return storageService.post(STORAGE_KEY, contact)
    }
}

function _createContacts() {
    let contacts = utilService.loadFromStorage(STORAGE_KEY)
    if (!contacts || !contacts.length) {
        contacts = [
            {
                title: "Yahav",
                number: "0523843521",
                _id: "1NF1N1T3"
            },
            {
                title: "Roi",
                number: "0523843521",
                _id: "K3YB0RD"
            },
            {
                title: "Karin",
                number: "0533843521",
                _id: "C0FF33"
            },
            {
                title: "Daniel",
                number: "0503843621",
                _id: "G0053"
            }
        ]
        utilService.saveToStorage(STORAGE_KEY, contacts)
    }
}

function getDefaultFilter() {
    return { txt: '', isDone: 'all', pageIdx: 0}
}

