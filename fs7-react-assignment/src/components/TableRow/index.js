import React from 'react'
import Flag from '../Flag'


export default function TableRow ({flagUrl, name, population, languages, region}) {
    // need to pass the data parend to child and grandchild
    //prettier is not working 
    return (
        <tr>
            <td>
                <Flag  flagUrl={flagUrl} />
            </td>
            <td>{name}</td>
            <td>{population}</td>
            <td>{languages.map((lang) => (
                //map languages to get into the object giving another unic key
            <li key={lang.name}>{lang.name}</li>
            ))}
            </td>
            <td>{region}</td>
        </tr>
    )
}
