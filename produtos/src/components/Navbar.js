import './Navbar.css'

// Icons
import { FaBars } from 'react-icons/fa'

// Context
import { useAuthValue } from '../context/AuthContext'

// Hooks
import { NavLink } from 'react-router-dom'
import { useAuthentication } from '../hooks/useAuthentication'

const NavigationBar = () => {

    const { logout } = useAuthentication();
    const { user } = useAuthValue();

    // Navbar Responsiva
    const responsiveNavbar = () => {
        let nav = document.getElementById('responsiveNav')
        
        if(nav.className === 'topnav') {
            nav.className += ' responsive'
        } else {
            nav.className = 'topnav'
        }
    }

    return (
            <nav id='navbar'>
                <NavLink to='/' className='logo'>React<span>Store</span></NavLink>
                <div className='topnav' id='responsiveNav'>
                    <NavLink 
                     to='/' 
                     end 
                     className={({isActive}) => (isActive ? 'active navlink' : 'navlink')}
                    >
                        Home
                    </NavLink>
                    <NavLink 
                     to='/products' 
                     className={({isActive}) => (isActive ? 'active navlink' : 'navlink')}
                    >
                        Produtos
                    </NavLink>
                    <NavLink 
                     to='/about' 
                     className={({isActive}) => (isActive ? 'active navlink' : 'navlink')}
                    >
                        Sobre
                    </NavLink>
                    <NavLink 
                     to='/contact' 
                     className={({isActive}) => (isActive ? 'active navlink' : 'navlink')}
                    >
                        Contato
                    </NavLink>
                    {!user && (
                        <>
                         <NavLink 
                          to='/login' 
                          className={({isActive}) => (isActive ? 'active navlink' : 'navlink')}>
                             Entrar
                         </NavLink>
                         <NavLink 
                          to='/register' 
                          className={({isActive}) => (isActive ? 'active navlink' : 'navlink')}>
                             Cadastre-se
                         </NavLink>
                        </>
                    )}
                    {user && (
                        <>
                            <NavLink 
                                to='/cart' 
                                className={({isActive}) => (isActive ? 'active navlink' : 'navlink')}>
                                Carrinho
                            </NavLink>
                            <button 
                                className='btn-logout'
                                onClick={logout}>
                                Sair
                            </button>
                        </>
                    )}
                    <button className='hamburguer-icon' onClick={responsiveNavbar}>
                        <FaBars/>
                    </button>
                </div>
            </nav>
            
    )
}

export default NavigationBar