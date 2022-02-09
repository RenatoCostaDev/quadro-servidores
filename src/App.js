import React from 'react';
import AppsBtn from './components/AppsBtn';
import ServersBtn from './components/ServersBtn';
import ServersDashboard from './components/ServersDashboard';
import AppProvider from './context/AppProvider';
import './App.css';

function App() {
  
  return (
    <AppProvider>
      <div className="App">
        <div id='sidebar'>
            <div>
                <ServersBtn />
            </div>
            <div>
                <AppsBtn />
            </div>
        </div>
        <div>
            <ServersDashboard />
        </div>
    </div>
    </AppProvider>
  );
}

export default App;
