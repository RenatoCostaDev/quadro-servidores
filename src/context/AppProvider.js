import { useState } from 'react';
import AppContext from './AppContext'
import { inicialApps, inicialServers } from '../data'
import { timeInNumber, allEmpty, notFull, halfFull } from '../utils'

const AppProvider = ({ children }) => {
  const  [serversArray, setServersArray] = useState(inicialServers)
  const [appsObj, setAppsObj] = useState(inicialApps)
  
  
  const handleNewServer = () => {
    const newServer = {
        id: serversArray.length + 1,
        app: [],
        color: 'gray',
    }
    setServersArray((prevState) => ([...prevState, newServer]))          
  }
  
 const handleDestroyServer = () => {
    const serversEmpty = serversArray.every(allEmpty) 

    if (serversEmpty && serversArray.length !== 0) {
        let newServersArray = serversArray.pop()
        setServersArray([...newServersArray])
        return
    } else {
        const lastServerToBeDestroy = serversArray.pop() 
        const newArray = serversArray.filter(({id}) => id !== lastServerToBeDestroy.id)
        setServersArray([...newArray])
        for (let i = 0; i < lastServerToBeDestroy.app.length; i++) {
            handleNewApp(lastServerToBeDestroy.app[i].color, lastServerToBeDestroy.app[i].name, lastServerToBeDestroy.app[i].createdAt)
        }
    } 
    return
 }

 const handleNewApp = ( nameParameter, colorParameter, createdAtParameter = timeInNumber(), showAlert = true) => {
    let number = timeInNumber()
    let newAppUnity = {
        id: number * Math.random(),
        name: nameParameter,
        color: colorParameter,
        createdAt: createdAtParameter,
    }
    
    let serversEmpty = serversArray.find(notFull)
    if (!serversEmpty) {
        if (showAlert) {
          return alert("Falta de espaço no servidor ou falta de servidor !");
        }
        return;
    } else if (serversEmpty){
        let usefullServers = serversArray.find(allEmpty)
        if (usefullServers) {
           setServersArray((prevState) => {
               return prevState.map((server) => {
                   if (server.id === usefullServers.id) {
                       return { ...server, app: [newAppUnity] }
                   }
                   return server
               })
           })
        } else {
            let firstServerAvaiable = serversArray.find(halfFull)
            // console.log(firstServerAvaiable);
            setServersArray((prevState) => {
               return prevState.map((server) => {
                   if (server.id === firstServerAvaiable.id) {
                       return { ...server, app: [...server.app, newAppUnity] }
                   }
                   return server
               })
           })
        }
    } 
  }

  const handleKillApp = (nameParameter, idParameter ) => {
    console.log(idParameter);
    const newServers = serversArray.map((server) => server.app.find((item) => item.name === nameParameter ))
    console.log(newServers)
    const definedApps = newServers.filter((item) => typeof(item) !== 'undefined')
    console.log(definedApps);
    const newServersId = definedApps.map((item) => item.id)
    console.log(newServersId.pop());

    // const idAppToKill = newServersId.pop()
    // setServersArray((prevState) => {return prevState.map(({app}) => app.filter((item) => item.id !== idAppToKill))})

    // const serversRestored = serversArray.map((server) => server.app.filter((item) => item.id !== idAppToKill))
    // console.log(serversRestored);
    
    //to be done...
  }

    return (
        <div>
            <AppContext.Provider value={{handleNewServer, handleNewApp, handleDestroyServer, handleKillApp, appsObj, serversArray}} >
                { children }              
            </AppContext.Provider>
        </div>
    )
}

export default AppProvider;