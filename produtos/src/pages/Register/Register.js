import './Register.css'

import { useEffect, useState } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";
import { Link } from 'react-router-dom'

const Register = () => {

    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
  
    const { createUser, error: authError, loading } = useAuthentication();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");
    
        const user = {
          displayName,
          email,
          password,
        };
    
        if (password !== confirmPassword) {
          setError("As senhas precisam ser iguais.");
          return;
        }
    
        const res = await createUser(user);
    
        console.log(res);
    }

    useEffect(() => {
        if (authError) {
          setError(authError);
        }
      }, [authError]);    

    return (
        <div id='register'>
            <h2>Cadastre-se</h2>
            <span className='linha-laranja'>Linha lar</span>
            <p>Cadastre-se para desfrutar de todas as funcionalidades do sistema</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Nome:</span>
                    <input 
                     type="text" 
                     name="name" 
                     placeholder='Nome do usuário'
                     required 
                     onChange={(e) => setDisplayName(e.target.value)} 
                     value={displayName}/>
                </label>
                <label>
                    <span>E-mail:</span>
                    <input 
                     type="email" 
                     name="email" 
                     placeholder = 'E-mail do usuário'
                     required
                     onChange={(e) => setEmail(e.target.value)}
                     value={email}/>
                </label>
                <label>
                    <span>Senha:</span>
                    <input 
                     type="password" 
                     name="password" 
                     required
                     placeholder='Insira sua senha'
                     onChange={(e) => setPassword(e.target.value)}
                     value={password}/>
                </label>
                <label>
                    <span>Confirme sua senha:</span>
                    <input 
                     type="password" 
                     name="confirmPassword" 
                     required
                     placeholder='Confirme sua senha'
                     onChange={(e) => setConfirmPassword(e.target.value)}
                     value={confirmPassword}/>
                </label>
                {!loading && <button className='btn btn-login'>Cadastrar</button>}
                {loading && (
                    <button className="btn-login" disabled>
                        Aguarde...
                    </button>
                    )}
                {error && <p className='error'>{error}</p>}
            </form>
            <p>Já possui uma conta? <Link to='/login' className='btn btn-register'>Entrar</Link></p>
        </div>
    )
}

export default Register