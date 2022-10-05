import './Navbar.css'

import { NavLink } from 'react-router-dom'

const Navbar = ({ retry }) => {

    return (
        <div id='navbar'>
            <NavLink to='/' className='btn btn-inicio' onClick={retry}>Início</NavLink>
        </div>
    )
}

export default Navbar