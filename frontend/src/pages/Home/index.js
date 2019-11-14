import React from 'react';
import api from '../../services/api';

export default function Home({ history }){
    const user = localStorage.getItem('user');
    const name = localStorage.getItem('name');

    function logout(event){
        event.preventDefault();

        localStorage.removeItem('user');
        history.push('/');
    }

    return (
        <>  Bem Vindo {`${name}`}

        
            <br/>
            <button className='btn' onClick={logout}>Logout</button>
        </>
    )
}