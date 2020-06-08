import React, {useEffect} from 'react'
import { Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { actions } from './Redux/reducer'
import UsersContainer from './Components/UsersContainer'
import UserDetailsContainer from './Components/UserDetailsContainer'
import AddUserContainer from './Components/AddUserContainer'
import style from './Components/users.module.css'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.loadUsers())
  },[dispatch])


  return (
    <div>
         <div className={style.users_page}>
          <Route exact path='/' render={() => <UsersContainer />} />
          <Route path='/user/:id' component={UserDetailsContainer} />
          <Route path='/add-user' component={AddUserContainer} />
        </div>
    </div>
  );
}

export default App;
