import React, { useState } from 'react';
import api from '../../services/api';
import './styles.css';
import { Link } from 'react-router-dom';



export default function Login( { history } ){
    
    
    const [email, setEmail] = useState('');

    async function handleSubmit(event) {
    event.preventDefault();
    /*
    const response = await api.post('/sessions' , {
      email: email
    });

    const { _id } = response.data;

    localStorage.setItem('user', _id);
    */
    history.push('/dashboard');

  }
  


    return (

        <div className="content-login">
            <p>
              Log in
            </p>

            <form onSubmit={handleSubmit}>

            <label htmlFor="email">Email</label>
            <input 
                type="email" 
                id="email" 
                placeholder="Seu email" 
                value={email}
                onChange={event => setEmail(event.target.value)}/>

            <label htmlFor="senha">Senha</label>
            <input 
                type="password" 
                id="senha" 
                placeholder="*****" 
            />

            <button type="submit" className="btn">Entrar</button>
            </form>

            <div className="content-register">

              <p>
                Não tem uma conta ?
              </p>
              <p>
                Registre-se gratuitamente.
              </p>

              <Link to="/Register">
                        <p className="alink-register">Register</p>
              </Link>


            </div>
        </div>
    )
}