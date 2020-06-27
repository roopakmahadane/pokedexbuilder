import React, {useState, useEffect} from 'react';
import data from '../pokedex.json'

import '../style/PokemonDetail.css';
import Header from '../component/Header'

const PokemonDetail = (props) => {
    const [pokeDetail, setPokeDetail] = useState({})
    const [name, setName] = useState("")
    const [type, setType] = useState([])
    const [attack, setAttack] = useState(0);
    const [defense, setDefense] = useState(0);
    const [edit, setEdit] = useState(false);
       
    useEffect(() => {
        const pokemonDetails = data.filter((poke) => {
            return poke.id == props.match.params.id
          }) 
          
          const p =pokemonDetails[0];

          setPokeDetail(p)
          setName(p?.name?.english)
          setType(p?.type)
          setAttack(p?.base?.Attack)
          setDefense(p?.base?.Defense)

    },[])

    useEffect(()=> {
        console.log('state changed', attack)
    },[pokeDetail])

    const handleEdit = () => {
        setEdit(!edit)
        let newArray = [...type]
        let updatedArray = newArray.filter(el => {
            return el
        })
        setType(updatedArray)
    }
    const handleNameChange = (e) => {
        e.preventDefault();
        setName(e.target.value)
    }
    const handleTypeChange = i => e => {
        e.preventDefault();
    let newArray = [...type]
    newArray[i] = e.target.value
        setType(newArray )
    }
    const handleAttackLevel = (e) => {
        e.preventDefault();
        setAttack(e.target.value)
    }
    const handleDefenseLevel = (e) => {
        e.preventDefault();
        setDefense(e.target.value)
    }
    const handleAddType = (e) => {
        e.preventDefault();
        let newArray = [...type]
        newArray.push("");
        setType(newArray)
    }
  
    return (
        <div>
         <Header />
        <div className="container">
       
        <div className="card">
        <form>
            <div className="form-group">
                <label>Name</label>
                <input onChange={handleNameChange} className="form-control" value={name} type="text" readOnly={!edit}/>    
            </div>
            <div className="form-group">
                <label>Type</label>
                {type.map((type,i) => {
                  return (
                    <li className="list-group-item" key={i}>
                    <input  onChange={handleTypeChange(i)} className="form-control" value={type} readOnly={!edit}/>
                    </li>
                  )  
                   
                })}
                <button className="btn btn-primary" disabled={!edit} onClick={handleAddType}>Add Type</button>
            </div>
            <div className="form-group">
                <label >Attack Level</label>
                <input onChange={handleAttackLevel} className="form-control" value={attack} type="number" readOnly={!edit}/> 
            </div>
            <div className="form-group">
                <label >Defence Level</label>
                <input onChange={handleDefenseLevel} className="form-control" value={defense} type="number" readOnly={!edit}/> 
            </div>
        </form>
        </div>
        <button onClick={handleEdit} className="btn btn-primary">{edit? "Update" : "Edit"}</button>
      </div>
      </div>
    )
}
export default PokemonDetail