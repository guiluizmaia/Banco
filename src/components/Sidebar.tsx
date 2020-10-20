import React from 'react';
import logo from '../images/logo.png';

import '../styles/components/sidebar.css';

export default function Sidebar(){
    return(
        <div>
        <aside className="app-sidebar">
        <img src={logo} alt="Conta Simples" />
        <a href="#">
            <span></span>
            <span></span>
            HOME
        </a>
        <a href="#">
            <span></span>
            <span></span>
            EXTRATO
        </a>
        <a href="#">
            <span></span>
            <span></span>
            TRANSAÇÕES
        </a>
        </aside>
        </div>
      

    );
}