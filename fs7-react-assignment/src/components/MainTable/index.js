import React from 'react'
import Table from 'react-bootstrap/Table'


import TableHeader from '../TableHeader'
import TableRow from '../TableRow'

export default function MainTable ({countries}) {
    //console.log(countries)
    return (
        // add child components using html table structure
        <Table>
            <TableHeader />
                <tbody>
                    {countries.map((country) => (
                            <TableRow 
                            key={country.name}
                            flagUrl={country.flag} 
                            name={country.name} 
                            population={country.population} 
                            languages={country.languages} 
                            region={country.region} />
                    ))}
                    
                </tbody>
                            
                </Table>
        
    )
}
