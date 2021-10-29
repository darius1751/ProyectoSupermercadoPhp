import './App.css';
import {HashRouter} from 'react-router-dom';
import React from 'react';
import { UserProvider } from './context/UserContext';
import {SalesProvider} from './context/SalesContext';
import Routers from './components/Routers';
function App() {
  return (
    <div className="App">
      <HashRouter>
        <UserProvider>
         <SalesProvider> 
            <Routers/>
          </SalesProvider>
        </UserProvider>
      </HashRouter>
    </div>
  );
}

export default App;
