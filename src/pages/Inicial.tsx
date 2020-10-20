import React from "react";
import { letterFrequency } from '@visx/mock-data';
import { Group } from '@visx/group';
import { Bar } from '@visx/shape';
import Sidebar from "../components/Sidebar";
import { scaleLinear, scaleBand } from '@visx/scale';

import '../styles/pages/Inicial.css';




export default function Orphanage() {
    return(
        <div id="inicio">
            <Sidebar />
            <main>
                <div id="primei">
                <div id="infor">
                    <h1 className="text">NOME:</h1>
                    <h2 className="res">Guilherme Luiz Maia</h2>
                    <h1 className="text">CPF:</h1>
                    <h2 className="res">451.455.578-89</h2>
                    <h1 className="text">TELEFONE:</h1>
                    <h2 className="res">(17)99999-9999</h2>
                    <h1 className="text">CARTÃO:</h1>
                    <h2 className="res">1111 1111 1111 1111</h2>
                </div>
                <div id="saldo">
                    <h1 className="text">SALDO</h1>
                    <h2 className="res">R$ 2.000,00</h2>
                </div>
                </div>
                <div id="graph"></div>
            </main>
        </div>
    );
}
