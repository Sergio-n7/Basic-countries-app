import React from 'react'
import Flag from '../Flag'
export default function TableRow () {
    return (
        <tr>
            <td>
                <Flag />
            </td>
            <td>Name</td>
            <td>Population</td>
            <td>Languages</td>
            <td>Region</td>
        </tr>
    )
}
