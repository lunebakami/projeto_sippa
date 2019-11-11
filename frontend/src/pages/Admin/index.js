import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

export default function Admin({ history }){
    const user = localStorage.getItem('user');

    function logout(event){
        event.preventDefault();

        localStorage.removeItem('user');
        history.push('/');
    }

    return (
        <>
            <div>
                Admin<br/>

                <Link to="/new_aluno">
                    <button className="btn">Cadastrar Aluno</button>
                </Link>
                <Link to="/new_aluno">
                    <button className="btn">Cadastrar Disciplina</button>
                </Link>
                <Link to="/new_aluno">
                    <button className="btn">Matricular Aluno</button>
                </Link>
                
                <button className='btn' onClick={logout}>Logout</button>
            </div>
        </>
    )
}