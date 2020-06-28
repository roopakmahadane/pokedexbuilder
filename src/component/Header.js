import React from 'react'
import {Link} from  'react-router-dom'
import "../style/Header.css"


const Layout = () => {
    return (
        <div className="header">
          <nav className="navbar">
            <Link className="navbar-brand" to="/">
            Pokédex 
            </Link>
            </nav>
            <nav className="navbar">
            <Link className="navbar-brand" to="/new">
                Add new Pokemon
            </Link>
            </nav>
        </div>
        
    )
}

export default Layout;