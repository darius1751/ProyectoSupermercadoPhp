import './App.css';
import {HashRouter,Route,Switch} from 'react-router-dom';
import React from 'react';
import Login from './pages/Login';
import { UserProvider } from './context/UserContext';
function App() {
  return (
    <div className="App">
      <HashRouter>
        <UserProvider>
        <Switch>
          <Route path='/' exact>
            
            </Route>
            <Route path='/login' exact>
              <Login/>
            </Route>
        </Switch>
        </UserProvider>
      </HashRouter>
    </div>
  );
}

export default App;
