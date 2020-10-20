import React from 'react';

import '../styles/pages/Login.css';
import logo from '../images/logo.png';


function Login(){
    return(
        <div id="page-login">
            <img src={logo} alt="Conta Simples"/>
            <div className="login">
                <form>               
                <h1 className="texto">CPF:</h1>
                <input id="cpf"/>
                
                <h1 className="texto">SENHA:</h1>
                <input id="senha"/>
                </form>
                <a href="/inicio">
                    <span></span>
                    <span></span>
                    LOGIN
                </a>
                <a href="#">
                    <span></span>
                    <span></span>
                    REGISTRAR-SE
                </a>
                
            </div>
        </div>
    );
}

export default Login;