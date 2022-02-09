import React, { useContext } from 'react';
import AppContext from '../context/AppContext';


const ServersBtn = () => {
    const { handleNewServer, handleDestroyServer} = useContext(AppContext)
    return (
        <div id='clustersbtn'>
            <div>
                <button onClick={handleNewServer} className='addServer'>
                    +
                </button>
                <h4>Novo Servidor</h4>
            </div>
            <div>
                <button onClick={handleDestroyServer} className='minusServer'>
                    -
                </button>
                <h4>Destruir</h4>
            </div>
        </div>
    )
}

export default ServersBtn;