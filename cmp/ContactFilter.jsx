const { useState, useEffect, useRef } = React

import { utilService } from "../services/util.service.js"

export function ContactFilter({ filterBy, onSetFilter }) {

    const [filterByToEdit, setFilterByToEdit] = useState({ ...filterBy })
    onSetFilter = useRef(utilService.debounce(onSetFilter, 500))
   
    useEffect(() => {
        onSetFilter.current(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        let { value, name: field, type } = target

        value = type === 'number' ? +value : value
        setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }))
    }

    return (
        <form >

            <label htmlFor="title">Contact:</label>
            <input type="text"
                id="title"
                name="txt"
                placeholder="By Contact name..."
                value={filterByToEdit.txt}
                onChange={handleChange}
            />

            <label htmlFor="pageIdx">Page:</label>
            <input type="number"
                id="pageIdx"
                name="pageIdx"
                placeholder="0"
                value={filterBy.pageIdx}
                onChange={handleChange}
            />

        </form>
    )
}