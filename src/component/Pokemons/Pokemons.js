
import React,{useState, useEffect} from 'react'

import Pokemon from './Pokemon/Pokemon'
import data from '../../pokedex.json'
import {Link} from "react-router-dom"


const Layout = () => {

   const [pokeInfo, setPokeInfo] = useState([]);
   const [inputVal, setInputVal] = useState("");
   const [filteredList, setFilteredList] = useState([])


   useEffect(() => {
       if(!data)return
    setPokeInfo(data)
    setFilteredList(data)
   },[])

 


   useEffect(() => {
       
   const findMatch = (wordToMatch, pokemons) => {
    return pokeInfo.filter(poke => {
        const regex = new RegExp(inputVal, 'gi');
        return poke.name.english.match(regex)
    })
}
    if(inputVal !== ''){
        const matchArray = findMatch(inputVal, data)
        setFilteredList(matchArray)
    }else{
        setFilteredList(data)
    }
    
   }, [inputVal,pokeInfo])


   const inputChangeHandler = (e) => {
       setInputVal(e.target.value)
   }

 
    return (
        <div className="container">
            <h3>Pokémon List</h3>
            <div className="input-group mb-3">
                <input  className="form-control" type="text" placeholder="Search Pokémon" value={inputVal} onChange={inputChangeHandler}/>
            </div>
            <ul className="list-group list-group-flush">
                {filteredList.map(pokemon => {
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