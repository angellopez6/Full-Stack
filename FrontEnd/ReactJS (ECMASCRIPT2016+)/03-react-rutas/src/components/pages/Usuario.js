import React from 'react'
import { useParams } from 'react-router-dom';

const Usuario = () => {
    // let params = useParams();
    // console.log(params)
    let {username} = useParams();
    return (
        <div>
            <h3>Perfíl del Usuario</h3>
            <p>Nombre del usuario <b>{username}</b> </p>
        </div>
    )
}

export default Usuario;
