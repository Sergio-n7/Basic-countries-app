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
                    <TableRow />
                </tbody>
                            
                </Table>
        
    )
}
