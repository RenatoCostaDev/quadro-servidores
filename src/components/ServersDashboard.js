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
                    serversArray.sort((a, b) => a.id - b.id).map(({id, appOne, appTwo, color},index)=> {
                        return (
                            <div key={id} style={{backgroundColor:color}} className='server'>
                                <div key={timeInNumber()} style={{backgroundColor:appOne.color}} className='appsdashboard'>
                                    <h4>{appOne.name}</h4>
                                    {appOne.createdAt && <h4 className='createdtime'>Added  {timeInNumber() - appOne.createdAt} minutes ago</h4>}
                                </div>
                                <div key={timeInNumber() + 1} style={{backgroundColor:appTwo.color}} className='appsdashboard'>
                                    <h4>{appTwo.name}</h4>
                                    {appTwo.createdAt && <h4 className='createdtime'>Added  {timeInNumber() - appTwo.createdAt} minutes ago</h4>}
                                </div>
                            </div> 
                        )                            
                    })
                }
            </div>
        </>
    )
}

export default ServersDashboard;