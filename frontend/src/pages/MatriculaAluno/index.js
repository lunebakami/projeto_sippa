import React, { useState } from 'react';
import api from '../../services/api';

export default function MatriculaaAluno({ history }){
    const [matricula, setMatricula] = useState('');

    function back(){
        history.push('/admin');
    }

    async function handleSubmit(event){
        event.preventDefault();
        
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

                <button className='btn' type='submit'>Matricular</button>
                <button className='backBtn' onClick={back}>Voltar</button>
            </form>
        </>
    )
}