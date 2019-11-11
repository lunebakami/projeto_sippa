import React from 'react';

export default function Home({ history }){
    const user = localStorage.getItem('user');

    function logout(event){
        event.preventDefault();

        localStorage.removeItem('user');
        history.push('/');
    }

    return (
        <>  Normal
            {user}

            <button className='btn' onClick={logout}>Logout</button>
        </>
    )
}