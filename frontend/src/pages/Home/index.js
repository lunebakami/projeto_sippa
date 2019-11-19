import React, { useEffect, useState } from 'react';
import api from '../../services/api';

export default function Home({ history }){
    const user = localStorage.getItem('user');
    const name = localStorage.getItem('name');
    const [subjects, setSubjects] = useState([]);

    function logout(event){
        event.preventDefault();

        localStorage.removeItem('user');
        history.push('/');
    }

    useEffect(() => {
        async function loadSubjects() {
          const response = await api.get('/subjects');
    
          console.log(response);
          setSubjects(response.data);
        }
    
        loadSubjects();
      }, []);

    return (
        <>  Bem Vindo {`${name}`}
            <ul className="subjects">
                {subjects.map(subject => (
                <li key={subject._id}>
                    <span><strong>{subject.name}</strong> - {subject.cod}</span>
                </li>
                ))}
            </ul>
            
            <br/>
            <button className='btn' onClick={logout}>Logout</button>
        </>
    )
}