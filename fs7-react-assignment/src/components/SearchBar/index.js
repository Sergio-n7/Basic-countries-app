import React from 'react'
import { Button } from 'react-bootstrap'
import './input.css'




export default function SearchBar() {
    return (
        <div>
            <input className='input' type= 'text'  name= 'search' placeholder= 'Search a counntry...' />
            <Button className='button' as="input" type="submit" value="Go" />{' '}
            
        </div>
    )
}
