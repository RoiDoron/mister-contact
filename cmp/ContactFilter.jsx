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
        <form>
            <label className="search-focus" htmlFor="title"><span className="fa-solid fa-magnifying-glass"></span></label>
            <input type="text"
                id="title"
                name="txt"
                placeholder="Search by Contact name..."
                value={filterByToEdit.txt}
                onChange={handleChange}
                className="search-input"
            />
        </form>
    )
}