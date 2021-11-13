import React, { useContext } from 'react';
import { Switch,Route,Redirect } from 'react-router-dom';
import UserContext from '../context/UserContext';
import Error404 from '../pages/Error404';
import Index from '../pages/Index';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Register from '../pages/Register';
import ReloadCash from '../pages/ReloadCash';
import Updatecantproducts from '../pages/UpdateCantProducts';
const Routers = () => {
    const {userState} = useContext(UserContext);
    const {user} = userState;
    return (
        <div>
            <Switch>
              <Route path='/' exact>
                <Index/>
              </Route>
              <Route path='/login' exact>
                <Login/>
              </Route>
              <Route path='/registerUsers'>
                {user.type=== '2'?<Register/>:<Redirect to='/login'/>}
              </Route>
              <Route path='/updateCantProducts'>
                  {user.type === '2'?<Updatecantproducts/>:<Redirect to='/login'/>}
              </Route>
              <Route path='/reloadCash'>
              {user.type === '2'?<ReloadCash/>:<Redirect to='/login'/>}
              </Route>
              <Route path='/profile/:userName'>
                    {user.id?<Profile/>:<Redirect to='/login'/>}
              </Route>
              <Route path='*'>
                  <Error404/>
              </Route>
            </Switch>
        </div>
    );
}

export default Routers;
