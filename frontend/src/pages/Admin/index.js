import React from 'react';
import { Link } from 'react-router-dom';

export default function Admin({ history }){

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
                <br/>
                <Link to="/new_disc">
                    <button className="btn">Cadastrar Disciplina</button>
                </Link>
                <br/>
                <Link to="">
                    <button className="btn">Matricular Aluno</button>
                </Link>
                <br/>
                
                <button className='btn' onClick={logout}>Logout</button>
            </div>
        </>
    )
}