import './App.css';
import {HashRouter,Route} from 'react-router-dom';
import React,{useState} from 'react';
import Login from './pages/Login';
function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      <HashRouter>
        <Route path='/' exact>
          <Login setUser ={setUser}/>
        </Route>
      </HashRouter>
    </div>
  );
}

export default App;
