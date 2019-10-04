import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../App.css'


class Header extends Component {
    render(){
        return(
        <header>
           <ul className="nav-bar">
               <li><Link to='/'>Home</Link></li>
               <li><Link to='/browse'>Browse</Link></li>
               <li><Link to='/search'>Search</Link></li>

           </ul>
        </header>
        )
    }
}



export default Header