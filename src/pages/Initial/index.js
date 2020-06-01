import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';



export default function Initial(){
    


    return (

        <div className="content-item">
            <h1>
            <strong>Bem vindo ao Team Micro</strong>
            </h1>
            <p>
                Vamos começar ?
            </p>

            <div className="plano">
                <div className="plano-item item-free">
                    <p>Venha compartilhar com todos, não precisamos estar sozinhos nesse momento.</p>
                    <Link to="/Login">
                        <button className="btn-plano-free">FREE</button>
                    </Link>                
                </div>

                <div className="plano-item item-pay">
                    <p>Quer algo mais privado e com profissionais especializados? entre e converse com nossos psicologos</p>
                    <Link to="/Login">
                        <button className="btn-plano-pay">VEJA OS PREÇOS</button>
                    </Link>                
                </div>
            </div>
        </div>
    )
}