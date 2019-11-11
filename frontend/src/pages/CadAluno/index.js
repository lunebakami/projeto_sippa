import React, { useState } from 'react';
import api from '../../services/api';

export default function Login({ history }){
    const [matricula, setMatricula] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    function back(){
        history.push('/admin');
    }

    async function handleSubmit(event){
        event.preventDefault();

        const data = {
            matricula,
            name,
            password,
            typeUser: '1'
        }

        const response = await api.post('/user',data);
        
        console.log(response);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="matricula">Matricula:</label>
                <input 
                    type="text" 
                    id="matricula" 
                    placeholder="Insira a matricula do aluno"
                    value={matricula}
                    onChange={ event => setMatricula(event.target.value) }
                />
                <br/>

                <label htmlFor="name">Nome:</label>
                <input 
                    type="text" 
                    id="name" 
                    placeholder="Insira o nome do aluno"
                    value={name}
                    onChange={ event => setName(event.target.value) }
                />
                <br/>

                <label htmlFor="password">Senha:</label>
                <input 
                    type="password" 
                    id="password" 
                    placeholder="insira a senha do aluno"
                    value={password}
                    onChange={ event => setPassword(event.target.value) }
                />
                <br/>

                <button className='btn' type='submit'>Entrar</button>
                <button className='backBtn' onClick={back}>Voltar</button>
            </form>
        </>
    )
}