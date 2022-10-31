import './Login.css'

import { useState, useEffect } from 'react'
import { useAuthentication } from '../../hooks/useAuthentication'
import { Link } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

  const { login, error: authError, loading } = useAuthentication();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");

        const user = {
          email,
          password,
        };
    
        const res = await login(user);
    
        console.log(res);
    }

    useEffect(() => {
        console.log(authError);
        if (authError) {
          setError(authError);
        }
      }, [authError]);
    
    return (
        <div id='login'>
            <h2>Entrar</h2>
            <span className='linha-laranja'>l</span>
            <p>Faça login para prosseguir</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>E-mail:</span>
                    <input 
                     type="email"
                     name='email'
                     required
                     placeholder='E-mail do usuário'
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}/>
                </label>
                <label>
                    <span>Senha:</span>
                    <input 
                     type="password" 
                     name="password" 
                     required
                     placeholder="Insira a senha"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}/>
                </label>
                {!loading && <button className='btn btn-login'>Entrar</button>}
                {loading && (
                    <button className='btn btn-login' disabled>
                        Aguarde...
                    </button> 
                )}
                {error && <p className="error">{error}</p>}
            </form>
            <p>Não tem uma conta? <Link to='/register' className='btn btn-register'>Cadastre-se</Link></p>
        </div>
    )
}

export default Login