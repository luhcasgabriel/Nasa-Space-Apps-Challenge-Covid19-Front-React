import React, { useState, useMemo  } from 'react';
/*import api from '../../services/api'*/
import cameraIcon from '../../assets/camera.svg';
import { Link } from 'react-router-dom';


import './styles.css'


export default function Register( { history } ){

    const [name, setName] = useState('');
    const [thumbnail, setThumbnail] = useState(null);
    const [username, setUsername] = useState('');


    const preview = useMemo( () => {
        return thumbnail ? URL.createObjectURL(thumbnail) : null; /* retornando o conteudo da preview, se existir algo dentro da thumbnail executa URL(variavel glocal do html) .createObjectURL(vai criar um url para uma varialve temporaria ) */
    }, [thumbnail]) /* [thumbnail] -> variael que está escutando as mudanças  */

    

    async function handleSubmit(event){

        /* previne que vah para outra padina sem chegar no history no final da função  */
        event.preventDefault();

        const data = new FormData();

        data.append('name', name);
        data.append('username', username);
        data.append('thumbnail', thumbnail);


        /*sem response */
        /*await api.post('/spots', data, {
            headers: { user_id }
        });
        */

        history.push('/dashboard');

    }


    return (
        <div className="content-register">
            <form onSubmit={handleSubmit}>

                <div className="right-item">
                    <label htmlFor="name">NOME COMPLETO</label>
                    <input 
                        id="name"
                        placeholder="Seu nome completo"
                        value={name}
                        onChange={event => setName(event.target.value)}
                    />

                    <label htmlFor="username">USERNAME</label>
                    <input 
                        id="username"
                        placeholder="Coloque seu username"
                        value={username}
                        onChange={event => setUsername(event.target.value)}
                    />  

                    <div className="selects selects-pais">
                        <label htmlFor="pais">PAIS</label>
                        <select name="pais" id="pais">
                            <option value="Brasil">BR</option>
                            <option value="Estados unidos">EUA</option>
                            <option value="Japão">JP</option>
                        </select>
                    </div>
                    <div className="selects selects-estados">
                        <label htmlFor="price">Estados</label>
                        <select name="estados" id="estados">
                            <option value="PR">Paraná</option>
                            <option value="SP">São Paulo</option>
                            <option value="MG">Minas</option>
                            <option value="AC">Acre</option>
                        </select>
                    </div>
                </div>
                <div className="left-item">
                    <label 
                        id="thumbnail" 
                        style={{backgroundImage: `url(${preview})`}}
                        className={thumbnail ? 'has-thumbnail' : ''}
                    >
                        <input 
                            type="file" 
                            onChange={event => setThumbnail(event.target.files[0])}
                        />
                        <img src={cameraIcon} alt="select img"/>
                    </label>
                </div>

                <div className="perguntas">
                    <div>
                        <p>Are you having a problem right now and would like to someone?</p>
                        <input type="checkbox" className="check"/>
                    </div>
                    <div>
                        <p>Or have you been through something and would like to help someone?</p>
                        <input type="checkbox" className="check"/>
                    </div>

                </div>
                <Link to="/Dashboard">
                    <button type="submit" className="btn">Cadastrar</button>
                </Link>

            </form>

            <Link to="/Login">
                        <p className="alink-register">Já possuo conta</p>
            </Link>
        </div>
    )
}