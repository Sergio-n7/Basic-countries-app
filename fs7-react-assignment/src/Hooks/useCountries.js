//import React from 'react'
import { useState, useEffect } from 'react'

// this is  custom Hook, I tried other sintax to fetch but didn't work
export default function useCountries() {

const [countries, setCountries] = useState ([])
const [ error, setError] = useState (null)

async function fetchData() {
    try {
        const response = await fetch('https://restcountries.eu/rest/v2/all');
        const data = await response.json();
        setCountries(data)
        } catch (error) {
            setError(error)
        }
}
useEffect(()=> {
    fetchData();
}, [])

    return [error, countries];
}