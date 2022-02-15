import { useState } from 'react';
import AppContext from './AppContext'
import { inicialApps, inicialServers } from '../data'
import { timeInNumber, emptyOne, emptyTwo, isEmpty, appOneReturn,
  appTwoReturn } from '../utils'

const AppProvider = ({ children }) => {
  const  [serversArray, setServersArray] = useState(inicialServers)
  const [appsObj, setAppsObj] = useState(inicialApps)
  
  
  const handleNewServer = () => {
    const newServer = {
        id: serversArray.length + 1,
        appOne: {},
        appTwo: {},
        color: 'gray',
    }
    setServersArray((prevState) => ([...prevState, newServer]))          
  }
  
 const handleDestroyServer = () => {
    let lastServer = serversArray.pop() //last server
    let lastServerAppsEmpty = isEmpty({...lastServer}) //last server c/ apps vazios

    if (lastServerAppsEmpty) {
        const newServersArray = serversArray.filter(({id}) => id !== lastServer.id)
        setServersArray([...newServersArray])
    } else if (!lastServerAppsEmpty){
        let firstApp = appOneReturn(lastServer.appOne)
        let secondApp = appTwoReturn(lastServer.appTwo)
        setAppsObj((prevState) => {
            return prevState.map((app) => {
                if (app.name === firstApp.name ){
                    return {...app, qtde: app.qtde - 1}
                }
                return app
            })
        }) 

        setAppsObj((prevState) => {
            return prevState.map((app) => {
                if (app.name === secondApp.name ){
                    return {...app, qtde: app.qtde - 1}
                }
                return app
            })
        })
        
        if (firstApp && secondApp) {
            handleNewApp(firstApp.name, firstApp.color, firstApp.createdAt)
            handleNewApp(secondApp.name, secondApp.color, secondApp.createdAt)
        } else if (firstApp){
            handleNewApp(firstApp.name, firstApp.color, firstApp.createdAt)
        } else if (secondApp){
            handleNewApp(secondApp.name, secondApp.color, secondApp.createdAt)
        }
    }


    // const serversEmpty = serversArray.every(allEmpty) 

    // if (serversEmpty && serversArray.length !== 0) {
    //     let newServersArray = serversArray.pop()
    //     setServersArray([...newServersArray])
    //     return
    // } else {
    //     const lastServerToBeDestroy = serversArray.pop() 
    //     const newArray = serversArray.filter(({id}) => id !== lastServerToBeDestroy.id)
    //     setServersArray([...newArray])
    //     for (let i = 0; i < lastServerToBeDestroy.app.length; i++) {
    //         handleNewApp(lastServerToBeDestroy.app[i].color, lastServerToBeDestroy.app[i].name, lastServerToBeDestroy.app[i].createdAt)
    //     }
    // } 
    // return
 }

 const handleNewApp = ( nameParameter, colorParameter, createdAtParameter = timeInNumber(), showAlert = true) => {
    let number = timeInNumber()
    let newAppUnity = {
        id: number * Math.random(),
        name: nameParameter,
        color: colorParameter,
        createdAt: createdAtParameter,
    }
    
    let serversAppOneEmpty = serversArray.find(emptyOne) //1st server c/ appOne vazio
    let serversApptwoEmpty = serversArray.find(emptyTwo) //1st server c/ apptwo vazio

    if ( !serversAppOneEmpty && !serversApptwoEmpty) {
        if (showAlert) {
          return alert("Falta de espaço no servidor ou falta de servidor !");
        }
        return;
    }

    if (serversAppOneEmpty) {
        setServersArray((prevState) => {
            return prevState.map((server) => {
                if (server.id === serversAppOneEmpty.id) {
                    return { ...server, appOne: {...newAppUnity} }
                }
                return server
            })
        })
        setAppsObj((prevState) => {
            return prevState.map((app) => {
                if (app.name === nameParameter ){
                    return {...app, qtde: app.qtde + 1}
                }
                return app
            })
        })        
    } else if (serversApptwoEmpty){
        setServersArray((prevState) => {
            return prevState.map((server) => {
                if (server.id === serversApptwoEmpty.id) {
                    return { ...server, appTwo: {...newAppUnity} }
                }
                return server
            })
        })
        setAppsObj((prevState) => {
            return prevState.map((app) => {
                if (app.name === nameParameter ){
                    return {...app, qtde: app.qtde + 1}
                }
                return app
            })
        })  
    }
  }

  const handleKillApp = (nameParameter ) => {
    let lastAppUnity = serversArray.reverse().filter(({appOne, appTwo}) => {
        if (appOne.name === nameParameter || appTwo.name === nameParameter) {
            return false
        }
        return true
    })
    setAppsObj((prevState) => {
        return prevState.map((app) => {
            if (app.name === nameParameter && app.qtde > 0){
                return {...app, qtde: app.qtde - 1}
            }
            return app
        })
    })
    setServersArray([...lastAppUnity.reverse()])
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