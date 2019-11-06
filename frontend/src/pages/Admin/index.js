import React, { useState } from 'react';
import api from '../../services/api';

export default function Admin({ history }){
    const user = localStorage.getItem('user');

    function logout(event){
        event.preventDefault();

        localStorage.removeItem('user');
        history.push('/');
    }

    return (
        <>  Admin
            {user}

            <button className='btn' onClick={logout}>Logout</button>
        </>
    )
}