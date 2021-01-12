import React from 'react'
import { Form, FormControl } from 'react-bootstrap'

const SearchBox = ({search, setSearch}) => {
    return (
        <Form inline>
            <FormControl 
            type="text" 
            placeholder="Search" 
            className="mr-sm-2"
            value={search}
            onChange={(e) => setSearch(e.target.value)} 
            />
        </Form>
    )
}

export default SearchBox
