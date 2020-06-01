import React from 'react';
import { Link } from 'react-router-dom';
/*import api from '../../services/api';*/
import profile from '../../assets/profile.png';
import grupos from '../../assets/grupos.png';


import './styles.css';


export default function Group() {


    /* função asincrona para chamar back quando inicia tela  */
    /*
    useEffect(() => {

        async function loadSpots() {
            

            const user_id = localStorage.getItem('user');
            const response = await api.get('/dashboard', {
                headers: { user_id }
            });
            
            /* chama estado */
         /*   setSpots(response.data);
        }

        /* chama método */
       /* loadSpots();

    }, []); /*[ filter ] para filtros caso seja um componente de pesquisa, mas se estiver vazio, ele vai executar somente uma vez a função*/

    

    return (
        <div className="content_group">
            <div className="painel_user">

                <div className="thumbnail_user">
                        <img src={profile} alt="select img"/>
                </div>

                <div className="itens_user">
                    <div className="my_chats_painel">
                        <Link to="/Dashboard">
                            <p>My Chats</p>
                        </Link>
                    </div>
                    <div className="settings_painel">
                        <Link to="/Dashboard">
                            <p>Settings</p>
                        </Link>
                    </div>
                    <div className="admin_button_painel">
                        <Link to="/Dashboard">
                            <p className="user_item_title">Create a new room</p>
                        </Link>
                    </div>
                    <div className="logout_painel">
                        <Link to="/Dashboard">
                            <p>Logout</p>
                        </Link>
                    </div>
                </div>

            </div>


            <div className="painel_dados">

                <div className="header">

                    <div className="top">
                        <p className="title"><span>#</span>Groups</p>
                        <div><p className="name_user">Lucas Gabriel</p><p className="local_user">PR-BRAZIL</p> </div>
                    </div>

                    
                    
                    <div className="pesquisar">
                        <input 
                            id="pesquisar"
                            placeholder="Pesquisar"
                        />
                    </div>

                </div>

                <div className="data_content">
                    <ul className="list">
                        <li>
                            <Link to="/Group">
                                <div className="grupos">
                                    <div className="image">
                                        <img src={grupos} alt="select img"/>
                                    </div>
                                    <div className="info">
                                        <div><strong><span>#</span> Bora conversar</strong></div>
                                        <p className="desc">grupo criado para fazer amigos, venha e nos conheça
                                        </p>
                                        <p className="qtd"><span>10</span> Pessoas</p>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Group">

                            <div className="grupos">
                                    <div className="image">
                                        <img src={grupos} alt="select img"/>
                                    </div>
                                    <div className="info">
                                        <div><strong><span>#</span> Super Herois</strong></div>
                                        <p className="desc">Grupo guerreiros é formado de muitos guerreiros, venha ser mais um!!
                                        </p>
                                        <p className="qtd">5 Pessoas</p>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Group">
                                <div className="grupos">
                                    <div className="image">
                                        <img src={grupos} alt="select img"/>
                                    </div>
                                    <div className="info">
                                        <div><strong><span>#</span> Bora conversar</strong></div>
                                        <p className="desc">grupo criado para fazer amigos, venha e nos conheça
                                        </p>
                                        <p className="qtd"><span>7</span> Pessoas</p>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Group">
                                <div className="grupos">
                                    <div className="image">
                                        <img src={grupos} alt="select img"/>
                                    </div>
                                    <div className="info">
                                        <div><strong><span>#</span> Bora conversar</strong></div>
                                        <p className="desc">grupo criado para fazer amigos, venha e nos conheça
                                        </p>
                                        <p className="qtd"><span>15</span> Pessoas</p>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Group">

                            <div className="grupos">
                                    <div className="image">
                                        <img src={grupos} alt="select img"/>
                                    </div>
                                    <div className="info">
                                        <div><strong><span>#</span> Grupo guerreiros</strong></div>
                                        <p className="desc">Grupo guerreiros é formado de muitos guerreiros, venha ser mais um!!
                                        </p>
                                        <p className="qtd">6 Pessoas</p>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>

                
            </div>

        </div>
    )
}