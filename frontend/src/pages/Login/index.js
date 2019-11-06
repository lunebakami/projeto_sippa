import React, { useState } from 'react';
import api from '../../services/api';

export default function Login({ history }){
    const [matricula, setMatricula] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(event){
        event.preventDefault();

        const fData = new FormData();
        console.log(matricula, password)
        
        fData.append('matricula', matricula);
        fData.append('password', password);

        const response = await api.get('/user', fData);
        console.log(response)
        const user = response.data.user;

        if(user){
            if(user.password === password){
                localStorage.setItem('user_id',user._id);
                if(user.typeUser === 1){
                    history.push('/home')
                }else if(user.typeUser === 2){
                    //
                }else {
                    history.push('/Admin')
                }
            }else{
                console.log(user)
            }
        }else{
            console.log('nao existe')
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="matricula">Matricula:</label>
                <input 
                    type="text" 
                    id="matricula" 
                    placeholder="Insira sua matricula"
                    value={matricula}
                    onChange={ event => setMatricula(event.target.value) }
                />
                <br/>

                <label htmlFor="password">Senha:</label>
                <input 
                    type="password" 
                    id="password" 
                    placeholder="insira sua senha"
                    value={password}
                    onChange={ event => setPassword(event.target.value) }
                />
                <br/>

                <button className='btn' type='submit'>Entrar</button>
            </form>
        </>
    )
}