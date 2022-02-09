import React, { useContext } from 'react';
import { timeInNumber } from '../utils'
import AppContext from '../context/AppContext';

const ServersDashboard = () => {
    const { serversArray } = useContext(AppContext)
    
    return (
        <>
           <header className='header'>
                <h4>Quadro de Servidores</h4>
            </header>
            <div id='serverDashboard'>
                {
                    serversArray.sort((a, b) => a.id - b.id).map(({id, app, color},index)=> {
                        return (
                            <div key={id} style={{backgroundColor:color}} className='server'>
                                {app.map(({name, color, createdAt}, index) => {
                                    return (                                        
                                        <div key={index} style={{backgroundColor:color}} className='appsdashboard'>
                                            <h4>{name}</h4>
                                            <h4 className='createdtime'>Added {timeInNumber() - createdAt} minutes ago</h4>
                                        </div>
                                    )                            
                                })}
                            </div> 
                        )                            
                    })
                }
            </div>
        </>
    )
}

export default ServersDashboard;