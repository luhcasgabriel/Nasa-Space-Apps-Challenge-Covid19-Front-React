import React from 'react';
import { Link } from 'react-router-dom';
/*import api from '../../services/api';*/
import profile from '../../assets/profile.png';


import './styles.css';


export default function DashBoard() {


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
        <div className="content_dashboard">
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
                        <p className="title"><span>#</span>Dashboard</p>
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
                            <Link to="/group">
                                <div><strong><span>#</span> DEPRESSÃO</strong></div>
                                <p>it is a psychiatric disease that produces a change in mood and limits the person's ability to affect. 
                                This disease can occur in all stages of human life: childhood, adolescence, maturity and old age, and the symptoms may 
                                vary according to the case
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/group">

                                <div><strong><span>#</span> TANATOFOBIA</strong></div>
                                <p>Thanatophobia or Necrophobia is the excessive fear of death itself and / or other people who are 
                                part of the individual's social network
                                </p>
                            </Link>
                        </li>
                    </ul>
                </div>

                
            </div>

        </div>
    )
}