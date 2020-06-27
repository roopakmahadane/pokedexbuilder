
import React from 'react'

import Pokemon from './Pokemon/Pokemon'
import data from '../../pokedex.json'
import {Link} from "react-router-dom"


const Layout = () => {

   
    return (
        <div className="container">
            <h3>Pokemon List</h3>
            <ul className="list-group list-group-flush">
                {data.map(pokemon => {
                   return (
                    <Link key={pokemon.id} to={`/pokemon/${pokemon.id}`}>
                         <li className="list-group-item" ><Pokemon name={pokemon.name.english}/></li>
                    </Link>    
                   )
                })}
            </ul>
        </div>
    )
}

export default Layout;