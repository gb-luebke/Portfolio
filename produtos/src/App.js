// CSS
import './App.css';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

// Context
import { AuthProvider } from './context/AuthContext'
import { CartContextProvider } from './context/CartContext';

// Hooks
import { useState, useEffect } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { useAuthentication } from './hooks/useAuthentication';

// React router
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Pages
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Notfound from './pages/Notfound/Notfound'
import Contact from './pages/contact/Contact'
import Cart from './pages/Cart/Cart'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Products from './pages/Products/Products'
import Search from './pages/Search/Search'
import Product from './pages/Product/Product'

function App() {

  // User Authentication
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <p>Carregando...</p>;
  }


  return (
    <div id="app">
      <AuthProvider value={{ user }}>
       <CartContextProvider>
        <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route 
              path='/login' 
              element={!user ? <Login/> : <Navigate to='/'/>}
              />
              <Route 
              path='/register' 
              element={!user ? <Register/> : <Navigate to='/'/>}
              />
              <Route path='/about' element={<About/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route 
              path='/cart' 
              element={user ? <Cart/> : <Navigate to='/login'/>}
              />
              <Route path='/products' element={<Products/>}/>
              <Route path='/products/:id' element={user ? <Product/> : <Navigate to='/login'/>}/>
              <Route path='/search' element={<Search/>}/>
              <Route path='/company' element={<Navigate to='/about'/>}/>
              <Route path="*" element={<Notfound/>}/>
            </Routes>
            <Footer/>
          </BrowserRouter>
       </CartContextProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
