import React, { useContext } from 'react';
import AppContext from '../context/AppContext';


const AppsBtn = () => {
const { appsObj, handleNewApp, handleKillApp} = useContext(AppContext)

    return (
        <div id='appsBtns'>  
            <div id='headerAppsBtn'>
                <h4>
                    Apps Disponíveis
                </h4>
            </div>
            <ul id='appslist'>
            {
                appsObj.map(({id, name, color, qtde}) => {
                    return (
                        <li key={id}>
                            <span className='namesApp'>{name}</span>
                            <span className='qtde'>{qtde}</span>
                            <button onClick={()=>handleKillApp(name)} className='minus'>-</button>
                            <button onClick={()=>handleNewApp(name, color)} style={{backgroundColor:color}} className='add'>+</button>
                        </li>
                    )
                })
            }
            </ul>
        </div>
    )
}

export default AppsBtn;